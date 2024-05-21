import { Model, DataTypes } from 'sequelize';

class ProjetosMembros extends Model {
  static init(sequelize) {
    super.init(
      {
        id_membro: DataTypes.NUMBER,
        id_projeto: DataTypes.NUMBER,
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: 'created_at', // Adicionado o campo field com o nome correto da coluna
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'projetos_membros'
      }
    );

    return this;
  }
}

export default ProjetosMembros;
