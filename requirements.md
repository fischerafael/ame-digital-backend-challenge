# link original

https://github.com/AmeDigital/challenge-back-end-hit

# context

Nossos associados são aficionados por Star Wars e com isso, queremos criar um jogo com algumas informações da franquia.
Para possibilitar a equipe de front criar essa aplicação, queremos desenvolver uma API que contenha os dados dos planetas.

# api

## A API deve ser REST

## Para cada planeta, os seguintes dados devem ser obtidos do banco de dados da aplicação, sendo inserido manualmente:

- Nome
- Clima
- Terreno
- Para cada planeta também devemos ter a quantidade de aparições em filmes, que podem ser obtidas pela API pública do Star Wars: https://swapi.dev/

# Funcionalidades desejadas:

- Adicionar um planeta (com nome, clima e terreno)
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta

# Tarefas

- x Definir Entidade Planeta
- x Adicionar Novo Planeta
- x Padrão Repository
- Padrão Gateway - Ao Adicionar Um Planeta, Verificar se é válido (via api), e salvar aparições em filmes
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta
- Persistir dados no banco de dados
