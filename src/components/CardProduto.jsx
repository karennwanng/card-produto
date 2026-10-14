import styled from "styled-components"
import shoppingcar from "../assets/shopping-cart.svg"

const CaixaCard = styled.div`
border: 1px solid #ccc;
padding: 18px;
border-radius: 20px;
width: 100%;
max-width: 300px;
box-sizing: border-box; 
margin-bottom: 16px;
text-align: center;
`
const BotaoCard = styled.button`
background-color: ${(props) => (props.adicionado ? "#198754" : "#6c757d")};
color: white;
display: flex;
gap: 8px;
align-items: center;
border-radius: 8px;
margin: 12px auto 0;
`

function CardProduto(props) {
    return (
        <CaixaCard>
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <BotaoCard adicionado={props.adicionado}> <img src={shoppingcar} alt="icone de carrinho" /> Adicionar ao Carrinho</BotaoCard>
        </CaixaCard>
    )
}

export default CardProduto