import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateProduct from "./pages/UpdateProduct";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="bg-light app">
      <AppRouter />
    </div>
  );
}

export default App;
