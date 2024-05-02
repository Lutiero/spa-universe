import Header from "../../components/Header";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <h1>Explore o universo</h1>
      <button>Quero saber mais</button>
    </Container>
  );
}
