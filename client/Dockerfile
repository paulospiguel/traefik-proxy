FROM node:alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --silent && npm cache clean --force

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /usr/src/app/.next
USER nextjs

EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]