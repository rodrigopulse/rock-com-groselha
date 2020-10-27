import { Schema, model } from 'mongoose'

import Categoria from './Categoria'
import Embalagem from './Embalagem'

const ProdutoSchema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  imagens: { type: Array },
  peso: { type: Number },
  slug: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  estoque: { type: Number },
  categoria: { type: Schema.Types.ObjectId, ref: Categoria },
  embalagem: { type: Schema.Types.ObjectId, ref: Embalagem },
  destaque: { type: Boolean },
  preco: { type: Number }
}, {
  collection: 'produtos',
  versionKey: false,
  timestamps: true
})

export default model('Produto', ProdutoSchema)
