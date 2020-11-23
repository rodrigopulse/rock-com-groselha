import { pagarCartao, calcularParcelas } from '../services/pagarme'

class PagamentoController {

  async pagarCartao (req, res) {
    try  {
      const pagamento = await pagarCartao(req.body)
      if (pagamento.status == 'refused') {
        return res.status(400).json({ mensagem: 'pagamento não efetuado', pagamento })
      }
      return res.status(200).json({ mensagem: 'pagamento efetuado', pagamento })
    } catch (err) {
      return res.status(400).json({ mensagem: 'pagamento não efetuado', pagamento })
    }
  }

  async valorParcelas (req, res) {
    const valor = req.path.split('/').pop()
    try {
      const parcelas = await calcularParcelas(valor)
      return res.status(200).json({mensagem: 'simulação de parcelas', parcelas})
    } catch (err) {
      return res.status(400).json({ mensagem: 'ocorreu um erro', parcelas })
    }
  }

}

export default new PagamentoController()
