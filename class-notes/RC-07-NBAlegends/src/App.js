import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
    return (
        <Container className="text-center mt-4">
            <Header />
            <CardContainer />
        </Container>
    );
}

export default App;
