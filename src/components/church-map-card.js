import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import Link from '@material-ui/core/Link';

import { useTranslation } from 'react-i18next';

import ReactResizeDetector from 'react-resize-detector';

import ChurchMapContainer  from './church-map-container';

import { makeStyles } from '@material-ui/core/styles';

import { SERVICE_CARD_MAX_WIDTH } from '../constants/service-constants';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 640 + SERVICE_CARD_MAX_WIDTH - SERVICE_CARD_MAX_WIDTH, // SERVICE_CARD_MAX_WIDTH,
    }
}));

export default function ChurchMapCard() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card className={classes.root} ref={targetRef}>
            <CardHeader title={t("Location")} titleTypographyProps={{variant: 'button'}} />
            <CardActionArea>
                <ChurchMapContainer mapWidth={width} />
            </CardActionArea>
            <CardContent>
                <Link target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Greater Phoenix Chinese Christian Church, West Ray Road, Chandler, AZ">
                    <Box display="flex">
                        <Box mr={1}><MapIcon fontSize="small" /></Box>
                        {t("GP full name")}<br/>
                        890 West Ray Road<br/>
                        Chandler, AZ 85225
                    </Box>
                </Link>

                <Link href="tel:+1-480-786-4977">
                    <Box display="flex" alignItems="center">
                        <Box mr={1}><PhoneIcon fontSize="small" /></Box>
                        (480) 786-4977
                    </Box>
                </Link>
                <Link href="mailto:contact@gpccc.org">
                    <Box display="flex" alignItems="center">
                        <Box mr={1}><EmailIcon fontSize="small" /></Box>
                        contact@gpccc.org
                    </Box>
                </Link>
            </CardContent>
            <CardActions>
                <Box pl={1}>
                <Link href="tel:+1-480-786-4977">
                    <Typography variant="button">{t("Call us")}</Typography>
                </Link>
                </Box>
                <Box pl={1}>
                <Link href="mailto:contact@gpccc.org">
                    <Typography variant="button">{t("Email us")}</Typography>
                </Link>
                </Box>
            </CardActions>
        </Card>}
        </ReactResizeDetector>
    );
}