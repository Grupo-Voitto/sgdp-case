import { Op } from 'sequelize';
import Projeto from '../models/Projetos';
import ProjetosMembros from '../models/ProjetosMembros';
import Membros from '../models/Membros';
import Tarefas from '../models/Tarefas';

class TarefasController {
  async index(req, res) {
    const {id_projeto} = req.params;

    const tarefas = await Tarefas.findAll({
      where:{
        id_projeto
      }
    })

    res.json(tarefas);
  }

}

export default new TarefasController();
