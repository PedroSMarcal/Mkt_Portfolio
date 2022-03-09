import { Container } from './styled'
import github from '../../assets/github.svg'
import linkedin from '../../assets/Linkedin.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import twiter from '../../assets/twiter.svg'

export default function IconAndLinks(){
    return (
        <Container>
            <div>
                <a href="">
                    <img src={github} />
                </a>

                <a href="">
                    <img src={linkedin} />
                </a>

                <a href="">
                    <img src={youtube} />
                </a>

                <a href="">
                    <img src={instagram} />
                </a>

                <a href="">
                    <img src={twiter} />
                </a>
                
            </div>
        </Container>
    )
}