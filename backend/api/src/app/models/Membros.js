import { Model,DataTypes } from 'sequelize';

class Membros extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: 'created_at', // Adicionado o campo field com o nome correto da coluna
        },

      },
      {
        sequelize,
        timestamps: false,
        tableName: 'membros'
      }
    );

    return this;
  }
}

export default Membros;
