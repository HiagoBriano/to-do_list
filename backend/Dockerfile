# Informa a imagem que eu quero ultilizar
FROM node:20.5.0-alpine

# Pasta de trabalho no docker
WORKDIR /app/backend

# Copia os arquivos do PC para o docker
COPY . ./

# Comando para instalar as dependências
RUN npm i

# Infoma a porta que eu quero exportar para o PC acessar
EXPOSE 3006

# Comando para iniciar servidor
# CMD ["npm", "run", "docker"]
CMD ["npm", "start"]
