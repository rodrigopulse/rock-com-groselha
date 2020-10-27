import { Schema, model } from 'mongoose'
import Produto from './Produto'
import Usuario from './Usuario'

const PedidoSchema = new Schema({
  produtos: [{
    produto: { type: Schema.Types.ObjectId, ref: Produto },
    quantidade: Number
  }],
  codigoPedido: { type: Number },
  valor: Number,
  frete: Number,
  usuario: { type: Schema.Types.ObjectId, ref: Usuario },
  status: String,
  rastreio: String
}, {
  collection: 'pedidos',
  versionKey: false,
  timestamps: true
})

export default model('Pedido', PedidoSchema)
