import { Schema, model } from 'mongoose'

const BannerSchema = new Schema({
  titulo: { type: String, required: true },
  imagemDesktop: { type: String, required: true },
  imagemMobile: { type: String, required: true },
  ordem: { type: Number },
  link: { type: String }
}, {
  collection: 'banners',
  versionKey: false,
  timestamps: true
})

export default model('Banner', BannerSchema)