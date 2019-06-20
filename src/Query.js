import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import TransactionDetails from "./TransactionDetails";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        marginRight: theme.spacing(1),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


function strToJson(str) {
    return JSON.parse(str);
}


export default function Query(props) {
    const classes = useStyles();
    const [response, setResponse] = React.useState(
        {
            "transDetails": [{
                "dealnumber": "",
                "transactiontime": "",
                "merchantname": "",
                "merchantnumber": "",
                "transactionccy": "",
                "transactionamount": "",
                "bookingccy": "",
                "bookingamount": ""

            }], "msg": "", "code": ""
        }
    );
    const [change, setChange] = React.useState(0);
    const [values, setValues] = React.useState(
        ''
    );
    const summit = () => {
        const date = new Date()
        const Y = date.getFullYear() + '-';
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        const D = date.getDate();
        const now = new Date()
        const oneweekdate = new Date(now-7*24*3600*1000);
        const Y1 = oneweekdate.getFullYear() + '-';
        const M1 = (oneweekdate.getMonth() + 1 < 10 ? '0' + (oneweekdate.getMonth() + 1) : oneweekdate.getMonth() + 1) + '-';
        const D1 = oneweekdate.getDate() ;
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_transaction/creditcard/transactionDetails', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
                'Content-Type': 'application/json',
                'Authorization': '5cfe45fe562d5e6ed88a85470d1c5f7cec114d64a0b3cb1bafc1ae7a',
            },
            body: JSON.stringify({

                "creditcardnumber": props.CreditCardNumber,
                "transFromDate": '2019-05-19',
                "transToDate": '2020-06-19'
            })
        }).then(res => res.text()).then(res => setResponse(strToJson(res)));
        props.setCurrent3(props.current3 + 1);

    }
    const elements = [];
    function sortby(a,b) {

        if (a.transactiontime>b.transactiontime) {
return -1
        } else {
return  1
        }
    }
    function show(){
        response.transDetails.sort(sortby).forEach((item) => {
            const detial = {
                "dealnumber": item.dealnumber,
                "transactiontime": item.transactiontime,
                "merchantname": item.merchantname,
                "merchantnumber": item.merchantnumber,
                "transactionccy": item.transactionccy,
                "transactionamount": item.transactionamount,
                "bookingccy": item.bookingccy,
                "bookingamount": item.bookingamount

            }


            function handleChange() {
                setChange(change+1);
                setValues(detial)
            }

            elements.push(
                <Box >
                    <ListItem button
                              onClick={handleChange}>
                        <Grid container direction={'column'}>
                            <Grid container justify={'space-between'} alignItems={"center"}>
                                <Grid item>
                                    <Typography gutterBottom variant="h6">
                                        {item.merchantname}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6">
                                        {item.bookingamount}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="textSecondary" variant="body2">
                                {item.transactiontime}
                            </Typography>
                        </Grid>
                    </ListItem>
                    <Divider/>
                </Box>
            )
        });
    }



    return (
        <Box>
            {change === 0
                ?
                <Box>
                    <Box>
                    {props.current3 === 0 && (
                        summit()
                    )}
                    </Box>
                    <Box style={{'padding-top': 20}}>
                        <Paper>
                            {response.code === '1'
                                ? show()
                                : null
                            }
                            {elements}
                        </Paper>
                    </Box>
                </Box>
                : <TransactionDetails change={change} setChange={setChange} values={values}/>
            }
        </Box>

    );
}
