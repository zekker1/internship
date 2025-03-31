import './App.css';
import FooterTag from "./components/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import HeaderTag from "./components/header/Header.jsx";
import { ProductsProvider } from './components/API/ProductContext.jsx';

function App() {
    return (
        <ProductsProvider>
            <div className="layout">
                <div className="blank-header"/>
                <HeaderTag/>
                <Home/>
                <FooterTag/>
            </div>
        </ProductsProvider>
    );
}

export default App;