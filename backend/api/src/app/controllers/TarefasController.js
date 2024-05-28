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
  async create(req, res) {
    const {description, id_membro, id_projeto} = req.body;

    if(!description || !id_projeto){
      throw new Error("Dados ausentes");
    }

    const payload = {
      description,
      id_projeto,
    };

    if(id_membro){
      payload.id_membro = id_membro;
    }

    const cria_tarefa = await Tarefas.create(payload);

    return res.json(cria_tarefa);


  }
  async delete(req, res) {
    const {id} = req.params;

    if(!id){
      throw new Error("Dados ausentes");
    }


   const del =  await Tarefas.destroy({
      where:{
        id
      }
    });

    if(del){
      return res.json({msg: "Sucesso"});
    }



  }
  async status(req, res) {
    const {id} = req.params;

    if(!id){
      throw new Error("Dados ausentes");
    }

    const get_tarefa = await Tarefas.findByPk(id);

    if(!get_tarefa){
      throw new Error("Tarefa não existe");
    }
    await get_tarefa.update({
      status: !get_tarefa.status
    })


    return res.json({msg: "Alterado com sucesso"});

  }

}

export default new TarefasController();
