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

export default function SidebarTag({products, setFilter}) {
    const [open, setOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const filterProducts = (cat) => {
        const upadtedList = products.filter((item)=> item.category === cat);
        setFilter(upadtedList);
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        const updatedList = products.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilter(updatedList);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }}
             className="drawerbox"
             role="presentation">

            <a href=""
               className="navh1">Rusty</a>
            <br/>
            <div className="search">
                <input
                    className="searchbar"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="searchButton" ><SearchIcon/></button>
            </div>
            <Divider/>
            <list>
                <listButton className="listgap" onClick={() => filterProducts("men's clothing")}>
                    <MaleIcon style={{color: "#d7ccc8", scale: "1.2"}}/>
                    <p>Male</p>
                </listButton>
                <listButton className="listgap" onClick={() => filterProducts("women's clothing")} >
                    <FemaleIcon style={{color: "#d7ccc8", scale: "1.2"}} />
                    <p>Female</p>
                </listButton>
            </list>
            <list>
                <listButton className="listgap" onClick={() => filterProducts("jewelery")}>
                    <WatchIcon style={{color: "#d7ccc8"}} />
                    <p>Jewelery</p>
                </listButton>
                <listButton className="listgap" onClick={() => filterProducts("electronics")} >
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