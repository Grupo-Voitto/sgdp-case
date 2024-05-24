import { Router } from 'express';

import ProjetoController from '../app/controllers/ProjetoController';
import ProjetoMembrosController from '../app/controllers/ProjetoMembrosController';
import TarefasController from '../app/controllers/TarefasController';

const routes = new Router();

/**
 * Buscar todos os projetos
*/
routes.get('/projetos', ProjetoController.index);
/**
 * Buscar todos os projetos
*/
routes.get('/dashboard-projetos', ProjetoController.dashboard);

/**
 * Buscar um projeto
*/
routes.get('/projetos/:id', ProjetoController.read);

/**
 * Criar um projeto
*/
routes.post('/projetos', ProjetoController.create);

/**
 * Exclui um projeto
*/
routes.delete('/projeto/:id', ProjetoController.delete);

/**
 * Membros de um projeto
*/
routes.get('/projeto/membros/:id', ProjetoMembrosController.index);

/**
 * Adicionar membros a um projeto
*/
routes.post('/projeto/membros', ProjetoMembrosController.create);

/**
 * Remover membros de um projeto
*/
routes.delete('/projeto/membros', ProjetoMembrosController.delete);

/**
 * Todas as tarefas de um projeto
*/
routes.get('/projeto/tarefas/:id_projeto', TarefasController.index);
/**
 * Criar Tarefa em Um projeto
*/
routes.post('/projeto/tarefas', TarefasController.create);

export default routes;
