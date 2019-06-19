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
import Payment from "./Payment";

function App() {
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [paying, setPaying] = React.useState(0);
    const [response, setResponse] = React.useState(
        {
            "msg": "",
            "code": "",
            "limits": {
                "approvedLimit": "",
                "cashAdvanceLimit": "",
                "usedLimit": "",
                "availableLimit": ""
            }
        }
    );
    const [response2, setResponse2] = React.useState(
        {
            "msg": "",
            "code": "",
            "paymentDetails": {
                "repaymentduedate": "",
                "repaymentamount": "",
                "minimumpayment": ""
            }
        }
    )
    const [current, setCurrent] = React.useState(0);
    const [current2, setCurrent2] = React.useState(0);
    const [CreditCardNumbers, setCreditCardNumbers] = React.useState([5000010000014074, 5000010000014082, 5000010000014090]);

    // const

    function strToJson(str) {
        return JSON.parse(str);
    }

    const submit = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card/creditcard/creditLimitDetails', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
                'Content-Type': 'application/json',
                'Authorization': '5cfe45fe562d5e6ed88a8547d0134c31d72d468fa7fbe2f16b93188e',
            },
            body: JSON.stringify({
                "creditcardnumber": CreditCardNumbers[value]
            })
        }).then(res => res.text()).then(res => setResponse(strToJson(res)));
        setCurrent(current + 1);
    };

    const submit2 = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_payment/creditcard/outstandingPayment', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
                'Content-Type': 'application/json',
                'Authorization': '5cfe45fe562d5e6ed88a854739aeadb2d5f24e25868eb72e2894f63a',
            },
            body: JSON.stringify({
                "creditcardnumber": CreditCardNumbers[value]
            })
        }).then(res => res.text()).then(res => setResponse2(strToJson(res)));
        setCurrent2(current2 + 1);
    };

    function handleChange(event, newValue) {
        setCurrent(0);
        setCurrent2(0);
        setValue(newValue);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleHoming() {
        setAnchorEl(null);

    }

    function handlePaying() {
        setPaying(1);
    }

    return (
        <Box style={{background: '#F3F2F7'}}>
            {current === 0 && (submit())}
            {current2 === 0 && (submit2())}
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
                                <AddIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                button
                            >
                                <MenuItem button onClick={handleHoming}>Home</MenuItem>
                                <MenuItem button onClick={handleClose}>New Card</MenuItem>
                                <MenuItem button onClick={handleClose}>Transfer</MenuItem>
                                <MenuItem button onClick={handleClose}>Rewords</MenuItem>
                                <MenuItem button onClick={handleClose}>Loss Reporting</MenuItem>
                                <MenuItem button onClick={handleClose}>Cancellation</MenuItem>
                            </Menu></Grid></Grid>
                </Toolbar>
            </AppBar>
            {paying === 1 ? <Payment CreditCardNumber={CreditCardNumbers[value]} response2={response2}/> :
                <IndexPage response={response} response2={response2} handlePaying={handlePaying}
                           handleChange={handleChange} value={value} submit={submit} submit2={submit2}
                />}
        </Box>
    );
}

function IndexPage(props) {
    return (
        <Box>
            <AppBar position="static" style={{background: '#F3F2F7', color: '#D4372C'}}>
                <Tabs
                    value={props.value}
                    onChange={props.handleChange}
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
                                    <Typography variant="h6" style={{fontWeight: 600}}>
                                        {props.response.limits.usedLimit}
                                    </Typography>
                                    <Typography variant={"body2"} color="textSecondary">
                                        {props.response.limits.availableLimit}
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
                                <Typography variant="h5" style={{fontWeight: 600}}>
                                    {Math.round((Date.parse(props.response2.paymentDetails.repaymentduedate) - Date.now()) / 1000 / 60 / 60 / 24)} days
                                </Typography>
                                <Typography>&#160;</Typography>
                                <Typography>&#160;</Typography>
                                <Typography>&#160;</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container direction={'row-reverse'}>
                                    <Grid item>
                                        <Fab onClick={props.handlePaying}
                                             style={{background: '#D4372C', color: 'white'}}>Pay</Fab>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Typography>&#160;</Typography>
                <Typography variant={'h5'} style={{fontWeight: 'bold'}}>Latest Transactions </Typography>

            </Container>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
        </Box>
    )
}

export default App;
