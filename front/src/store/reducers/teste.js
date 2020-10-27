const ESTADO_INICIAL = {
  teste: false
}

export default function teste( state = ESTADO_INICIAL, action) {
  if( action.type === 'TESTE' ) {
    return {
      ...state,
      teste: action.teste,
    }
  }
  return state
}
