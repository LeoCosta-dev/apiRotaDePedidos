# Desenvolvimento de uma api do tipo Rest em NodeJs utilizando a framework express.

## Descrição da aplicação:
A aplicação é um ambiente back-end onde como parametros de entrada são recebidos dois ou mais endereços e são retornados em distancia euclidiana o par de endereços mais próximo e o mais distante, com as suas devidas distancias expressas. Para apoio e obtenção das coordenadas foi consumida a api <a href = "https://developers.google.com/maps/documentation/geocoding/start">Geocoding</a> do Google, onde o exemplo para as variaveis de ambiente que definem a conexão se encontra <a href = 'https://github.com/LeoCosta-dev/apiCalculoDeDistanciasNodeJS/blob/main/.env.exemple'>aqui</a>, foi utilizado o padrão do tipo REST e como organização conceitos de MVC.
<br>

### Exemplo de retorno da aplicação:

```json
{
    "maisPróximo": {
        "intinerario": "Av. Rio Branco, 1 ​ Centro, Rio de Janeiro ​ RJ, 20090​ 003 até Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021​200",
        "distancia": 0.011921952761606592
    },
    "maisDistante": {
        "intinerario": "Av. Rio Branco, 1 ​ Centro, Rio de Janeiro ​ RJ, 20090​ 003 até Rua 19 de Fevereiro, 34 ​ Botafogo, Rio de Janeiro ​ RJ, 22280​ 030",
        "distancia": 0.05389845314153423
    }
}
```

## Ferramentas utilizadas:
Para o desenvolvimento como já mencionado foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, hospedado pela ferramenta de cloud Heroku.

## Dependencias necessárias:
```js
"dependencies": {
    "axios": "^0.24.0",
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "loader": "^2.1.1",
    "dotenv": "^10.0.0"
  }
```
As dependencias podem ser encontradas <a href = 'https://github.com/LeoCosta-dev/apiCalculoDeDistanciasNodeJS/blob/main/package.json'>neste arquivo</a> do qual o trecho acima foi extraído para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v" o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/LeoCosta-dev/apiCalculoDeDistanciasNodeJS && npm install
```
## Dependencias de desenvolvimento:
```js
"devDependencies": {
    "dotenv": "^10.0.0"
  }
```
Em outra parte do <a href = 'https://github.com/LeoCosta-dev/apiCalculoDeDistanciasNodeJS/blob/main/package.json'>arquivo</a> de configuração é possível encontrar o código acima que foi extraído do mesmo, essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev dotenv
```
## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo  na sequencia dos códigos acima caso seja a primeira execução, esteja na sequencia dos comandos acima e com o seu banco de dados já conectado seja ele local ou em nuvem.

```
npm start
```

## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da api:

No presente momento temos apenas a rota <b>"/"</b> onde podemos fazer o método GET passando como parametros da url querys ilimitadas contendo o endereço, aconselha-se tratar os endereços com o método <i>encodeURIComponent()</i> antes de colocalos na url de solicitação. abaixo segue a url da api no ar:
<br>
https://api-calcula-distancias-nodejs.herokuapp.com/
<br>

## Exemplo de URL:
<br>

```url
https://api-calcula-distancias-nodejs.herokuapp.com/?address1=Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030&address2=Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,+20090​003&address3=Praça+Mal.+Âncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021​200
```
