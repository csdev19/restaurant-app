FROM node:16.13.2-alpine3.15
ENV NODE_ENV=development
ENV DEV_PORT=8001

WORKDIR /app
COPY package*.json ./
# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
ARG npm_install_command=ci
RUN npm $npm_install_command

COPY . ./

CMD ["npm", "run", "start:local", "--", "-p", "${DEV_PORT}"]
