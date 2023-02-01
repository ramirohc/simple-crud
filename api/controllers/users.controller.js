const express = require('express');
const usersService = require('../services/users.service');

const router = express.Router();

router.post('/', (req, res) => {
  const userData = req.body;
  usersService.createUser(userData, (error, user) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(201).json({ user });
  });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  usersService.getUser(userId, (error, user) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(200).json({ user });
  });
});

router.get('/', (req, res) => {
  usersService.getUsers((error, users) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(200).json({ users });
  });
});

router.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const userData = req.body;
  usersService.updateUser(userId, userData, (error, user) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(200).json({ user });
  });
});

router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  usersService.deleteUser(userId, (error) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(204).end();
  });
});

module.exports = router;
