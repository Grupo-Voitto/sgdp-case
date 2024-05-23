import { Model, DataTypes } from 'sequelize';

class Areas extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
        color: DataTypes.STRING,
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

export default Areas;
