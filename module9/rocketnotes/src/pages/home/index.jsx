import {Container, Brand, Menu, Search, Content, Newnote} from './styles'

import { FiPlus, FiSearch } from 'react-icons/fi';
import { Header} from '../../components/Header';
import{ButtonText} from '../../components/buttonText';
import { Input } from '../../components/input';

export function Home(){
    return(
        <Container>
            <Brand>
                    <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" $isactive/></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="nodejs" /></li>

            </Menu>


            <Search>
                <Input placeholder = "Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Content>

            </Content>

            <Newnote>
                <FiPlus/>
                Criar Nota
                
            </Newnote>
        </Container>
    );
}