import "./headerTag.css";
import SidebarTag from "../SideBar/sidebarTag.jsx";
import PersonIcon from '@mui/icons-material/Person';

export default function HeaderTag({products, setFilter}) {

    return (
        <header>
            <div className="menuHeader">
                <SidebarTag products={products}
                            setFilter={setFilter} />
                <a href=""
                    className="headerButton">Rusty</a>

                <div className="signIcon">
                    <PersonIcon style={{scale: "1.4"}} />
                </div>
            </div>
        </header>
    );
}