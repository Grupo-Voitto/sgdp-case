import { Model, DataTypes } from 'sequelize';

class Tarefas extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'areas',
      }
    );

    return this;
  }
}

export default Tarefas;
