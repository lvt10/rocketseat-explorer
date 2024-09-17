import {Container, Links, Content} from "./styles";
import  {Header}  from "../../components/Header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/buttonText";

export function Details() {

  return (
    <Container>
      <Header/>

      <main>

        <Content>

      
          <ButtonText title= "Excluir Nota"/>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste qui quos, consequuntur vitae sit quis vel tempora in doloribus odit magnam doloremque aspernatur provident reprehenderit eveniet reiciendis, nam velit! Laudantium.
          </p>

          <Section title="links úteis">
            <Links>
              <li>
                <a href="http://">https://app.rocketseat.com.br</a>
              </li>
              <li>
                <a href="http://">https://app.rocketseat.com.br</a>
              </li>
          </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>

          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>   
    
  )
};