import fs from 'fs'

import Produto from '../schemas/Produto'

class ProdutoController {
  // Cadastra produto
  async cadastra (req, res) {
    try {
      console.log(req.files)
      req.body.imagens = req.files
      const imagens = req.body.imagens
      req.body.imagens = []
      imagens.forEach(res => {
        req.body.imagens.push(res.filename)
      })
      console.log(req.body.imagens)
      const produto = await Produto.create(req.body)
      return res.status(201).json( produto )
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produto não cadastrado', erro: err })
    }
  }

  async atualiza (req, res) {
    try {
      const id = req.path.split('/').pop()
      const produto = await Produto.findOne({ _id: id })
      for (let index = 0; index < produto.imagens.length; index++) {
        const imagem = produto.imagens[index]
        const nomeImagem = imagem?.filename.split('.')
        fs.unlink(`${process.cwd()}/imagens/${nomeImagem[0]}.jpg`, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      req.body.imagens = req.files
      const produtoAtualiza = await Produto.replaceOne({ _id: id }, req.body)
      return res.status(201).json(produtoAtualiza)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produto não atualizado', erro: err })
    }
  }

  // Get produto ID
  async get (req, res) {
    try {
      const id = req.path.split('/').pop()
      const produto = await (await Produto.findOne({ _id: id }).populate('categoria').populate('embalagem'))
      return res.status(200).json(produto)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produto não encontrado', erro: err })
    }
  }

  async getSlug (req, res) {
    try {
      const slug = req.path.split('/').pop()
      const produto = await Produto.findOne({ slug: slug }).populate('categoria').populate('embalagem')
      return res.status(200).json(produto)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produto não encontrado', erro: err })
    }
  }

  async getTodos (req, res) {
    try {
      const limite = req.query.limite
      const pagina = req.query.pagina
      const contaProduto = await Produto.estimatedDocumentCount()
      const totalPaginas = Math.round(contaProduto / parseFloat(limite))
      const produto = await Produto.find().limit(parseFloat(limite)).skip(parseFloat(pagina) - 1).populate('categoria').populate('embalagem')
      return res.status(200).json({ totalPaginas: totalPaginas === 0 ? 1 : totalPaginas, produto })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produtos não encontrados', erro: err })
    }
  }

  // Delete produto ID
  async delete (req, res) {
    try {
      const id = req.path.split('/').pop()
      const produto = await Produto.findOne({ _id: id }) || ''
      for (let index = 0; index < produto.imagens.length; index++) {
        const imagem = produto.imagens[index]
        const nomeImagem = imagem?.filename.split('.')
        fs.unlink(`${process.cwd()}/imagens/${nomeImagem[0]}.jpg`, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      const produtoDeleta = await Produto.deleteOne({ _id: id })
      return res.status(200).json({ mensagem: 'Produto deletado', data: produtoDeleta })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produto não encontrado', erro: err })
    }
  }
  async busca (req, res) {
    console.log('busca 1: ', req.params.busca)
    try {
      const produto = await Produto.find({ titulo : { '$regex' : req.params.busca, '$options' : 'i' } })
      return res.status(200).json(produto)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Produto não encontrado', erro: err })
    }
  }
}

export default new ProdutoController()
