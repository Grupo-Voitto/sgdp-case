# Sistema de Gerenciamento de Projetos - TechX

![contru-prime](https://github-production-user-asset-6210df.s3.amazonaws.com/54844857/334418820-e0553bad-3eb9-4d20-a056-5b7c185d3290.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240528T130449Z&X-Amz-Expires=300&X-Amz-Signature=770f3545b267aec451a9d889f801720a6664e770ed5291fb15deed77d95c786b&X-Amz-SignedHeaders=host&actor_id=54844857&key_id=0&repo_id=797207065)

<p align="center">	
<img  src="https://img.shields.io/static/v1?label=javascript&message=Linguagem primaria&color=yellow&style=for-the-badge&logo=javascript"/>
<img  src="https://img.shields.io/static/v1?label=node&message=Run Time Javascript&color=green&style=for-the-badge&logo=node.js"/>
<img  src="https://img.shields.io/static/v1?label=react&message=Biblioteca Frontend&color=blue&style=for-the-badge&logo=react"/>
<img  src="https://img.shields.io/static/v1?label=mysql&message=SGBD&color=blue&style=for-the-badge&logo=mysql"/>
</p>

> 🚀 Projeto direcionado ao case mba de Engenharia FullStack do Grupo Voitto

## Descrição do Projeto

Este projeto é um Sistema de Gerenciamento de Projetos (SGP) desenvolvido para a empresa ConstruPrime. O SGP é composto por três principais componentes: Frontend Web, Backend e Aplicativo Mobile, proporcionando uma solução completa e integrada para o gerenciamento eficiente de projetos.

Para te ajudar nesse desafio, criamos um modelo que você deve utilizar como um template do Github.
O template está disponível na seguinte url: **Acessar Template**
Dica: Utilize o botão 'use this template';

## Tecnologias Utilizadas

- **Frontend:** JavaScript, React (create-react-app)
- **Backend:** Node.js, Sequelize
- **Aplicativo** React Native
- **Banco de Dados:** MySQL
- **Versionamento:** Git
- **Repositório:** Github

## Estrutura do Projeto

- **Frontend Web:** Interface principal para gerenciamento de projetos.
- **Backend:** Processamento de dados, lógica de negócios e integração com o banco de dados.
- **Aplicativo Mobile:** Acesso e atualização de informações em tempo real via dispositivos iOS e Android.

## Requisitos do Sistema

- **Node.js**
- **MySQL**
- **Git**

## Instruções para Configuração e Execução

### 1. Clonar o Repositório

```bash
git clone https://github.com/Grupo-Voitto/sgdp-case.git
```

### 2. Configuração do Backend

#### 2.1. Instalar Dependências
```
cd backend
npm install
```

Na pasta api, crie um arquivo `.env` com base no `.env-example`. Lá você deve colocar as variáveis que referenciem o seu banco de dados local.

Lembre-se também de importar o banco de dados utilizando o arquivo `desafio-mba.sql` disponível na raiz do projeto.


#### 2.2. Configurar Banco de Dados

Você vai precisar criar simplesmente a **conexão local do seu servidor ( api ) com o seu banco de dados**. Lembre-se de usar o `desafio-mba.sql` é ele que possui nossa estrutura pronta

Uma dica, pode ser usar a conexão [XAMPP](https://www.apachefriends.org/pt_br/index.html) + [MySQL workbench](https://www.mysql.com/products/workbench/)

Links úteis: 

- Video ensinando a fazer a conexão: [Link](https://www.youtube.com/watch?v=f_EGF3027qs)
- Issue do  Stacoverflow: [Link](https://stackoverflow.com/questions/57774867/using-xampp-and-mysql-workbench-together)
- Certifique-se de que o MySQL está instalado e em execução.
- Utilize o arquivo `desafio-mba.sql` fornecido para popular o banco de dados.

#### 2.3 Iniciar o Servidor Backend

```
npm start
```

### 3. Configuração do Frontend

#### 3.1. Instalar Dependências

```bash
cd frontend
npm install
```

### 3.2. Iniciar o Servidor Frontend

```
npm start
```

### Configuração do Aplicativo Mobile

#### 4.1. Instalar Dependências
```bash
cd mobile
npm install
```
#### 4.2 Iniciar o Aplicativo Mobile

AJUSTA AQ  DIEGO

#### Estrutura de Diretórios

```
repo-sgp-techx/
│
├── backend/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── database.sql
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── mobile/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
└── README.md

```

### Funcionalidades

#### Frontend Web
- Listagem dos projetos e seus status.
- Visualização detalhada de cada projeto.
- Adição, edição e exclusão de projetos.
- Adição, edição e exclusão de tarefas.

#### Backend
- Configuração do servidor e banco de dados.
- Operações CRUD para gerenciamento de dados.

#### Aplicativo Mobile
- Listagem dos projetos e seus status.
- Visualização detalhada de cada projeto.
- Adição, edição e exclusão de projetos.
- Adição, edição e exclusão de tarefas.

### Objetivos do Projeto
- Entregar um Sistema de Gerenciamento de Projetos altamente funcional que atenda aos requisitos exclusivos da ConstruPrime.
- Garantir uma experiência do usuário excepcional em todas as plataformas (web e mobile).

### Contato

Caso tenha alguma dúvida ou necessite de mais informações, por favor, entre em contato:

email: ti@voitto.com.br
