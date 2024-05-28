import Projeto from '../models/Projetos';
import PegaTodosProjetos from '../services/PegaTodosProjetos';

class ProjetoController {
  async index(req, res) {
    const projetos = await PegaTodosProjetos.all();

    return res.json(projetos);
  }
  async dashboard(req, res) {
    const projetos = await PegaTodosProjetos.dashboard();

    return res.json(projetos);
  }

  async read(req, res) {
    const {id_projeto} = req.params;

    const projeto = await PegaTodosProjetos.get(id_projeto);

    return res.json(projeto);
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
    const {id} = req.params;
    const {data} = req.body;

    if(!data || !id){
      throw new Error("Dados ausentes");
    }
    
    const projeto = await Projeto.findByPk(id);
    
    if(!projeto){
      throw new Error("Projeto não existe");
    }


    const create_project = await projeto.update(data);

    return res.json(create_project);
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
