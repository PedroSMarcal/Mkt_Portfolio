import ButtonForward from '../../components/IconsAndButtons/ButtonForward'
import FooterMenu from '../../components/PageElements/FooterMenu'
import NavBar from '../../components/PageElements/NavMenu'
import { Container } from './styled'

export default function PageLand(){ 
    return (
        <Container>
            <NavBar />

            <ButtonForward/>
            <FooterMenu />
        </Container>
    )
    
}