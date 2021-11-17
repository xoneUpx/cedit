FROM node:alpine
WORKDIR /opt/app
ENV PATH /opt/app/node_modules/.bin:$PATH
COPY ./app/package.json ./
#COPY ./app/package-lock.json ./
#RUN npm i -g npm
#USER node
RUN mkdir -p /opt/app/node_modules
RUN chown -R node /opt/app/node_modules
RUN npm i
#RUN chmod -R 0777 /opt/app/node_modules
COPY ./app .
#RUN npm i -D
