//import axios from 'axios'
import Correios from 'node-correios'

const correios = new Correios();

class FreteController {
  async calcula(req, res) {
    let peso = parseFloat(req.body.peso)
    peso = peso / 1000
    peso = peso.toString()
    let argsPac = {
      sCepOrigem: req.body.cepOrigem,
      sCepDestino: req.body.cepDestino,
      nVlPeso: peso,
      nCdServico: '04510',
      nCdFormato: '1',
      nVlComprimento: req.body.comprimento,
      nVlAltura: req.body.altura,
      nVlLargura: req.body.largura
    }
    let argsSedex = {
      sCepOrigem: req.body.cepOrigem,
      sCepDestino: req.body.cepDestino,
      nVlPeso: peso,
      nCdServico: '04014',
      nCdFormato: '1',
      nVlComprimento: req.body.comprimento,
      nVlAltura: req.body.altura,
      nVlLargura: req.body.largura
    }
    correios.calcPreco(argsPac)
    .then(frete => {
      frete[0].tipo = "PAC"
      let resposta = [frete[0]]
      correios.calcPreco(argsSedex)
      .then(frete => {
        frete[0].tipo = "Sedex"
        resposta.push(frete[0])
        return res.status(200).json(resposta)
      }) .catch(error => {
        return res.status(400).json(error, reposta)
      });
    })
    .catch(error => {
      return res.status(400).json(error)
    });
  }

}

export default new FreteController()