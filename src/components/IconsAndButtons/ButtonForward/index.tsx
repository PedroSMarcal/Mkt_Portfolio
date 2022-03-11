import { Container } from "./styled";
import circle_right from "../../../assets/circle_right.svg"

export default function(){
    return (
        <Container>
            <div className="alignItems">
                <p> ABOUT ME </p>
                <img src={circle_right} />
            </div>
        </Container>
    );
}