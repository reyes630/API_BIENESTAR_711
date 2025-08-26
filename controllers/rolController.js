const { rols } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const data = await rols.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const data = await rols.findAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const data = await rols.findByPk(req.params.id);
      if (!data) return res.status(404).json({ message: 'No encontrado' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const rol = await rols.findByPk(req.params.id);
      if (!rol) return res.status(404).json({ message: 'No encontrado' });
      await rol.update(req.body);
      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const rol = await rols.findByPk(req.params.id);
      if (!rol) return res.status(404).json({ message: 'No encontrado' });
      await rol.destroy();
      res.json({ message: 'Eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
