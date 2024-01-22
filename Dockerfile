FROM node:alpine

WORKDIR C:\Users\e_gustavoaa\Documents\projetos\testes\blog

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]