import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import dotenv from 'dotenv'
import Usuario from '../schemas/Usuario'

dotenv.config()
class UsuarioController {
  // Get usuario ID
  async id (req, res) {
    try {
      const id = req.path.split('/').pop()
      const usuario = await Usuario.find({ _id: id })
      const usuarioReturn = {
        _id: usuario[0]._id,
        nome: usuario[0].nome,
        email: usuario[0].email,
        role: usuario[0].role
      }
      return res.status(200).json(usuarioReturn)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Usuário não encontrado', erro: err })
    }
  }

  // Cria usuario
  async cadastra (req, res) {
    try {
      const usuario = await Usuario.create(req.body)
      return res.status(201).json({ email: usuario.email, _id: usuario._id })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Usuário não criado', erro: err })
    }
  }

  // Login
  async login (req, res) {
    try {
      const usuario = await Usuario.find({ email: req.body.email })
      if (usuario.length === 0) {
        return res.status(401).json({ mensagem: 'Usuário e/ou senha incorretos' })
      }
      bcrypt.compare(req.body.senha, usuario[0].senha || '', function (err, result) {
        if (result) {
          const payload = { id: usuario[0]._id }
          const token = jwt.encode(payload, process.env.SECRET_JWT || '')
          return res.status(200).json({ _id: usuario[0]._id, email: usuario[0].email, token: token })
        } else if (err) {
          return res.status(401).json({ mensagem: 'Ocorreu um erro' })
        } else {
          return res.status(401).json({ mensagem: 'Usuário e/ou senha incorretos' })
        }
      })
    } catch (err) {
      return res.status(401).json({ mensagem: 'Ocorreu um problema', erro: err })
    }
  }
}

export default new UsuarioController()
