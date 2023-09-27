'use strict';

const { generateId } = require('../helpers/generateId');

let users = [];

const createUser = (name) => {
  const user = {
    name,
    id: generateId(),
  };

  users.push(user);

  return user;
};

const getUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find(user => user.id === id);
};

const removeUser = (id) => {
  users = users.filter(user => user.id !== id);
};

const updateUser = (user, name) => {
  Object.assign(user, { name });

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  removeUser,
  updateUser,
};