import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Projetos from '../app/models/Projetos';
import Tarefas from '../app/models/Tarefas';
import Membros from '../app/models/Membros';
import ProjetosMembros from '../app/models/ProjetosMembros';
import Areas from '../app/models/Areas';

const models = [Projetos, Membros, Tarefas, ProjetosMembros, Areas];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
