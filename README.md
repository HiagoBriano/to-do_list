# To-do List

## Visão geral

### Contexto:

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

## 🚀 Rode em sua maquina

### Modo tradicional

<details>
  <summary><b>Requisitos:</b></summary><br>

  - Ter o `Git` instalado em sua máquina;
  - Ter o `node` instalado em sua máquina.
  
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

Configure o Prisma:

```
npx prisma generate
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
http://localhost:3010/
```
</details>


### Usando Docker

<details>
  <summary><b>Requisitos:</b></summary><br>
  
  - Ter o `Git` instalado em sua máquina;
  - Ter o `docker` instalado em sua máquina.
  
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

Entre na pasta de backend:

```
cd to-do_list/backend
```
  
Inicie o docker com o comando:

```
npm run docker
```

  `Frontend:`
  
Entre na pasta de frontend:

```
cd to-do_list/frontend
```
  
Inicie o docker com o comando:

```
npm run docker
```

Abra o link abaixo no navegador de sua preferencia:

```
http://localhost:3010/
```
</details>

</details>

<br>
