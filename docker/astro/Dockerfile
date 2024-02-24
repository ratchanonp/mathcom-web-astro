FROM node:lts-alpine AS base
WORKDIR /app

# Install PNPM
RUN npm install -g pnpm

# Install dependencies
COPY ["./package.json", "./pnpm-lock.yaml", "./"]

FROM base AS dependencies
RUN pnpm install --frozen-lockfile

FROM dependencies AS build
COPY ["./", "./"]
RUN pnpm astro build

FROM base AS runtime
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]