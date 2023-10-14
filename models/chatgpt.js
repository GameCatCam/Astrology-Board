const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChatGpt extends Model {}

ChatGpt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    chat_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chat_prompt: {
      type: DataTypes.STRING(2000),
    },
    chat_response: {
      type: DataTypes.STRING(2000),
    },
    chat_response_answer: {
      type: DataTypes.STRING(2000),
    },
    chat_response_analysis: {
      type: DataTypes.STRING(2000),
    },
    chat_response_context: {
      type: DataTypes.STRING(2000),
    },
    chat_response_affirmation: {
      type: DataTypes.STRING(2000),
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chatgpt',
  }
);

module.exports = ChatGpt;
