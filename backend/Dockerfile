FROM node:alpine

ENV PORT 3333

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --silent && npm cache clean --force

# Copying source files
COPY . /usr/src/app

ENV PATH=/usr/src/app/node_modules/.bin:$PATH

COPY tsconfig.json /usr/src/app

COPY .env /usr/src/app

# Building app
RUN npm run build
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeapi -u 1001
RUN chown -R nodeapi:nodejs /usr/src/app
USER nodeapi

EXPOSE 3333

CMD ["npm", "run", "dev"]