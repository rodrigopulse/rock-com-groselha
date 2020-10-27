# API para E-commerce

## Instalação

Esse projeto utiliza Yarn, portanto para instalar precisa rodar no terminal o seguinte comando

`yarn`

Será necessário o arquivo .env com a senha para acesso ao mongodb em ambiente de dev. Se você pretende cooperar com esse projeto, basta enviar uma mensagem para liberação do acesso.

## Ambiente de Dev

No ambiente de dev, após instalado os módulos com o comando yarn, basta rodar o comando

`yarn dev`

## Produção

Para gerar o pacote de produção, rode o comando

`yarn build`

## Rotas

### Usuario

| Rota              | Método | Descrição                                     |
| ----------------- | ------ | --------------------------------------------- |
| /usuario/:id      | GET    | Lista o usuário pelo id                       |
| /usuario/cadastra | POST   | Cria o usuário                                |
| /usuario/login    | POST   | Faz o login do usuário e responde com o token |

### Produto

| Rota              | Método | Descrição                                     |
| ----------------- | ------ | --------------------------------------------- |
| /produto/:id      | GET    | Lista o produto pelo id                       |
| /produto/cadastra | POST   | Cadastra Produto                              |
| /produto/:id      | DELETE | Deleta o Produto                              |

## Schemas

### Usuario

| Título        | Tipo    | Descrição                                     |
| ------------- | ------- | --------------------------------------------- |
| email         | String  | Required, Unique                              |
| nome          | String  |                                               |
| senha         | String  |                                               |
| role          | String  |                                               |

### Produto

| Título        | Tipo     | Descrição                                     |
| ------------- | -------- | --------------------------------------------- |
| titulo        | String   | Required                                      |
| descricao     | String   |                                               |
| imagens       | Array    |                                               |
| peso          | Number   |                                               |
| estoque       | Number   |                                               |
| categoria     | ObjectId |                                               |
| destaque      | Boolean  |                                               |

### Categoria

| Título        | Tipo     | Descrição                                     |
| ------------- | -------- | --------------------------------------------- |
| titulo        | String   | Required                                      |
| descricao     | String   |                                               |