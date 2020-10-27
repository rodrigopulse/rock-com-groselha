import Embalagem from '../schemas/Embalagem'

class EmbalagemController {

  async cadastra (req, res) {
    try {
      const embalagem = await Embalagem.create(req.body)
      return res.status(201).json({ mensagem: "Embalagem cadastrada com sucesso", embalagem })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Embalagem não cadastrada', erro: err })
    }
  }

  async getTodos (req, res) {
    try {
      const embalagem = await Embalagem.find()
      console.log(embalagem)
      return res.status(200).json(embalagem)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Embalagens não encontradas', erro: err })
    }
  }

}

export default new EmbalagemController()