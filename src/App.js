import React from 'react';
import './App.css';

import SignIn from './SignIn'
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import GridList from '@material-ui/core/GridList';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import Box from "@material-ui/core/Box";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

function App() {
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <Box>
            <AppBar position="static" style={{background: '#D4372C', color: 'white'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        HSBC
                    </Typography>
                    <Grid container direction={'row-reverse'}>
                    <Grid item>
                        <IconButton
                            aria-label="More"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="inherit"
                        >
                            <AddIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>New Card</MenuItem>
                            <MenuItem onClick={handleClose}>Transfer</MenuItem>
                            <MenuItem onClick={handleClose}>Rewords</MenuItem>
                            <MenuItem onClick={handleClose}>Loss Reporting</MenuItem>
                            <MenuItem onClick={handleClose}>Cancellation</MenuItem>
                        </Menu></Grid></Grid>
                </Toolbar>
            </AppBar>
            <AppBar position="static" style={{background: 'white', color: '#D4372C'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                >
                    <Tab icon=<img src={'http://ww1.sinaimg.cn/large/006tNc79ly1g45aettq4kj30yl0lt12m.jpg'}
                         width={250}/> />
                    <Tab icon=<img src={'http://ww1.sinaimg.cn/large/006tNc79ly1g45aettq4kj30yl0lt12m.jpg'}
                         width={250}/> />
                    <Tab icon=<img src={'http://ww1.sinaimg.cn/large/006tNc79ly1g45aettq4kj30yl0lt12m.jpg'}
                         width={250}/> />
                </Tabs>
            </AppBar>
            <Container>
                <Grid container spacing={2} style={{'padding-top': 20}}>
                    <Grid item xs={6} md={8}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom>
                                        Total Balance
                                    </Typography>
                                    <Typography variant="h5" component="h2" style={{fontWeight: 600}}>
                                        $1,682.55
                                    </Typography>
                                    <Typography variant={"body2"} color="textSecondary">
                                        $8317.45 Available
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Typography>&#160;</Typography>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom>
                                        Weekly Activity
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="40"
                                        image="http://ww4.sinaimg.cn/large/006tNc79ly1g445rsrpcoj30aw03kq2u.jpg"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom>
                                    Payment Due in
                                </Typography>
                                <Typography variant="h5" component="h2" style={{fontWeight: 600}}>
                                    6 days
                                </Typography>
                                <Typography>&#160;</Typography>
                                <Typography>&#160;</Typography>
                                <Typography>&#160;</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container direction={'row-reverse'}>
                                    <Grid item>
                                        <Fab style={{background: '#D4372C', color: 'white'}}>Pay</Fab>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Typography>&#160;</Typography>
                <Typography variant={'h5'} style={{fontWeight: 'bold'}}>Latest Transactions </Typography>
                <Paper>

                </Paper>
            </Container>
        </Box>
    );
}

export default App;
