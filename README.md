# Boas vindas ao repositório do projeto blogs-api!

---

Neste projeto, desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog!

A aplicação foi desenvolvida em Node.js usando o pacote sequelize para fazer um manipular as queries;

A Api foi desenvolvida seguindo a arquitetura de software de camadas MSC (Model Service Controller);

Desenvolvi endpoints que estão conectados ao banco de dados seguindo os princípios do REST;


## 🛠 Tecnologias usadas:

* JavaScript;
* Docker;
* Express;
* Node;
* Mysql;
* Sequelize

## Execute localmente:

Clone o projeto
```bash
git clone git@github.com:yuryss98/project-blogs-api.git
```

Vá para o diretório do projeto:
```bash
cd project-blogs-api
```

Entre no Vs Code para verificar os arquivos usando o atalho no terminal:
```bash
code .
```

Abra O terminal e execute os comandos:
```bash
docker-compose up -d --build
```

```bash  
docker exec -it blogs_api bash
```

```bash
npm install
```

```bash
npm run db
```

```bash
npm run start
```

## Depois de executar todos os comandos, ja teremos uma aplicação rodando na porta 3000, e um banco de dados criado e populado, com isso estamos prontos para consumir os devidos endpoints!!

## Endpoints: todos os endpoints são acessiveis a partir da rota http://localhost:3000
  
  <details close>
  <summary>POST /login</summary>
  
  -- O método POST em /login quando executado com um email e senha corretos retorna um token, token esse que é usado para poder acessar outras rotas da api, aceita 2 campos, sendo eles:
  
  -- email: campo do tipo texto, tem que ser um email no formato valido exemplo => "lewishamilton@gmail.com" - CAMPO OBRIGATORIO;
  
  -- password: campo do tipo texto, tem que ser de no minimo 6 caracters exemplo => "123456" - CAMPO OBRIGATORIO;
  
  EXEMPLO:
  
  ```json
      {
        "email": "lewishamilton@gmail.com",
        "password": "123456"
      }
  ```
  
  </details>
  
  <details close>
  <summary>POST /user</summary>
  -- O método POST em /user é usado para criar um usuario, quando criado com sucesso retorna um token, token esse que é usado para poder acessar outras    rotas da api, aceita 4 campos, sendo eles:
  
    -- displayName: campo do tipo texto de no minimo 8 caracters - CAMPO OBRIGATORIO;
    
    -- email: campo do tipo texto, tem que ser um email no formato valido => exemplo@exemplo.com - CAMPO OBRIGATORIO;
    
    -- password: campo do tipo texto de no minimo 6 caracters - CAMPO OBRIGATORIO;
    
    -- image: campo do tipo texto, aqui pode colocar a url de alguma imagem - CAMPO NÃO OBRIGATORIO;
  
  EXEMPLO:
  
  ```json
      {
        "displayName": "testando",
        "email": "teste@teste.com",
        "password": "123456"
      }
  ```
  
  </details>
  
  > #### A partir daqui, todos os endpoints necessitaram de ter um token no header da requisição com a chave "Authorization", então não esqueça de guarda-lo, lembrando que cada token gerado expira em no máximo 1 hora!!
  
  <details close>
  <summary>GET /user</summary>
  -- O método GET em /user é usado para listar todos os usuarios da nossa aplicação;
  
  </details>
  
  <details close>
  <summary>GET /user/id</summary>
  -- O método GET em /user/id é usado para listar um usuario especifico, onde id é o id do usuario no banco de dados;
  
  </details>
  
   <details close>
  <summary>GET /categories</summary>
  -- O método GET em /categories é usado para listar todas as categorias de posts em nossa aplicação;
 
  </details>
  
  <details close>
  <summary>POST /categories</summary>
  -- O método POST em /categories é usado para criar uma categoria, aceita 1 campo, sendo ele:
  
    -- name: campo do tipo texto de no minimo 5 caracters - CAMPO OBRIGATORIO;
  
  EXEMPLO:
  
  ```json
      {
        "name": "nova categoria"
      }
  ```
  
  </details>
  
  <details close>
  <summary>GET /post</summary>
  -- O método GET em /post é usado listar todos os posts criados juntamente com suas categorias e o usuario que o criou;
  
  </details>
  
  <details close>
  <summary>GET /post/search</summary>
  -- O método GET em /post/search é usado listar todos os posts que contenham em title ou content a palavra pesquisada na query.
  
  EXEMPLO:
  
    http://localhost:3000/post/search?q=vamos que vamos
  
  </details>
  
  <details close>
  <summary>GET /post/id</summary>
  -- O método GET em /post/id é usado para listar um post especifico, onde id é o id do post no banco de dados;
  
  </details>
  
   <details close>
  <summary>POST /post</summary>
  -- O método POST em /post é usado para criar um post, aceita 3 campos, sendo eles:
  
    -- title: campo do tipo texto de no minimo 1 caracters - CAMPO OBRIGATORIO;
    
    -- content: campo do tipo texto de no minimo 1 caracters - CAMPO OBRIGATORIO;
    
    -- categoryIds: campo do tipo array (lista) de no minimo 1 item e o item tem que ser do tipo numérico - CAMPO OBRIGATORIO;
  
  EXEMPLO:
  
  ```json
      {
        "title": "criando um post",
        "content": "post devidamente criado",
        "categoryIds": [1, 2]
      }
  ```
  
  </details>
  
  
  
  
