# To-do List

<div align="center"><br>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJs" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="ES Lint" width="40" height="40"/>
  <img src="https://cdn.iconscout.com/icon/free/png-512/amazon-aws-3628617-3029842.png?f=avif&w=256" alt="Aws" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="PostgreSql" width="40" height="40"/>
</div>

## Visão geral

### Desafio:

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

<br />

## Solução criada:

Criei um site de lista de tarefas para os colaboradores adicionarem suas tarefas. É possível consultar a tarefa de qualquer lugar, basta fazer login com a conta criada.

## Aplicação rodando:

 `Veja a aplicação rodando:` https://to-do-list.hiagobriano.online/

#### Primeiro acesso?
> É importante saber que para fazer o cadastro é preciso colocar um e-mail em um formato valido e uma senha de pelo menos 6 caracteres.

<br />

## Rode em sua maquina

<details>
  <summary><b>Requisitos:</b></summary><br>

  - Ter o `Git` instalado em sua máquina;
  - Ter o `Node.js >= 14.17` instalado em sua máquina.
  - Ter o `PostgreSQL` instalado em sua máquina.
  
</details>

<details>
  <summary><b>Clonar</b></summary><br>

Para clonar o repositório usando HTTPS:

```
git clone https://github.com/HiagoBriano/to-do_list.git
```

Para clonar usando SSH:

```
git clone git@github.com:HiagoBriano/to-do_list.git
```
</details>

<details>
  <summary><b>Vamos lá</b></summary><br>
 
`Backend:`

Entre na pasta do projeto:

```
cd to-do_list/backend
```

Instale as dependências do projeto:

```
npm i
```

Crie um arquivo `.env` com as seguintes informações:

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/to-do_list
SECRET=super_senha
PORT=3001
```

Configure o Prisma:

```
npx prisma migrate dev
```

Inicie o projeto:

```
npm start
```
  
`Frontend:`
  
Entre na pasta do projeto:

```
cd to-do_list/frontend
```

Instale as dependencias:

```
npm install
```

Inicie o projeto:

```
npm start
```

Abra o link abaixo no navegador de sua preferencia:

```
http://localhost:3000/
```
</details>

### Rodando Docker

<details>
  <summary><b>Requisitos:</b></summary><br>
  
  - Ter o `Git` instalado em sua máquina;
  - Ter o `docker` instalado e ativado em sua máquina.
  
</details>

<details>
  <summary><b>Clonar</b></summary><br>

Para clonar o repositório usando HTTPS:

```
git clone https://github.com/HiagoBriano/Delivery_App.git
```

Para clonar usando SSH:

```
git clone git@github.com:HiagoBriano/Delivery_App.git
```
</details>

<details>
  <summary><b>Vamos lá</b></summary><br>


Entre na pasta principal:

```
cd Delivery_App
```
  
Inicie o docker com o comando:

```
docker-compose up -d
```

Abra o link abaixo no navegador de sua preferencia:

```
http://localhost:3000/
```

</details>

</details>
<br />


## Documentações:

> `Backend:` [Clique aqui](https://github.com/HiagoBriano/to-do_list/blob/master/backend/README.md)

> `Frontend:` [Clique aqui](https://github.com/HiagoBriano/to-do_list/blob/master/frontend/README.md)

<br />

## Autor

Linkedin - [Hiago Briano](https://www.linkedin.com/in/hiago-briano/)

Email - hiago.artist@hotmail.com
