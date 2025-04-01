import "./header.css";
import SidebarTag from "../sidebar/Sidebar.jsx";
import PersonIcon from '@mui/icons-material/Person';

export default function HeaderTag() {
    return (
        <header>
            <div className="menuHeader">
                <SidebarTag/>
                <a href="" className="header-button">Rusty</a>
                <div className="signIcon">
                    <PersonIcon style={{scale: "1.4"}} />
                </div>
            </div>
        </header>
    );
}