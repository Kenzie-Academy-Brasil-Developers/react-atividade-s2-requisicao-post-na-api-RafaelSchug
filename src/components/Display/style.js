import styled from "styled-components";

export const Container = styled.div`
    
    min-height: 40px;

    @keyframes span_anim {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
    
    span {
        display: block;
        line-height: 40px;
        background: ${props=> props.bgColor};
        padding: 0 20px;
        min-width: 165px;
        color: navajowhite;
        border-radius: 20px;
        animation: span_anim .3s 1 ease-in-out;
        
    }
    
`