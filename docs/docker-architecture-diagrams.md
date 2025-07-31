# MathCom Docker Architecture - Visual Diagrams

This document contains detailed visual diagrams to help understand the Docker architecture of the MathCom web application.

## 1. Complete System Architecture

```mermaid
graph TB
    subgraph "Internet"
        Client[🌐 Client Browser]
    end
    
    subgraph "Traefik Reverse Proxy Layer"
        Traefik[🔄 Traefik Proxy]
        SSL[🔒 SSL Termination]
        Routing[🛣️ Request Routing]
        WatchTower[🔄 Watchtower]
    end
    
    subgraph "Application Layer"
        AstroNginx[🌐 Nginx - Astro]
        AstroApp[⚡ Astro Application]
        WP[📝 WordPress]
        WPCLI[🖥️ WP-CLI]
    end
    
    subgraph "Data Layer"
        DB[(🗄️ MariaDB)]
        Redis[(⚡ Redis Cache)]
    end
    
    subgraph "Storage Layer"
        WP_Vol[📁 wp_data Volume]
        DB_Vol[📁 db_data Volume]
        Redis_Vol[📁 redis_data Volume]
        LE_Vol[📁 le_data Volume]
    end
    
    subgraph "Networks"
        TraefikNet[🌐 traefik Network]
        WordPressNet[🌐 wordpress Network]
        AstroNet[🌐 astro Network]
    end
    
    Client --> Traefik
    Traefik --> SSL
    SSL --> Routing
    
    Routing --> AstroNginx
    Routing --> WP
    
    AstroNginx --> AstroApp
    WP --> DB
    WP --> Redis
    WPCLI --> DB
    
    WP --> WP_Vol
    DB --> DB_Vol
    Redis --> Redis_Vol
    Traefik --> LE_Vol
    
    AstroApp --> TraefikNet
    AstroNginx --> TraefikNet
    WP --> TraefikNet
    WP --> WordPressNet
    DB --> WordPressNet
    Redis --> WordPressNet
    WPCLI --> WordPressNet
    AstroApp --> AstroNet
    AstroNginx --> AstroNet
```

## 2. Production Environment Flow

```mermaid
sequenceDiagram
    participant U as 👤 User
    participant T as 🔄 Traefik
    participant AN as 🌐 Nginx (Astro)
    participant A as ⚡ Astro App
    participant W as 📝 WordPress
    participant DB as 🗄️ MariaDB
    participant R as ⚡ Redis
    
    U->>T: HTTPS Request
    T->>T: SSL Termination
    T->>T: Route Decision
    
    alt Astro Route (/)
        T->>AN: Forward to Astro
        AN->>A: Proxy Request
        A->>W: API Call (if needed)
        W->>DB: Database Query
        W->>R: Cache Check
        A->>AN: Response
        AN->>T: Response
    else WordPress Route (/wp-admin)
        T->>W: Direct Request
        W->>DB: Database Query
        W->>R: Cache Check
        W->>T: Response
    end
    
    T->>U: HTTPS Response
```

## 3. Network Architecture

```mermaid
graph LR
    subgraph "External Access"
        Internet[🌐 Internet]
    end
    
    subgraph "Traefik Network (External)"
        T[🔄 Traefik Proxy]
        W[📝 WordPress]
        A[⚡ Astro]
    end
    
    subgraph "WordPress Network (Internal)"
        WP[📝 WordPress]
        DB[(🗄️ MariaDB)]
        R[(⚡ Redis)]
        WPC[🖥️ WP-CLI]
    end
    
    subgraph "Astro Network (Internal)"
        AN[🌐 Nginx - Astro]
        AA[⚡ Astro App]
    end
    
    Internet --> T
    T --> W
    T --> A
    W --> DB
    W --> R
    WPC --> DB
    AN --> AA
```

## 4. Data Persistence Architecture

```mermaid
graph TB
    subgraph "Docker Volumes"
        WP_Vol[📁 wp_data - WordPress files]
        DB_Vol[📁 db_data - MariaDB data]
        Redis_Vol[📁 redis_data - Redis cache]
        LE_Vol[📁 le_data - SSL certificates]
        Socket_Vol[📁 db_socket - MySQL socket]
    end
    
    subgraph "Applications"
        WP_App[📝 WordPress]
        DB_App[🗄️ MariaDB]
        Redis_App[⚡ Redis]
        Traefik_App[🔄 Traefik]
    end
    
    WP_App --> WP_Vol
    DB_App --> DB_Vol
    DB_App --> Socket_Vol
    Redis_App --> Redis_Vol
    Traefik_App --> LE_Vol
```

## 5. Service Dependencies

```mermaid
graph TD
    subgraph "Startup Order"
        T[🔄 Traefik - 1st Priority]
        DB[🗄️ MariaDB - 2nd Priority]
        R[⚡ Redis - 3rd Priority]
        W[📝 WordPress - 4th Priority]
        A[⚡ Astro - 5th Priority]
    end
    
    T --> DB
    T --> R
    DB --> W
    R --> W
    W --> A
```

## 6. Security Architecture

```mermaid
graph TB
    subgraph "External Security Layer"
        SSL[🔒 SSL/TLS Termination]
        HTTPS[🔐 HTTPS Enforcement]
        HSTS[🛡️ HSTS Headers]
    end
    
    subgraph "Network Security Layer"
        NS[🌐 Network Segmentation]
        FW[🔥 Firewall Rules]
        IP[📍 Static IP Addressing]
    end
    
    subgraph "Application Security Layer"
        UPD[🔄 Automatic Updates]
        HC[❤️ Health Checks]
        LOG[📝 Access Logging]
    end
    
    SSL --> HTTPS
    HTTPS --> HSTS
    NS --> FW
    FW --> IP
    UPD --> HC
    HC --> LOG
```

## 7. Local Development vs Production

```mermaid
graph LR
    subgraph "Local Development"
        LT[🔄 Traefik - HTTP Only]
        LN[🌐 Nginx - Simple Proxy]
        LA[⚡ Astro - Hot Reload]
    end
    
    subgraph "Production"
        PT[🔄 Traefik - SSL + Routing]
        PW[📝 WordPress - Full Stack]
        PA[⚡ Astro - Optimized Build]
        PD[(🗄️ Database)]
        PR[(⚡ Cache)]
    end
    
    LT --> LN
    LN --> LA
    
    PT --> PW
    PT --> PA
    PW --> PD
    PW --> PR
```

## 8. Monitoring and Health Checks

```mermaid
graph TB
    subgraph "Health Monitoring"
        HC1[❤️ Database Health]
        HC2[❤️ WordPress Health]
        HC3[❤️ Astro Health]
        HC4[❤️ Traefik Health]
    end
    
    subgraph "Monitoring System"
        LOG[📝 Log Aggregation]
        MET[📊 Metrics Collection]
        ALERT[🚨 Alert System]
    end
    
    subgraph "Auto-Recovery"
        RESTART[🔄 Auto Restart]
        UPDATE[⬆️ Auto Update]
        SCALE[📈 Auto Scaling]
    end
    
    HC1 --> LOG
    HC2 --> LOG
    HC3 --> LOG
    HC4 --> LOG
    LOG --> MET
    MET --> ALERT
    ALERT --> RESTART
    RESTART --> UPDATE
```

## 9. Deployment Pipeline

```mermaid
graph LR
    subgraph "Development Phase"
        DEV[💻 Local Development]
        TEST[🧪 Testing]
    end
    
    subgraph "Staging Phase"
        STAGE[🔍 Staging Environment]
        VAL[✅ Validation]
    end
    
    subgraph "Production Phase"
        PROD[🚀 Production Deployment]
        MON[📊 Monitoring]
    end
    
    DEV --> TEST
    TEST --> STAGE
    STAGE --> VAL
    VAL --> PROD
    PROD --> MON
```

## 10. Troubleshooting Flow

```mermaid
graph TD
    subgraph "Issue Detection"
        Problem[🚨 Issue Detected]
        Logs[📝 Check Logs]
        Status[📊 Check Status]
    end
    
    subgraph "Diagnosis"
        Network[🌐 Network Issues?]
        Database[🗄️ Database Issues?]
        SSL[🔒 SSL Issues?]
        Performance[⚡ Performance Issues?]
    end
    
    subgraph "Resolution"
        Restart[🔄 Restart Service]
        Rebuild[🔨 Rebuild Container]
        Reset[🔄 Complete Reset]
    end
    
    Problem --> Logs
    Problem --> Status
    Logs --> Network
    Logs --> Database
    Logs --> SSL
    Logs --> Performance
    
    Network --> Restart
    Database --> Restart
    SSL --> Restart
    Performance --> Restart
    
    Restart --> Reset
```

## 11. Environment Variables Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        P_COMPOSE[COMPOSE_PROJECT_NAME]
        P_HOST[NGINX_HOST]
        P_DB[DB_NAME, DB_USER, DB_PASS]
        P_SSL[LE_EMAIL]
        P_API[PUBLIC_API, PUBLIC_INTERNAL_API]
    end
    
    subgraph "Local Environment"
        L_API[PUBLIC_API]
        L_INTERNAL[PUBLIC_INTERNAL_API]
    end
    
    subgraph "Shared Configuration"
        S_MYSQL[MySQL Config]
        S_PHP[PHP Config]
    end
    
    P_COMPOSE --> S_MYSQL
    P_HOST --> S_PHP
    P_DB --> S_MYSQL
    P_SSL --> S_PHP
    P_API --> S_PHP
    
    L_API --> S_PHP
    L_INTERNAL --> S_PHP
```

## 12. Container Lifecycle

```mermaid
graph LR
    subgraph "Container Lifecycle"
        Build[🔨 Build Image]
        Create[➕ Create Container]
        Start[▶️ Start Container]
        Run[🔄 Running]
        Stop[⏹️ Stop Container]
        Remove[🗑️ Remove Container]
    end
    
    subgraph "Health States"
        Healthy[✅ Healthy]
        Unhealthy[❌ Unhealthy]
        Starting[🔄 Starting]
        Stopped[⏸️ Stopped]
    end
    
    Build --> Create
    Create --> Start
    Start --> Run
    Run --> Stop
    Stop --> Remove
    
    Start --> Starting
    Starting --> Healthy
    Starting --> Unhealthy
    Healthy --> Run
    Unhealthy --> Stop
    Run --> Stopped
    Stop --> Stopped
```

---

## Legend

- 🔄 **Traefik**: Reverse proxy and load balancer
- 📝 **WordPress**: Content management system
- ⚡ **Astro**: Modern static site generator
- 🗄️ **MariaDB**: Database server
- ⚡ **Redis**: Caching layer
- 🌐 **Nginx**: Web server
- 🔒 **SSL**: Security layer
- 📁 **Volumes**: Data persistence
- 🌐 **Networks**: Container communication
- 🖥️ **WP-CLI**: WordPress command line
- 🔄 **Watchtower**: Automatic updates
- ❤️ **Health Checks**: Service monitoring
- 📝 **Logs**: Logging and monitoring
- 🚨 **Alerts**: Alert system
- 🔨 **Build**: Container building
- ▶️ **Start**: Service startup
- ⏹️ **Stop**: Service shutdown 