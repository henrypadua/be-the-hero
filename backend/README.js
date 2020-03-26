/**
 * Rota / Recurso
 * Ex: routes.get("/users")
 */

/**
 * Métodos HTTP:
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Ex: http://localhost:3333/users?page=2&name=Henry
 *
 * Routes Params: Parâmetro utilizados para identificar recursos.
 * Ex: http://localhost:3333/users/1
 *
 * Request Body: Corpo da requisição, utilizado apra criar ou alterar recursos.
 * Ex: const data = request.body;
 */

/**
 * Tipos de Consulta SQL no Node:
 *
 * Driver: SELECT * FROM USER;
 * Query Builder: table("users").select("*").where()
 */

/**
 * Migrations são os históricos de tabelas criadas no banco.
 * Comando para criar migrations:
 * npx knex migrate:make nome_migration
 *
 * Comando para rodar as migrations e criar todas tabelas do banco:
 * npx knex migrate:latest
 * Comando desfazer as tabelas criadas:
 * npx knex migrate:rollback
 */
