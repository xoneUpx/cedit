FROM node:alpine
WORKDIR /opt/app
ENV PATH /opt/app/node_modules/.bin:$PATH
COPY ./package.json ./
COPY ./package-lock.json ./
#RUN npm i -g npm
RUN npm i
#RUN npm i -D
