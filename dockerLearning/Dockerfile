FROM node

COPY index.js /home/app/script.js
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm install
CMD ["node", "index"]