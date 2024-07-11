import {Container, Links} from "./styles";
import  {Header}  from "../../components/Header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
export function Details() {

  return (
    <Container>
      <Header/>

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

      <Button title="Voltar" />
    </Container>   
    
  )
};