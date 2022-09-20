const User = require('../models/user');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    return res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const createUser = async (req, res, next) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData);

    return res.status(201).send(newUser);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    return res.status(200).send(updatedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    return res.status(200).send(`User has been deleted`);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
