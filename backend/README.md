# Todo-List API

A Todo List API é uma aplicação RESTful para a manipulação e leitura de tarefas, permitindo operações de CRUD e autenticação via JWT.

## Visão geral

### O desafio

A Todo List API foi pensada para a prática geral dos conhecimentos sobre uma aplicação em Node.js com Express, cobrindo tópicos como: SOLID, REST e POO.

**Os usuários devem ser capaz de:**

- Registrar-se e Autenticar-se
- Criar tarefas
- Buscar tarefas
- Atualizar tarefas
- Deletar tarefas
- Consumir a API de qualquer plataforma via HTTP

### Construído com

- TypeScript
- Node.js
- Express.js
- Prisma
- Postgres
- Mocha, Chai e Sinon

## Endpoints

### Link

- URL da Api: [https://back-to-do-list-hbs.herokuapp.com/](https://back-to-do-list-hbs.herokuapp.com/)

### /user

<details><summary><strong>Criar um novo usuário</strong></summary><br />

- Métodos de requisição: POST

- Formato do body:

```json
{
  "name": "Brett Wiltshire",
  "email": "brett@email.com", // Regra: deve ter o formato de e-mail
  "password": "123456" // Regra: precisa ter ao menos 6 caracteres
}
```

- Formato da resposta:

```json
{
  "id": 8,
  "name": "Brett Wiltshire",
  "email": "brett@email.com",
  "createIn": "2022-06-29T22:36:33.161Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY1NDIxOTMsImV4cCI6MTY1NjYyODU5M30.RjP6wP3IjLkifLGjJzZY-DQgy2crd6WzInciUx7C5zc"
}
```

</details>
</details>

### /login

<details><summary><strong>Fazer login na aplicação</strong></summary><br />

- Métodos de requisição: POST

- Formato do body:

```json
{
  "email": "brett@email.com", // Regra: o e-mail deve está registrado no banco de dados
  "password": "123456" // Regra: está senha deve ser a mesma cadastrada com o e-mail
}
```

- Formato da resposta:

```json
{
  "name": "Brett Wiltshire",
  "email": "brett@email.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY1NDMwNzIsImV4cCI6MTY1NjYyOTQ3Mn0.JQlqJbC8yup3BiSHd-aGriRY-9z7sR_7uGlaB82M89E"
}
```

</details>
</details>

### /task

<details><summary><strong>Criar uma nova tarefa</strong></summary><br />

- Métodos de requisição: POST

- Formato do header:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY1NDMwNzIsImV4cCI6MTY1NjYyOTQ3Mn0.JQlqJbC8yup3BiSHd-aGriRY-9z7sR_7uGlaB82M89E" // Regra: Token criado ao fazer login ou na criação de usuário
}
```

- Formato do body:

```json
{
  "task": "escrever readme",
  "status": "in progress" // Regra: Precisa ser 'done', 'in progress' ou 'pending'
}
```

- Formato da resposta:

```json
{
  "message": "created task"
}
```

</details>

<details><summary><strong>Mostrar tarefas criadas</strong></summary><br />

- Métodos de requisição: GET

- Formato do header:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY1NDMwNzIsImV4cCI6MTY1NjYyOTQ3Mn0.JQlqJbC8yup3BiSHd-aGriRY-9z7sR_7uGlaB82M89E" // Regra: Token criado ao fazer login ou na criação de usuário
}
```

- Formato da resposta:

```json
{
  "id": 7,
  "name": "heroku 1",
  "email": "heroku1@hotmail.com",
  "Task": [
    {
      "id": 7,
      "task": "escrever readme",
      "status": "in progress",
      "createIn": "2022-06-30T00:25:24.214Z",
      "updatedAt": "2022-06-30T00:25:24.215Z"
    },
    {
      "id": 8,
      "task": "escrever readme",
      "status": "in progress",
      "createIn": "2022-06-30T00:25:50.506Z",
      "updatedAt": "2022-06-30T00:25:50.507Z"
    }
  ]
}
```

</details>

<details><summary><strong>Editar tarefa</strong></summary><br />

- Métodos de requisição: PATCH

- Formato do header:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY1NDMwNzIsImV4cCI6MTY1NjYyOTQ3Mn0.JQlqJbC8yup3BiSHd-aGriRY-9z7sR_7uGlaB82M89E" // Regra: Token criado ao fazer login ou na criação de usuário
}
```

- Formato do body:

```json
{
  "idTask": 7,
  "task": "readme criado",
  "status": "pending"
}
```

- Formato da resposta:

```json
{
  "id": 7,
  "task": "readme criado",
  "status": "pending",
  "createIn": "2022-06-30T00:25:24.214Z",
  "updatedAt": "2022-06-30T01:10:53.000Z"
}
```

</details>

<details><summary><strong>Remover tarefa</strong></summary><br />

- Métodos de requisição: DELETE

- Formato do header:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY1NDMwNzIsImV4cCI6MTY1NjYyOTQ3Mn0.JQlqJbC8yup3BiSHd-aGriRY-9z7sR_7uGlaB82M89E" // Regra: Token criado ao fazer login ou na criação de usuário
}
```

- Formato do body:

```json
{
  "idTask": 8
}
```

- Formato da resposta:

```json
{
  "message": "task removed"
}
```

</details>
</details>

## Recursos úteis

- [Documentação Prisma](https://www.prisma.io/docs/)

## Autor

- Linkedin - [Hiago Briano](https://www.linkedin.com/in/hiago-briano/)

- Email - [hiago.artist@hotmail.com](maito:hiago.artist@hotmail.com)
