import './App.css'
import FooterTag from "./COMPONENTS/Footer/footerTag.jsx";
import Home from "./pages/home.jsx";
// import HeaderTag from "./COMPONENTS/Header/headerTag.jsx";

function App() {
    return (
        <div className="layout">
            <div className="blank-header"/>
            <Home/>
            <FooterTag/>
        </div>
    )
}

export default App