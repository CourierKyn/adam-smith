import React from 'react';

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
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
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


function strToJson(str) {
    return JSON.parse(str);
}


const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function RewardStoreDetails(props) {
    const classes = useStyles();
    function handleChange1() {
        props.setChange(0)
        props.setCurrent(0)
    }

    const [values,setValues] = React.useState({
        rewardamount: '',

    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const [response, setResponse] = React.useState(
        {
            "code": "",
            "msg": "",
            "data": {
                "totalPoint": ''
            }
        }
    );

    const [current, setCurrent] = React.useState(0);

    const summit = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_rewards/point/redemption', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
                'Content-Type': 'application/json',
                'Authorization': '5cfe45fe562d5e6ed88a8547590f43f7805943d5b97b373fd03d2716'
            },
            body: JSON.stringify({
                "amount":parseInt(values.rewardamount),
                "productcode": props.values.productcode,
                "creditcardnumber": 5000010000014074,
            })
        }).then(res => res.text()).then(res => setResponse(strToJson(res)));
        setCurrent(current + 1)
    }



    return (
        <Box>
            <Grid Container spacing={3}>
                <img src={props.values.src} width='100%' height='350'/>
                <Container style={{'padding-top': 10}}>
                    <Typography variant='h5' style={{'padding-bottom': 14}}>
                        {props.values.title}
                    </Typography>
                    <Divider variant="fullWidth" />
                    <Grid container spacing={2} style={{'padding-top': 7}} alignItems={'center'} align={'center'}>
                        <Grid item xs={6} md={8}>
                            <Grid item>
                                <Typography variant='caption' sm={3}>
                                    Reward points
                                </Typography></Grid>
                            <Typography variant='h6'  sm={3} fontWeight={'bold'}>
                                {props.values.points}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={4} alignItems={'center'}>
                            <TextField
                                style = {{width: 120}}
                                align={'center'}
                                id="amount"
                                label="Amount"
                                onChange={handleChange('rewardamount')}
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                                // value={1}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Container align='right' style={{'padding-top': 20, 'padding-right': 53}}>
                        <Fab style={{background: '#D4372C', color: 'white'}} onClick={summit}>
                            Buy
                        </Fab>
                    </Container>
                </Container>
            </Grid>
            <Typography>&#160;</Typography>

            <Container align={'left'}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleChange1}
                    className={classes.button}
                    style={{background: '#D4372C', color: 'white'}}
                >
                    back
                </Button>
            </Container>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
            <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>

        </Box>
    );
}
