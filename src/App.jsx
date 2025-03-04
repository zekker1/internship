import './App.css'
import MainTag from "./components/main/mainTag.jsx";
import FooterTag from "./components/footer/footerTag.jsx";
import HeaderTag from "./components/header/headerTag.jsx";

function App() {
    return (
        <div className="layout">
            <div className="blank-header"/>
            <HeaderTag/>
            <MainTag/>
            <FooterTag/>
        </div>
    )
}

export default App