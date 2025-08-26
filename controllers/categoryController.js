const { categories } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const data = await categories.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const data = await categories.findAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const data = await categories.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: 'No encontrado' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const category = await categories.findByPk(req.params.id);
      if (!category) return res.status(404).json({ message: 'No encontrado' });
      await category.update(req.body);
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const category = await categories.findByPk(req.params.id);
      if (!category) return res.status(404).json({ message: 'No encontrado' });
      await category.destroy();
      res.json({ message: 'Eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
