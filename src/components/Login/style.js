import styled from "styled-components";

export const Container = styled.div`

    position: relative;
    z-index: 1;
    background: white;

    h2 {
        margin-bottom: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 20px;
    }

    form input {
        height: 30px;
        border: none;
        border-bottom: 2px solid #a3a3a3;
        outline: none;
        transition: all .2s linear;
        font-weight: bold;
        color: #353535;
    }

    form input:focus {
        border-color: #447d9d;
    }

    form button {
        margin-top: 30px;
        height: 40px;
        background: linear-gradient(90deg, #375fa1, #6bd592);
        color: white;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }

    form button:hover {
        filter: saturate(2.1);
    }

    form button:active {
        background: linear-gradient(90deg,#093d95,#15bc3d);
    }

`