import pagarCartao from '../services/pagarme'

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

}

export default new PagamentoController()