FROM node:alpine 

WORKDIR /APP

COPY . .

EXPOSE 2323

CMD node index.js