#História do Usuário
##Título: Pesquisa e Adição de Livro ao Carrinho na Amazon

Como um usuário da Amazon,
Eu quero pesquisar por um livro específico e adicioná-lo ao meu carrinho,
Para que eu possa eventualmente comprá-lo.

#Critérios de Aceite
##Pesquisa:

Quando um usuário digitar o nome do livro no campo de pesquisa e pressionar 'Enter', ele deve ser direcionado para uma página de resultados que lista produtos relacionados.

##Seleção do Produto:

O produto específico ("AI Engineering: Building Applications with Foundation Models") deve estar disponível na lista de resultados e pode ser selecionado para ver mais detalhes.

##Verificação de Detalhes do Produto:

Ao visualizar os detalhes do produto, ele deve apresentar as informações chave:
- Idioma: Inglês
- Autor: Chip Huyen
- Condição: Novo
- Adição ao Carrinho:

O usuário deve ser capaz de adicionar o produto ao carrinho.
Uma mensagem "Adicionado" deve ser exibida confirmando que o item foi adicionado ao carrinho.

#Casos de Teste

###CT1 - Teste de Pesquisa:

- Passos:
Visitar a página da Amazon
Inserir o nome do livro no campo de busca
Pressionar 'Enter'
*Resultado Esperado*: Página de resultados exibe o livro procurado.

###CT2 - Teste de Seleção do Produto:

- Passos:
Após a pesquisa, encontrar e clicar no livro específico nos resultados
*Resultado Esperado*: Página de detalhes do livro é aberta mostrando a informação correta.

###CT3 - Teste de Verificação de Detalhes:

- Passos:
Na página de detalhes, verificar linguagem, autor e condição.
*Resultado Esperado*: Informações exibidas são corretas: Inglês, Chip Huyen, Novo.

###CT4 - Teste de Adição ao Carrinho:

- Passos:
Na página de detalhes, adicionar o item ao carrinho.
Verificar mensagem de confirmação.
*Resultado Esperado*: Mensagem "Adicionado" é visível.