import dotenv from 'dotenv'
import Pedido from '../schemas/Pedido'

dotenv.config()
class PedidoController {

  async cadastra (req, res) {
    try {
      try {
        const ultimoPedido = await Pedido.find().sort({ _id: -1 }).limit(1)
        const codigoUltimoPedido = ultimoPedido[0].codigoPedido
        const valores = []
        req.body.produtos.forEach((produto) => {
          const valor = produto.valor * produto.quantidade
          valores.push(valor)
        })
        const soma = valores.reduce(function (a, b) { return a + b }, 0)
        req.body.valor = soma
        req.body.codigoPedido = codigoUltimoPedido + 1
      } catch (err) {
        req.body.codigoPedido = 1
      }
      const pedido = await Pedido.create(req.body)
      return res.status(201).json(pedido)
    } catch (err) {
      console.log(err)
      return res.status(400).json({ mensagem: 'Pedido não criado', erro: err })
    }
  }

  async get (req, res) {
    try {
      const codigoPedido = parseFloat(req.params.codigoPedido)
      const pedido = await Pedido.findOne({ codigoPedido: codigoPedido })
        .populate({
          path: 'produtos',
          populate: {
            path: 'produto',
            populate: { path: 'categoria' }
          }
        })
        .populate('usuario')
      return res.status(200).json(pedido)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Pedido não encontrado', erro: err })
    }
  }

  async getTodos (req, res) {
    try {
      const pedido = await Pedido.find()
        .populate({
          path: 'produtos',
          populate: {
            path: 'produto',
            populate: { path: 'categoria' }
          }
        })
        .populate('usuario')
      return res.status(200).json(pedido)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Pedido não encontrado', erro: err })
    }
  }

  async atualiza (req, res) {
    try {
      const codigoPedido = parseFloat(req.params.codigoPedido)
      const pedido = await Pedido.updateOne({ codigoPedido: codigoPedido }, req.body)
      return res.status(200).json({ mensagem: 'Pedido atualizado com sucesso', data: pedido })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Pedido não atualizado', erro: err })
    }
  }
}

export default new PedidoController()
