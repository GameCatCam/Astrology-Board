const User = require('./user');
const ChatGpt = require('./chatgpt');
const ChatQuestion = require('./chatquestion');

User.hasMany(ChatGpt, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

ChatGpt.belongsTo(User, {
  foreignKey: 'user_id'
});

ChatGpt.hasMany(ChatQuestion, {
  foreignKey: 'chat_id',
  onDelete: 'CASCADE'
});

ChatQuestion.belongsTo(ChatGpt, {
  foreignKey: 'chat_id'
});


module.exports = { User, ChatGpt, ChatQuestion};
