// Header.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Box display="flex" justifyContent="center" width="100%">
                        <Typography variant="h6">
                            My App
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button key="home" component={RouterLink} to="/" onClick={toggleDrawer(false)}>
                        Home
                    </ListItem>
                    <ListItem button key="memo" component={RouterLink} to="/memo" onClick={toggleDrawer(false)}>
                        Memo
                    </ListItem>
                    {/* 他のナビゲーションリンクもここに追加 */}
                </List>
            </Drawer>
        </div>
    );
};

export default Header;
