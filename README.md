# 🤝 Projeto Friendship
Bem vindo ao projeto friendship, um site feito para ajudar pessoas a encontrarem amizades com base em interesses em comum. 

O objetivo deste MVP (Produto Mínimo Viável) é validar a hipótese de que se é possível usar modelos de machine learning para recomendar amizades de forma automatizada.

## 🧰 Tecnologias Utilizadas
React(Front-end)
Django(Back-end)
Pandas(Manipulação de dados)
Scikit-learn(ML)

### 🖼️ Front-end (React)

  APP.jsx: é a página do projeto aonde toda a estrutura está inserido, sendo um formulário com Nome, Descrição, Gênero, Áreas de interesses e o botão de encontrar conexões, ao inserir todas as informações corretamente, e clicar no botão o código vai enviar os dados do usuário e receber as sugestões de usuarios com interesses parecidos com isso seram gerados cards de pessoas baseado nas sugestões.
  Main.jsx: conecta o APP.jsx com o index.html.
  APP.css: é aonde está parte da estilização e principalmente os midia querie que deixa o site responsivo. .
  
### 🎯 Back-end (Django + ML)
  view.py: é a única url da API para fazer a conexão do Machine Learning e json com frontend, ele começa recebendo os dados do front-end e o armazenando no arquivo json e retornando ao front-end as sugestão e sua similaridade com o usuário.
  AnaliseIA.py: primeiramente o arquivo pega os dados json e deixa eles mais estruturado em dataframe, após isso cria baseado no interesse uma matriz binaria que serve para treinar o modelo k-means, esse modelo consegue agrupar os dados em grupos com interesses semelhante e retorna um array de todos os usuários seus grupos interesses e característica 
  Avaliar.py: avalia a similaridade do usuário enviado a API com os demais usuários.
  urls.py: Define a rota da API que conecta o front-end ao back-end.
  data.json: Armazena os dados em formato json.

## 🧠 O que eu faria se tivesse mais tempo?
  primeiramente eu gostaria de integrar o site com um banco de dados relacional, como mySQL, além disso gostaria de fazer um design mais elaborado, estudar um sistema de machine learning que além das áreas de interesse use também a descrição para agrupar os dados, fazer o deploy da aplicação na aws

## 🧩 Principais decisões tomadas durante o desenvolvimento
 primeira coisa que eu pensei foi a questão do front-end, estruturar o design as tags que ia utilizar e qual framework usar, 
 após fazer front-end eu gerei os dados com IA e posteriormente fui ao back-end, pensei se iria ou não implementar um modelo machine learning e estudei qual modelo usar e a dificuldade, comecei pensando em uma regressão logistica, 
 mais percebi que era ruim no caso,pesquisando um pouco percebi que a k-means era perfeita para esse caso, e como percebi que a dificuldade era baixa decidi que iria fazer, após isso deixei o site responsivo para celular e notebook, 
 com isso o código já estava quase pronto só faltava um sistema de validação de dados, para evitar campos em branco e nomes repetidos

  ## 🚀 Instruções para rodar o projeto
Instalar o arquivo.zip
Extrair o arquivo.zip
    
 ou
 
git clone https://github.com/GabrieLevinbook/FriendShip
  
    
 
    
Abrir o diretório no terminal do seu sistema operacional

Executar Frontend
    
cd legalAIFrontend

npm install

npm run dev

Executar Backend
    
cd ..

cd legalaiAPP

pip install django pandas scikit-learn django-cors-headers

python3 manage.py runserver  # Use apenas `python` no Windows

Abra no seu navegador o link http://localhost:5173/
