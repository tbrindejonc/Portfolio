# -------------------
# Step 1 : base
# -------------------
FROM node:18-slim AS base
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    libc6 \
    git \
    openssl
WORKDIR /app
EXPOSE 3000

# -------------------
# Step 2 : builder
# -------------------
FROM base AS builder
WORKDIR /app
COPY package*.json ./

# Install Panda CSS for codegen
RUN npm install -g @pandacss/dev

# Install dependencies
COPY . .
RUN npm install

# GENERATE Panda CSS files
RUN npx panda codegen

# Build Next.js
RUN npm run build

# -------------------
# Step 3 : production
# -------------------
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

# Copy files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/logos ./logos

CMD ["npm", "run", "start"]

# -------------------
# Step 4 : dev
# -------------------
FROM base AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json ./
COPY . .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

