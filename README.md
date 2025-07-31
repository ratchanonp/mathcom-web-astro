# MathCom Website - Astro Framework

A modern, multilingual website for the Mathematics and Computer Science Department at Chulalongkorn University, built with [Astro](https://astro.build/) framework.

## 🚀 Features

- **Multilingual Support**: Thai and English content
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **React Integration**: Interactive components using React
- **TypeScript**: Full type safety
- **SEO Optimized**: Sitemap generation and meta tags
- **Docker Support**: Containerized deployment
- **WordPress Integration**: Content management with WordPress
- **Responsive Design**: Mobile-first approach

## 📦 Prerequisites

- Node.js 18+
- pnpm 9.15.3+
- Docker (for containerized deployment)

## 🚀 Getting Started

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mathcom-web-astro
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm astro` | Run Astro CLI commands |

### Docker Deployment

#### Local Development with Docker

```bash
# Start local development environment
pnpm docker:compose:up

# Build and start
pnpm docker:compose:build

# Stop containers
pnpm docker:compose:down
```

#### Production Deployment

```bash
# Start proxy service
pnpm docker:compose:proxy:up
```

## 📁 Project Structure

```text
mathcom-web-astro/
├── src/
│   ├── components/          # Reusable UI components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Astro pages (routes)
│   ├── modules/            # Feature modules
│   ├── common/             # Shared components and utilities
│   ├── libs/               # Utility functions and API
│   ├── interfaces/         # TypeScript interfaces
│   ├── store/              # State management
│   └── styles/             # Global styles
├── public/                 # Static assets
├── docker/                 # Docker configuration
│   ├── local/              # Local development setup
│   ├── production/         # Production deployment
│   └── shared/             # Shared Docker resources
└── docs/                   # Documentation
```

## 🌐 Multilingual Support

The website supports both Thai and English languages with the following structure:

- English pages: `/en/`
- Thai pages: `/th/`
- Default language: Thai

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- Custom color palette
- Typography with Work Sans, Kanit, and Prompt fonts
- Responsive design utilities
- Animation support with `tailwindcss-animate`

## 🔧 Configuration

### Astro Configuration

- **Output**: Server-side rendering (SSR)
- **Adapter**: Node.js standalone
- **Integrations**: React, Tailwind CSS, Sitemap
- **Site URL**: <https://math.sc.chula.ac.th>

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
# Add your environment variables here
```

## 📚 Documentation

Additional documentation can be found in the `docs/` directory:

- Docker Architecture Documentation
- Docker Disk Space Management
- Docker Service Restart Guide


## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using [Astro](https://astro.build/)**
