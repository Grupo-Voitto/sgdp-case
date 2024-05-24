import Membros from '../models/Membros';

class MembrosController {
  async index(req, res) {
    const membros = await Membros.findAll();
    return res.json(membros);
    
  }
}

export default new MembrosController();
