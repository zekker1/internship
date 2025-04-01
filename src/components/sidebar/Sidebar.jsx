import "./sidebar.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import WatchIcon from '@mui/icons-material/Watch';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { useContext } from 'react';
import { ProductsContext } from '../API/ProductContext.jsx';

export default function SidebarTag() {
    const { products, setFilter } = useContext(ProductsContext);
    const [open, setOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const filterProducts = (cat) => {
        const updatedList = products.filter((item) => item.category === cat);
        setFilter(updatedList);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const updatedList = products.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilter(updatedList);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} className="drawer-box" role="presentation">
            <a href="" className="nav-h1">Rusty</a>
            <br/>
            <div className="search">
                <input
                    className="searchbar"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="search-button"><SearchIcon/></button>
            </div>
            <Divider/>
            <list>
                <listButton className="list-gap" onClick={() => filterProducts("men's clothing")}>
                    <MaleIcon style={{color: "white", scale: "1.2"}}/>
                    <p>Male</p>
                </listButton>
                <listButton className="list-gap" onClick={() => filterProducts("women's clothing")}>
                    <FemaleIcon style={{color: "white", scale: "1.2"}}/>
                    <p>Female</p>
                </listButton>
            </list>
            <list>
                <listButton className="list-gap" onClick={() => filterProducts("jewelery")}>
                    <WatchIcon style={{color: "white"}}/>
                    <p>Jewelery</p>
                </listButton>
                <listButton className="list-gap" onClick={() => filterProducts("electronics")}>
                    <DevicesOtherIcon style={{color: "white"}}/>
                    <p>Electronics</p>
                </listButton>
                <listButton className="list-gap">
                    <FavoriteIcon style={{color: "white"}}/>
                    <p>Favorites</p>
                </listButton>
                <listButton className="list-gap">
                    <ShoppingCartIcon style={{color: "white"}}/>
                    <p>Cart</p>
                </listButton>
            </list>
        </Box>
    );

    return (
        <div className="nav">
            <Button className="menu-button"
                    onClick={toggleDrawer(true)}
                    style={{margin: "0", padding: "0"}}>
                <MenuIcon style={{scale: "1.5",}}/>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}