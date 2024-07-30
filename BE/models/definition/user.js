const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class users extends Model {}

users.init(
  {
    userID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    userName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
  },
  {
    timestamps: true,
    paramoid: true,
    tableName: "users",
    sequelize, //here passed connection of database
  }
);

module.exports = users;
