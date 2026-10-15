import CardProduto from './components/CardProduto'

function App() {

  return (
    <>
      <div>
        {/* passa nome, preço e adicionado os valores e a cor do botão que serão exibidos ao usuário */}
        <CardProduto nome="Fone Bluetooth"
          preco="R$ 219,00"
          adicionado={true}></CardProduto>

        <CardProduto nome="Estojo para Fone"
          preco="R$ 40,00"
          adicionado={false}></CardProduto>
      </div>
    </>
  )

}

export default App