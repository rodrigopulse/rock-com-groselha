import fs from 'fs'

import Banner from '../schemas/Banner'

class BannerController {

  async cadastra (req, res) {
    try {
      req.body.imagemDesktop = req.files.imagemDesktop[0].filename
      req.body.imagemMobile = req.files.imagemMobile[0].filename
      const banner = await Banner.create(req.body)
      return res.status(201).json(banner)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Banner não cadastrado', erro: err })
    }
  }

  async atualiza (req, res) {
    try {
      const id = req.path.split('/').pop()
      const banner = await Banner.findOne({ _id: id })
      const imagemDesktop = banner.imagemDesktop
      const imagemMobile = banner.imagemMobile
      const nomeImagemDesktop = imagemDesktop?.filename.split('.')
      const nomeImagemMobile = imagemMobile?.filename.split('.')
      fs.unlink(`${process.cwd()}/imagens/${nomeImagemDesktop}.jpg`, (err) => {
        if (err) {
          console.log(err)
        }
      })
      fs.unlink(`${process.cwd()}/imagens/${nomeImagemMobile}.jpg`, (err) => {
        if (err) {
          console.log(err)
        }
      })
      req.body.imagens = req.files
      const bannerAtualiza = await Banner.replaceOne({ _id: id }, req.body)
      return res.status(201).json(bannerAtualiza)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Banner não atualizado', erro: err })
    }
  }

  async get (req, res) {
    try {
      const id = req.path.split('/').pop()
      const banner = await (await Banner.findOne({ _id: id }))
      return res.status(200).json(banner)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Banner não encontrado', erro: err })
    }
  }

  async getTodos (req, res) {
    try {
      const banner = await Banner.find()
      return res.status(200).json(banner)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Banners não encontrados', erro: err })
    }
  }

  async delete (req, res) {
    try {
      const id = req.path.split('/').pop()
      const banner = await Banner.findOne({ _id: id })
      const imagemDesktop = banner.imagemDesktop
      const imagemMobile = banner.imagemMobile
      const nomeImagemDesktop = imagemDesktop.split('.')
      const nomeImagemMobile = imagemMobile.split('.')
      fs.unlink(`${process.cwd()}/imagens/${nomeImagemDesktop[0]}.jpg`, (err) => {
        if (err) {
          console.log(err)
        }
      })
      fs.unlink(`${process.cwd()}/imagens/${nomeImagemMobile[0]}.jpg`, (err) => {
        if (err) {
          console.log(err)
        }
      })
      const bannerDeleta = await Banner.deleteOne({ _id: id })
      return res.status(200).json({ mensagem: 'Banner deletado', data: bannerDeleta })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Banner não encontrado', erro: err })
    }
  }

}

export default new BannerController()