# API do aplicativo To-do List

Projeto idealizado pela [Trybe](https://www.betrybe.com/)

## Visão geral

### O desafio

- Criar uma API para ser acessada e administrada por um site de lista de tarefas.
- Fazer deploy pelo heroku.
- Usar banco de dados relacional.

### Links

- Api URL: [https://back-to-do-list-hbs.herokuapp.com/](https://back-to-do-list-hbs.herokuapp.com/)

### Endpoints

<details><summary><h4>/user<h4></summary>

<details><summary><strong>Criar um novo usuário</strong></summary><br />

- Métodos de requisição: POST

- Formato do body:

```json
{
	"name": "Brett Wiltshire",
	"email": "brett@email.com", // Regra: deve ter o formato de e-mail
	"password": "123456"  // Regra: precisa ter ao menos 6 caracteres
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
</details></details>
  
<details><summary><h4>/login<h4></summary>

<details><summary><strong>Fazer login na aplicação</strong></summary><br />

- Métodos de requisição: POST

- Formato do body:

```json
{
	"email": "brett@email.com", // Regra: o e-mail deve está registrado no banco de dados
	"password": "123456"  // Regra: está senha deve ser a mesma cadastrada com o e-mail
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
</details></details>

## Autor

- Linkedin- [Hiago Briano](https://www.linkedin.com/in/hiago-briano/)

- Email - [hiago.artist@hotmail.com](maito:hiago.artist@hotmail.com)