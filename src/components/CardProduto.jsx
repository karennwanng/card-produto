import styled from "styled-components"
/* ../ sobe uma pasta, de components até src para chegar em assets */
import shoppingcar from "../assets/shopping-cart.svg"

const CaixaCard = styled.div`
border: 1px solid #ccc;
padding: 18px;
border-radius: 20px;
/* ocupa o espaço disponivel, mas nunca passa de 300px */
width: 100%;
max-width: 300px;
/* padding e a borda contam dentro da largura, então o card não passa da tela */
box-sizing: border-box; 
/* espaço entre um card e o de baixo */
margin-bottom: 16px;
/* o card passou a centralizar o próprio texto, sem depender do index.css */
text-align: center;
`
// props.adicionado é a condição; se for true, o fundo fica verde, se for false fica cinza
const BotaoCard = styled.button`
background-color: ${(props) => (props.adicionado ? "#198754" : "#6c757d")};
color: white;
/* coloca o ícone e o texto lado a lado dentro do botão */
display: flex;
/* espaço entre o ícone e o texto */
gap: 8px;
/* alinha o ícone e o texto na mesma altura (vertical) */
align-items: center;
border-radius: 8px;
/* 12px em cima, auto nas laterais (centraliza) e 0 embaixo */
margin: 12px auto 0;
`

function CardProduto(props) {
    return (
        <CaixaCard>
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            {/* adicionado = é o nome que a função da cor encontra o valor 
            props.adicionado foi o app.jsx que colocou o true ou false */}
            <BotaoCard adicionado={props.adicionado}><img src={shoppingcar} alt="icone de carrinho" />Adicionar ao Carrinho</BotaoCard>
        </CaixaCard>
    )
}

export default CardProduto