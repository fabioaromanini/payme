const uuid = require('uuid/v1');
const userRepository = require('../repositories/userRepository');

const createToken = () => {
  const fullToken = uuid();
  const tokenSize = fullToken.indexOf('-');
  return fullToken.substring(0, tokenSize);
};

const getUser = async phoneNumber => {
  const { Item: user } = await userRepository.getUser(phoneNumber);
  return user;
};

const updateToken = async (phoneNumber, token) => {
  await userRepository.updateToken(phoneNumber, token);
};

module.exports = {
  createToken,
  getUser,
  updateToken,
};
