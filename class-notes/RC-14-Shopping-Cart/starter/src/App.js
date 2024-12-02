import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <div className="bg-light app">
      <MyNavbar />
      <Main />
      <About />
      <NewProduct />
      <ProductList />
      <UpdateProduct />
    </div>
  );
}

export default App;
