import { Container } from "./styles";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logotipo da empresa" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/explore">Exploração</a>
        </li>
        <li>
          <a href="/universe">O Universo</a>
        </li>
      </ul>
    </Container>
  );
}
