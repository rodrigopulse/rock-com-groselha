import { Schema, model } from 'mongoose'

const EmbalagemSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  largura: { type: Number },
  altura: { type: Number },
  profundidade: { type: Number }
}, {
  collection: 'embalagens',
  versionKey: false,
  timestamps: true
})

export default model('Embalagem', EmbalagemSchema)
