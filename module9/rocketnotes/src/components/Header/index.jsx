import {Container, Profile, Logout} from './styles'
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){

    return(
        <Container>
            <Profile>
                <img 
                    src="https://xesque.rocketseat.dev/users/avatar/profile-fe5fe2ae-ca9b-4ec7-b081-d9f32c8b7d8a-1674525476994.jpg" 
                    alt="foto do usuario"
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Lucas Tomé</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}

