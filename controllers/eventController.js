const { events, categories, user } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const event = await events.create(req.body);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const data = await events.findAll({
        include: [
          { model: categories, as: 'category' },
          { model: user, as: 'user' }
        ]
      });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const event = await events.findByPk(req.params.id, {
        include: [
          { model: categories, as: 'category' },
          { model: user, as: 'user' }
        ]
      });
      if (!event) return res.status(404).json({ message: 'No encontrado' });
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const event = await events.findByPk(req.params.id);
      if (!event) return res.status(404).json({ message: 'No encontrado' });
      await event.update(req.body);
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const event = await events.findByPk(req.params.id);
      if (!event) return res.status(404).json({ message: 'No encontrado' });
      await event.destroy();
      res.json({ message: 'Eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
