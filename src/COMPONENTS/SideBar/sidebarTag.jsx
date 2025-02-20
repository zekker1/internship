import "./sidebarTag.css"
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
import axios from "axios";

export default function SidebarTag({ setProducts }) {
    const [open, setOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const getProducts = (category) => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                const filteredProducts = result.data.filter(item =>
                    category ? item.category === category : item.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setProducts(filteredProducts);
            });
    };

    const handleSearch = () => {
        getProducts();
    };

    const DrawerList = (
        <Box sx={{ width: 250 }}
             className="drawerbox"
             role="presentation">

            <h1 className="navh1">Rusty</h1>
            <br/>
            <div className="search">
                <input
                    className="searchbar"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="searchButton" onClick={handleSearch}><SearchIcon/></button>
            </div>
            <Divider/>
            <list>
                <listButton className="listgap" onClick={() => getProducts("men's clothing")}>
                    <MaleIcon style={{color: "#d7ccc8", scale: "1.2"}}/>
                    <p>Male</p>
                </listButton>
                <listButton className="listgap" onClick={() => getProducts("women's clothing")}>
                    <FemaleIcon style={{color: "#d7ccc8", scale: "1.2"}} />
                    <p>Female</p>
                </listButton>
            </list>
            <list>
                <listButton className="listgap" onClick={() => getProducts("jewelery")}>
                    <WatchIcon style={{color: "#d7ccc8"}} />
                    <p>Jewelery</p>
                </listButton>
                <listButton className="listgap" onClick={() => getProducts("electronics")}>
                    <DevicesOtherIcon style={{color: "#d7ccc8"}} />
                    <p>Electronics</p>
                </listButton>
                <listButton className="listgap">
                    <FavoriteIcon style={{color: "#d7ccc8"}} />
                    <p>Favorites</p>
                </listButton>
                <listButton className="listgap">
                    <ShoppingCartIcon style={{color: "#d7ccc8"}} />
                    <p>Cart</p>
                </listButton>
            </list>
        </Box>
    );

    return (
        <div className="nav">
            <Button onClick={toggleDrawer(true)}
                    style={{margin: "0", padding: "0"}}>
                <MenuIcon style={{scale: "1.5", color:"#efebe9"}} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}