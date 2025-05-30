const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { name, email, password, isAdmin, hobbies } = req.body;
    const existingUser = await User.find
  const existingUser = await User.findOne}

const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("User updated");
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
};

module.exports = {createUser,loginUser,getUsers,updateUser,deleteUser,};
