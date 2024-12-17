import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import "./sidebar.css"

const NAVIGATION = [
  {
    segment: 'home',
    title: 'Inicio',
    icon: <HomeIcon />,
  },
  {
    segment: 'about',
    title: 'Información',
    icon: <InfoIcon />,
  },
  {
    segment: 'contact',
    title: 'Contacto',
    icon: <AccountBoxIcon />,
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <IconButton onClick={toggleSidebar} className="menu-button">
        {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
      {isOpen && <h2 className='menu-title'>Menú</h2>}
      <List>
        {NAVIGATION.map((item) => (
          <ListItem button key={item.segment} component={Link} to={`/${item.segment}`} className='item'>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {isOpen && <ListItemText primary={item.title} />}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;