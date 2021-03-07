FROM node:lts-alpine

# install project dependencies
RUN npm install

# build app for production with minification
RUN npm run build

# keep alive
# CMD ['tail', '-f', '/dev/null']