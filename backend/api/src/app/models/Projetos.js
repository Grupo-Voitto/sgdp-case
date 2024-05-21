import { Model, DataTypes } from 'sequelize';

class Projetos extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        dead_line: DataTypes.STRING,
        area: DataTypes.NUMBER,
        status: DataTypes.NUMBER, // 0 para congelado, 1 para em andamento, 2 concluido
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: 'created_at', // Adicionado o campo field com o nome correto da coluna
        },

      },
      {
        sequelize,
        timestamps: false,
        tableName: 'projetos'
      }
    );

    return this;
  }
}

export default Projetos;
