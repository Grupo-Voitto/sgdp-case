import { Model, DataTypes } from 'sequelize';

class Tarefas extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
        status: DataTypes.NUMBER, // 0 para não concluido e 1 para concluido,
        id_membro: DataTypes.NUMBER,
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: 'created_at',
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          field: 'updated_at', 
        },

      },
      {
        sequelize,
        timestamps: false,
        tableName: 'tarefas',
        updatedAt: 'updated_at',
        createdAt: false,
      }
    );

    return this;
  }
}

export default Tarefas;
