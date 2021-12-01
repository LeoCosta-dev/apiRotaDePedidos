# Desenvolvimento de uma api do tipo Rest em NodeJs utilizando a framework express.

## Descrição da aplicação:
A aplicação é um ambiente back-end que gerencia e automatiza uma rotina de pedidos, para qualquer tipo de serviço. Para isso foi utilizado o banco de dados relacional SQLite, foi utilizado o padrão do tipo REST e como organização conceitos de MVC.

## Ferramentas utilizadas:
Para o desenvolvimento como já mencionado foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, além do banco de dados relacional SQLite e hospedagem pela ferramenta de cloud Heroku.

## Dependencias necessárias:
```js
"dependencies": {
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "moment": "^2.29.1",
    "sqlite3": "^5.0.2"
  }
```
As dependencias podem ser encontradas <a href = 'https://github.com/LeoCosta-dev/apiRotaDePedidos/blob/main/package.json'>neste arquivo</a> do qual o trecho acima foi extraído, para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v", o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/LeoCosta-dev/apiRotaDePedidos.git && cd apiRestNodeJsAgendaDeAtendimentos && npm install
```
## Dependencias de desenvolvimento:
```json
"devDependencies": {
    "jest": "^27.3.1",
    "nodemon": "^2.0.15"
  }
```
Em outra parte do <a href = 'https://github.com/LeoCosta-dev/apiRotaDePedidos/blob/main/package.json'>arquivo</a> de configuração é possível encontrar o código acima que foi extraído do mesmo, essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev jest && npm install --save-dev nodemon
```
## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da api:

No presente momento temos apenas a rota <b>"/pedidos"</b> onde podemos fazer alguns métodos interessantes.
<br>
<br>

### Ver todos os pedidos:

Utilizar o método HTTP Get no caminho <b>"url da api" + /pedidos</b>
<br>
<br>

### Buscar pedidos por id:

Utilizar o método HTTP Get no caminho <b>"url da api" + /pedidos/id</b>
<br>
<br>

### Adicionar pedidos:
Utilizar o método HTTP Post no caminho <b>"url da api" + /pedidos</b> com todos os dados necessários para o seu banco de dados. Abaijo segue um json de exemplo para corpo da requisição.

```json
{
      "ENDERECO_CLIENTE": "STRING",
      "ENDERECO_FORNECEDOR": "STRING",
      "PRECO_FRETE": "DOUBLE",
      "PRAZO_ENTREGA": "INT",
      "ID_PRODUTO": "INT",
      "ID_FORNECEDOR": "INT",
      "PRECO_PRODUTO": "DOUBLE",
    }
```
<br>
<br>

### Modificar um pedidos já existente:
Utilizar o método HTTP Patch no caminho <b>"url da api" + /pedidos/:id</b> passando os valores que deseja alterar especificando seus devidos campos. Para isso basta respeitar a sintaxe json novamente passada abaixo no body da requisição.
```json
{
      "ENDERECO_CLIENTE": "STRING",
      "ENDERECO_FORNECEDOR": "STRING",
      "PRECO_FRETE": "DOUBLE",
      "PRAZO_ENTREGA": "INT",
      "ID_PRODUTO": "INT",
      "ID_FORNECEDOR": "INT",
      "PRECO_PRODUTO": "DOUBLE",
    }
```
<br>
<br>

### Deletar um pedidos:
Utilizar o método HTTP Delete no caminho <b>"url da api" + /pedidos/:id</b>.

<br>
<br>

### OBS.2: Caso apague você apague o arquivo do banco de dados sem querer por algum desconhecido, rode o comando abaixo para criar outro novamente, mas atenção, esse novo banco virar vazio, apenas com a linha 1 contendo o exemplo dos tipos de dados aceitos nele.

```node
node ./src/infra/create-database.js
```