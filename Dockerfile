FROM node:current-slim

RUN apt update -y 

RUN apt install nginx -y 
RUN service nginx start


WORKDIR /ali/

COPY package*.json ./

 RUN npm install 

COPY . .

RUN npm run build

COPY ./build /usr/share/nginx/html/

COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["node","src/Server/server.js"]