const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ChatQuestion extends Model {}

ChatQuestion.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    chat_question: {
      type: DataTypes.STRING
     },
    chat_question_response: {
      type: DataTypes.STRING
     },
     chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'chatgpt',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chatquestion',
  }
);

module.exports = ChatQuestion;
