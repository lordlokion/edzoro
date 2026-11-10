# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# deps — install the dependency tree once
# ---------------------------------------------------------------------------
FROM docker.io/library/node:24-slim AS deps
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci

# ---------------------------------------------------------------------------
# build — compile the Next.js app into a standalone server
# ---------------------------------------------------------------------------
FROM deps AS build
COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
# runner — `node server.js` from the standalone output
# ---------------------------------------------------------------------------
FROM docker.io/library/node:24-slim AS runner
# HOSTNAME=0.0.0.0 matters: the standalone server binds to localhost by
# default, which would break the published port mapping.
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

USER node
EXPOSE 3000
CMD ["node", "server.js"]
