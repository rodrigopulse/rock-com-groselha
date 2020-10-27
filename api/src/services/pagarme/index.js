import pagarme from 'pagarme'

export default function pagarCartao(data) {
  return new Promise( (resolve, reject) => {
    pagarme.client.connect({ api_key: process.env.API_PAGARME })
      .then( client => {
        client.transactions.create({
          amount: data.valorTotal,
          card_number: data.numeroCartao,
          card_holder_name: data.nomeCartao,
          card_expiration_date: data.expiraCartao,
          card_cvv: data.cvvCartao,
          installments: data.parcelas,
          billing: {
            name: data.billing.nome,
            address: {
              country: data.billing.endereco.pais,
              state: data.billing.endereco.uf,
              city: data.billing.endereco.cidade,
              neighborhood: data.billing.endereco.bairro,
              street: data.billing.endereco.logradouro,
              street_number: data.billing.endereco.numero,
              zipcode: data.billing.endereco.cep
            }
          },
          items: data.produtos,
          customer: {
            external_id: data.usuario.id,
            name: data.usuario.nome,
            type: "individual",
            country: "br",
            email: data.usuario.email,
            documents: [
              {
                type: "cpf",
                number: data.usuario.cpf
              }
            ],
            phone_numbers: [ data.usuario.celular ],
            birthday: data.usuario.aniversario
          },
          shipping: {
            name: data.entrega.nome,
            fee: data.entrega.frete,
            delivery_date: data.entrega.prazo,
            expedited: data.entrega.expedido,
            address: {
              country: data.entrega.endereco.pais,
              state: data.entrega.endereco.uf,
              city: data.entrega.endereco.cidade,
              neighborhood: data.entrega.endereco.bairro,
              street: data.entrega.endereco.logradouro,
              street_number: data.entrega.endereco.numero,
              zipcode: data.entrega.endereco.cep
            }
          },
        })
        .then( (resposta) => {
          return resolve(resposta)
        }) .catch( (err) => { return reject(err) })
      }
    ) .catch( (err) => {
      return reject(err)
    })
  })
}