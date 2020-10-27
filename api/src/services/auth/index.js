import jwt from 'jwt-simple'
import dotenv from 'dotenv'

dotenv.config()

class Auth {
  async verificaToken (req, res, next) {
    try {
      const token = req.headers['x-access-token']
      const idUsuario = req.headers['id-usuario']?.toString()
      if (token === undefined) {
        return res.status(401).json({ mensagem: 'Não existe token no header' })
      } else {
        const decoded = await jwt.decode(token.toString(), process.env.SECRET_JWT || '')
        if (decoded.id === idUsuario) {
          return next()
        } else {
          return res.status(401).json({ mensagem: 'Token invalido' })
        }
      }
    } catch (err) {
      return res.status(401).json({ mensagem: 'Token invalido' })
    }
  }
}
export default Auth
