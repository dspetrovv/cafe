FROM node:16.14
WORKDIR /application
COPY . /
EXPOSE 3000
RUN npm install