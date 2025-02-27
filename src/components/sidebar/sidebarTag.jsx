import "./sidebarTag.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WatchIcon from '@mui/icons-material/Watch';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function SidebarTag({ products, setFilter }) {
    const [state, setState] = React.useState({ top: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const filterProducts = (cat) => {
        const updatedList = products.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            className="box-container"
        >
            <h1 className="nav-h1"><a href="">Rusty</a></h1>
            <br />
            <div className="search"></div>
            <Divider />
            <ul className="list1">
                <li className="listgap list-buttons" onClick={() => filterProducts("men's clothing")}>
                    <MaleIcon style={{ color: "#d7ccc8", scale: "1.2" }} />
                    <p>Male</p>
                </li>
                <li className="listgap list-buttons" onClick={() => filterProducts("women's clothing")}>
                    <FemaleIcon style={{ color: "#d7ccc8", scale: "1.2" }} />
                    <p>Female</p>
                </li>
                <li className="listgap list-buttons" onClick={() => filterProducts("jewelery")}>
                    <WatchIcon style={{ color: "#d7ccc8" }} />
                    <p>Jewelery</p>
                </li>
                <li className="listgap list-buttons" onClick={() => filterProducts("electronics")}>
                    <DevicesOtherIcon style={{ color: "#d7ccc8" }} />
                    <p>Electronics</p>
                </li>
                <li className="listgap">
                    <button className="close-drawer list-buttons" onClick={toggleDrawer(anchor, false)}>
                        <KeyboardArrowUpIcon className="close-drawer-icon" />
                    </button>
                </li>
            </ul>
        </Box>
    );

    return (
        <div className="nav">
            <div className="nav-wrapper">
                <input
                    className="search-bar"
                    placeholder="Search..."
                    onChange={(e) => {
                        let f = products.filter((product) =>
                            product.title.toLowerCase().includes(e.target.value.toLowerCase())
                        );
                        console.log("filtered", f);
                        setFilter(f);
                    }}
                />
                <button className="nav-button">
                    {['top'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} className="open-drawer">
                                <KeyboardArrowDownIcon className="open-drawer" />
                            </Button>
                            <Drawer anchor={anchor} open={state[anchor]}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </button>
            </div>
        </div>
    );
}