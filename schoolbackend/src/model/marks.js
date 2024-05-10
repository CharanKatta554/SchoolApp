const { DataTypes } = require("sequelize");
const Student = require("./student");
const db = require("../database/db");


module.exports = db.define("marks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: "id"
    },
    allowNull: false,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})
