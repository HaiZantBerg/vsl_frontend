FROM node:18

WORKDIR /VSL/vsl_frontend

COPY package.json /VSL/vsl_frontend

RUN npm install

COPY . /VSL/vsl_frontend

CMD ["npm", "run", "dev"]