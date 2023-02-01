const User = require('../models/users.model');

exports.createUser = (userData, callback) => {
  const newUser = new User(userData);
  newUser.save((error, user) => {
    if (error) {
      return callback(error);
    }
    return callback(null, user);
  });
};

exports.getUser = (userId, callback) => {
  User.findById(userId, (error, user) => {
    if (error) {
      return callback(error);
    }
    return callback(null, user);
  });
};

exports.getUsers = (callback) => {
  User.find({}, (error, users) => {
    if (error) {
      return callback(error);
    }
    return callback(null, users);
  });
};

exports.updateUser = (userId, userData, callback) => {
  User.findByIdAndUpdate(userId, userData, { new: true }, (error, user) => {
    if (error) {
      return callback(error);
    }
    return callback(null, user);
  });
};

exports.deleteUser = (userId, callback) => {
  User.findByIdAndRemove(userId, (error) => {
    if (error) {
      return callback(error);
    }
    return callback(null);
  });
};
