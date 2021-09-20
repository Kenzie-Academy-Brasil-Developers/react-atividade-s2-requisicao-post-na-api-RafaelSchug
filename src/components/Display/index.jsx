import {Container} from './style';

export const Display = ({status, setStatus}) => {

    return (
        <Container bgColor={status.color}>
            {status && <span>{status.msg}</span>}
        </Container>
    )
}