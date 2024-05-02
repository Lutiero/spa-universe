import style from "styled-components";
import backgroundImage02 from "../../assets/background02.jpg";

export const Container = style.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${backgroundImage02});
    background-size: cover;
`;
