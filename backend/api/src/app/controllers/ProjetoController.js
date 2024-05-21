import Projeto from '../models/Projetos';
import PegaTodosProjetos from '../services/PegaTodosProjetos';

class ProjetoController {
  async index(req, res) {
    const projetos = await PegaTodosProjetos.all();

    res.json(projetos);
  }

  async read(req, res) {
    // TODO
  }

  async create(req, res) {
    const {title, description, dead_line,area} = req.body;

    if(!title || !description || !dead_line || !area){
      throw new Error("Dados ausentes");
    }

    const create_project = await Projeto.create({
      title,
      description,
      dead_line,
      area
    });

    return res.json(create_project);

  }

  async update(req, res) {
    // TODO
  }

  async delete(req, res) {
    const {id} = req.params;

    const projeto_excluido = await Projeto.destroy({
      where: {
        id
      }
    })

    if(!projeto_excluido){
      throw new Error("Não foi possível excluir os items");
    }
    
    return res.json({message: "Projeto excluido com sucesso"})
  }
}

export default new ProjetoController();