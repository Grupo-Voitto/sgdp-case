import Membros from '../models/Membros';

class MembrosController {
  async index(req, res) {
    const membros = await Membros.findAll();
    return res.json(membros);
    
  }
  async create(req, res) {
    const {nome, funcao} = req.body;

    if(!nome || !funcao){
      throw new Error("Dados ausentes");
    } 
    const membros = await Membros.create({
      nome,
      funcao
    });
    return res.json(membros);
    
  }
}

export default new MembrosController();
