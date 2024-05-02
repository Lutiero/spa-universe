import style from "styled-components";
import backgroundImage01 from "../../assets/background01.jpg";

export const Container = style.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${backgroundImage01});
    background-size: cover;


  > button {
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 2rem;
    background: transparent;
    border: 1px solid #fff;
    margin-top: 4rem;
    border-radius: 0.5rem;
    cursor: pointer;

    
  }

  > button:hover {
    background: #fff;
    color: #000;
    transition: .3s;
  }

`;
