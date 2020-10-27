import dotenv from 'dotenv'
import Categoria from '../schemas/Categoria'

dotenv.config()
class CategoriaController {
  async getTodas (req, res) {
    try {
      const categoria = await Categoria.find()
      return res.status(200).json(categoria)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada', erro: err })
    }
  }

  async get (req, res) {
    try {
      const id = req.path.split('/').pop()
      const categoria = await Categoria.findOne({ _id: id })
      return res.status(200).json(categoria)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada', erro: err })
    }
  }

  async atualiza (req, res) {
    try {
      const id = req.path.split('/').pop()
      const categoria = await Categoria.replaceOne({ _id: id }, req.body)
      return res.status(201).json(categoria)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Categoria não criada', erro: err })
    }
  }

  async cadastra (req, res) {
    try {
      const categoria = await Categoria.create(req.body)
      return res.status(201).json(categoria)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Categoria não criada', erro: err })
    }
  }

  async delete (req, res) {
    try {
      const id = req.path.split('/').pop()
      const categoria = await Categoria.deleteOne({ _id: id })
      return res.status(200).json({ mensagem: 'Categoria deletada', data: categoria })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada', erro: err })
    }
  }
}

export default new CategoriaController()
