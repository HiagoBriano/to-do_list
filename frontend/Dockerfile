# Informa a imagem que eu quero ultilizar
FROM node:20.5.0-alpine

# Pasta de trabalho no docker
WORKDIR /app/frontend

# Copia os arquivos do PC para o docker
COPY . ./

# Comando para instalar as dependências
RUN npm install

# Infoma a porta que eu quero exportar para o PC acessar
EXPOSE 3005

# Comando para iniciar servidor
CMD ["npm", "start"]