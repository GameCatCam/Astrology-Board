const sequelize = require('../config/connection');
const { User, ChatGpt, ChatQuestion} = require('../models');

const userData = require('./userData.json');
const chatGPTData = require('./chatgptData.json');
const chatQuestions = require('./chatgptquestionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });



  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const chatGpt = await ChatGpt.bulkCreate(chatGPTData, {
    individualHooks: true,
    returning: true,
  });
  
  const questions = await ChatQuestion.bulkCreate(chatQuestions, {
    individualHooks: true,
    returning: true,
  });





  process.exit(0);
};

seedDatabase();
