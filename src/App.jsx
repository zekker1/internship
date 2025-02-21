import './App.css'
import MainTag from "./components/main/mainTag.jsx";
import FooterTag from "./components/footer/footerTag.jsx";

function App() {
    return (
        <div className="layout">
            <div className="blank-header"/>
            <MainTag/>
            <FooterTag/>
        </div>
    )
}

export default App