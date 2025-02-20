import SearchIcon from '@mui/icons-material/Search';
import "./headerTag.css";
import SidebarTag from "../SideBar/sidebarTag.jsx";
import PersonIcon from '@mui/icons-material/Person';

export default function HeaderTag({ setProducts }) {
    return (
        <header>
            <div className="menuHeader">
                <SidebarTag setProducts={setProducts} />
                <button className="headerButton" onClick={() => window.location.reload()}>Rusty</button>

                <div className="header2">
                    <PersonIcon style={{scale: "1.4"}} />
                </div>
            </div>
        </header>
    );
}