import React from 'react';
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'
import tshirtImage from '../../assets/tshirt.png'
import {
  Container,
  Row ,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
        {/* coluna da esquerda */}
          <Gallery>
            <img src={tshirtImage} alt="T-shirt"/>
          </Gallery>


      <Info/>
        </Column>


        <Column>
        <ProductAction/>
        <SellerInfo/>
        <WarrantySection/>
        <WarrantySection/>
        <WarrantySection/>

        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = ()=>(
  <Section>
    <h4>Garantia</h4>

  <div>
    <span>
      <p className="title">Compra garantida com o lorem ipsum</p>
      <p className="description">Receba o produto que esta esperando ou devolvemos o seu dimdim</p>
    </span>
    <span>
      <p className="title">Garantia do vendedor</p>
      <p className="description">sem garantia</p>
    </span>
  </div>
  <a href="#">Saiba mais sobre sua garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descricao</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Cum ipsa dolores alias vero totam id ducimus porro sit nisi!
        Omnis provident quia praesentium
      sunt illo inventore suscipit nostrum asperiores aliquid?
    <br/>
    <br/>

    Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Voluptatibus porro earum, asperiores eos laudantium fuga adipisci
     tempore autem a iusto corrupti cupiditate voluptatem alias vel iste,
     tenetur ut. Ullam, non.

    </p>
  </Description>
)

export default Product;
