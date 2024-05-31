module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    "Url",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      originalUrl: {
        type: DataTypes.STRING,
      },
      encodeUrl: {
        type: DataTypes.STRING,
      },
      archived: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      tableName: "Url",
      timestamps: false,
    }
  );
  Url.associate = (models) => {
    Url.belongsTo(models.Users, {
      foreignKey: "userId",
    });
  };
  return Url;
};
