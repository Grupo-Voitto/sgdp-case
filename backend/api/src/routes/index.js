import { Router } from 'express';

import ProjetoController from '../app/controllers/ProjetoController';

const routes = new Router();

/**
 * Buscar todos os projetos
*/
routes.get('/projetos', ProjetoController.index);
/**
 * Buscar um projeto
*/
routes.get('/projetos/:id', ProjetoController.read);
/**
 * Criar um projeto
*/
routes.post('/projetos/', ProjetoController.read);
/**
 * Exclui um projeto
*/
routes.delete('/projetos/:id', ProjetoController.delete);

export default routes;
