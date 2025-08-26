const { user, rols, events } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const newUser = await user.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const users = await user.findAll({
        include: [
          { model: rols, attributes: ['name'] },
          { model: events, as: 'events' }
        ]
      });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const foundUser = await user.findByPk(req.params.id, {
        include: [
          { model: rols, attributes: ['name'] },
          { model: events, as: 'events' }
        ]
      });
      if (!foundUser) return res.status(404).json({ message: 'No encontrado' });
      res.json(foundUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const foundUser = await user.findByPk(req.params.id);
      if (!foundUser) return res.status(404).json({ message: 'No encontrado' });
      await foundUser.update(req.body);
      res.json(foundUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const foundUser = await user.findByPk(req.params.id);
      if (!foundUser) return res.status(404).json({ message: 'No encontrado' });
      await foundUser.destroy();
      res.json({ message: 'Eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
