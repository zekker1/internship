import "./headerTag.css";
import SidebarTag from "../sidebar/sidebarTag.jsx";
import PersonIcon from '@mui/icons-material/Person';

export default function HeaderTag({ setProducts }) {
    return (
        <header>
            <div className="menu-header">
                <SidebarTag setProducts={setProducts} />
                <a href="" className="header-button">Rusty</a>
                <div className="login-link">
                    <PersonIcon style={{scale: "1.4"}} />
                </div>
            </div>
        </header>
    );
}