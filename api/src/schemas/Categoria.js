import { Schema, model } from 'mongoose'

const CategoriaSchema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String }
}, {
  collection: 'categorias',
  versionKey: false,
  timestamps: true
})

export default model('Categoria', CategoriaSchema)
