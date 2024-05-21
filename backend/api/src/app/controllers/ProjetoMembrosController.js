import { Op } from 'sequelize';
import Projeto from '../models/Projetos';
import ProjetosMembros from '../models/ProjetosMembros';
import Membros from '../models/Membros';

class ProjetoMembrosController {
  async index(req, res) {
    const {id} = req.params;
    const membros_id = await ProjetosMembros.findAll({
      where:{
        id_projeto: id
      },
      attributes:["id_membro"]
    });

    const membros_nomes = await Membros.findAll({
      where:{
        id: {
          [Op.in]: membros_id.map(elem => elem.id_membro)
        }
      },
      attributes: ["nome","id"]
    });

    res.json(membros_nomes);
  }

  async create(req, res) {
    const {id_projeto,id_membro} = req.body;

    if(!id_projeto || !id_membro ){
      throw new Error("Dados ausentes");
    }

    /**
     * TODO: verificar se a pessoa já está inserida como membro.
     * caso esteja: não adicionar novamente
     */
    const create_project = await ProjetosMembros.create({
      id_projeto,
      id_membro
    });

    return res.json(create_project);

  }

  async delete(req, res) {
    const {id_membro,id_projeto} = req.query;

    const projeto_excluido = await ProjetosMembros.destroy({
      where: {
        id_membro,
        id_projeto
      }
    })

    if(!projeto_excluido){
      throw new Error("Não foi possível remover o membro");
    }
    
    return res.json({message: "Membro removido com sucesso"})
  }
}

export default new ProjetoMembrosController();
