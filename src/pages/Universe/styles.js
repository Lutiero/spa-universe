import style from "styled-components";
import backgroundImage03 from "../../assets/background03.jpg";

export const Container = style.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${backgroundImage03});
    background-size: cover;
`;
