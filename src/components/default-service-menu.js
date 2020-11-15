import React from 'react';

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';

import DefaultServiceMenuItem from './default-service-menu-item';

export default function DefaultServiceMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            aria-label="Change default worship service"
            aria-controls="default-service-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            onClick={handleOpen}>
            <MenuIcon />
        </Button>
        <Menu
            id="default-service-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}>

            <DefaultServiceMenuItem />
        </Menu>
        </div>
    );
}