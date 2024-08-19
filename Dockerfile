FROM node:18

WORKDIR /vsl_frontend

COPY package.json /vsl_frontend

RUN npm install

COPY . /vsl_frontend

CMD ["npm", "run", "dev"]