import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemText from '@material-ui/core/ListItemText';

import TimeUtils from '../modules/time-utils';

export default function RecentSermonsMenu({sermons, onSermonSelect, onOlderSermonsSelect}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSermonMenuItemClick = (index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        onSermonSelect(sermons[index]);
    };

    const handleOlderSermonsItemClick = () => {
        setAnchorEl(null);
        onOlderSermonsSelect();
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    const maxSermonsToShow = 4;
    const sermonsToShow = sermons.length <= maxSermonsToShow ? sermons : sermons.slice(0, maxSermonsToShow);

    return (
        <div>
            <Button size="small" color="primary" aria-controls="recent-sermons-menu" aria-haspopup="true" onClick={handleClick}>
                Recent sermons
            </Button>
            <Menu
                id="recent-sermons-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {sermonsToShow.map((sermon, index) => (
                    <MenuItem key={"YT" + sermon.youtubeVideoID} selected={index === selectedIndex} onClick={() => handleSermonMenuItemClick(index)}>
                        <ListItemText primary={sermon.topic} secondary={sermon.pastor + " · " + TimeUtils.shortDateDisplay(sermon.date)} />
                    </MenuItem>
                ))}

                <MenuItem key="OlderSermons" onClick={() => handleOlderSermonsItemClick()} disableRipple style={{backgroundColor: 'transparent'}}>
                    <Button size="small" color="primary" style={{paddingLeft: 0}}>Older sermons</Button>
                </MenuItem>
            </Menu>
        </div>
    );
}

RecentSermonsMenu.propTypes = {
    sermons: PropTypes.arrayOf(PropTypes.shape({
        youtubeVideoID: PropTypes.string.isRequired,
        topic: PropTypes.string.isRequired,
        pastor: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })).isRequired,
    onSermonSelect: PropTypes.func.isRequired,
    onOlderSermonsSelect: PropTypes.func.isRequired,
}