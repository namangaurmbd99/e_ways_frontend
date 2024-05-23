import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, IconButton
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Sidebar.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? 'sidebar open' : 'sidebar closed'}>
      <IconButton onClick={handleToggle} className="toggle-button">
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        variant="permanent"
        className={open ? 'drawer open' : 'drawer closed'}
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: open ? 240 : 60, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon />, link: '/' },
            { text: 'Sign In', icon: <LoginIcon />, link: '/signin' },
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className="list-item-text" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
