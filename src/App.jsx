import './App.css'
import MainTag from "./COMPONENTS/Main/mainTag.jsx";
import FooterTag from "./COMPONENTS/Footer/footerTag.jsx";

function App() {
    return (
        <div className="layout">
            <div className="blankHeader"/>
            <MainTag/>
            <FooterTag/>
        </div>
    )
}

export default App