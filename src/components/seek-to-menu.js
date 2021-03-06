import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TelegramIcon from '@material-ui/icons/Telegram';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import MovieIcon from '@material-ui/icons/Movie';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CakeIcon from '@material-ui/icons/Cake';
import PoolIcon from '@material-ui/icons/Pool';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import UnknownIcon from '@material-ui/icons/DeviceUnknown';

import { useTranslation } from 'react-i18next';

import SeekPointType from '../constants/seek-point-type';

export default function SeekToMenu({seekPoints, onSeekTo, youTubePlayerReady}) {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        onSeekTo(seekPoints[index]);
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button size="small" color="primary" aria-controls="seek-to-menu" aria-haspopup="true" onClick={handleClick} disabled={seekPoints.length===0 || !youTubePlayerReady}>
                {t('Seek to')}
            </Button>
            <Menu
                id="seek-to-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {seekPoints.map((seekPoint, index) => (
                    <MenuItem
                        key={seekPoint.time}
                        dense={true}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        <ListItemIcon style={{minWidth: '28px'}}>
                            {seekPoint.type===SeekPointType.BEGINNING && <PlayArrowIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BIBLE_VERSE && <MenuBookIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.PRAISE_SONG && <MusicNoteIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.PRAYER && <TelegramIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.COMMUNION && <GroupIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.MESSAGE && <MessageIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.VIDEO && <MovieIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.ANNOUNCEMENTS && <AnnouncementIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BENEDICTION && <CardGiftcardIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BIRTHDAY && <CakeIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BAPTISM && <PoolIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.NEW_MEMBERS && <GroupAddIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.UNKNOWN && <UnknownIcon fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText primary={t(seekPoint.label)} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

SeekToMenu.propTypes = {
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onSeekTo: PropTypes.func.isRequired,
    youTubePlayerReady: PropTypes.bool.isRequired,
};