import ButtonForward from '../../components/IconsAndButtons/ButtonForward'
import FooterMenu from '../../components/PageElements/FooterMenu'
import NavBar from '../../components/PageElements/NavMenu'
import { PageLandStyles } from './styled'

export default function PageLand(){ 
    return (
        <PageLandStyles>
            <NavBar />

            <ButtonForward/>
            <FooterMenu />
        </PageLandStyles>
    )
    
}