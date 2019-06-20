import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import {Grid} from "@material-ui/core";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';

import Slider from '@material-ui/lab/Slider';
import {withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

function valuetext(value) {
    return {value};
}

function Payment(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(50);


    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const iOSBoxShadow =
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
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
function handleClick() {
    summit();
    props.handlePayingBack();
}

    const summit = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_payment/creditcard/creditCardRepeyment\n', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
                'Content-Type': 'application/json',
                'Authorization': '5cfe45fe562d5e6ed88a854739aeadb2d5f24e25868eb72e2894f63a',
            },
            body: JSON.stringify({

            "debitaccountnumber": "HK720001001000000001001",
            "repaymentAmount": value / 100 * parseInt(props.response.limits.usedLimit),
            "creditcardnumber": props.CreditCardNumber,

            })
        })

    }

    const IOSSlider = withStyles({
        root: {
            color: '#3880ff',
            height: 2,
            padding: '15px 0',
        },
        thumb: {
            height: 28,
            width: 28,
            backgroundColor: '#fff',
            boxShadow: iOSBoxShadow,
            marginTop: -14,
            marginLeft: -14,
            '&:focus,&:hover,&$active': {
                boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    boxShadow: iOSBoxShadow,
                },
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 11px)',
            top: -22,
            '& *': {
                background: 'transparent',
                color: '#000',
            },
        },
        track: {
            height: 2,
        },
        rail: {
            height: 2,
            opacity: 0.5,
            backgroundColor: '#bfbfbf',
        },
        mark: {
            backgroundColor: '#bfbfbf',
            height: 8,
            width: 1,
            marginTop: -3,
        },
        markActive: {
            backgroundColor: 'currentColor',
        },
    })(Slider);


    return (
        <Container style={{background: '#F3F2F7'}}>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography variant={'h4'} align={"center"} style={{fontWeight: "bold"}}>Choose Amount</Typography>
            <Typography variant={"body2"}>&#160;</Typography>
            <Typography align={"center"}>Make payments
                by next month.</Typography>
            <Typography>&#160;</Typography>
            <IOSSlider aria-label="iOS slider" onChange={handleSliderChange} valueLabelDisplay="auto"
                       value={typeof value === 'number' ? value : 0}
            />
            <Typography>&#160;</Typography>
            <Typography variant={'h3'} align={"center"}
                        style={{fontWeight: "bold"}}>{parseInt(value / 100 * parseInt(props.response.limits.usedLimit))}</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography align={"center"}
                        style={{fontWeight: "bold"}}>Pay {month[new Date(props.response2.paymentDetails.repaymentduedate).getMonth()]} Balance</Typography>
            <Typography align={"center"} color="textSecondary">Paying your monthly statement balance helps keep your
                financially healthy and avoid interest changes.</Typography>
            <Typography align={"center"} color={"primary"}>learn more...</Typography>
            <Typography>&#160;</Typography>
            <Grid align={"center"} justify={"space-between"}>
                <Fab variant="contained" onClick={props.handlePayingBack}>
                    Pay later
                </Fab>
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;
                <Fab variant="contained" style={{background: '#D4372C', color: 'white'}} color='primary' onClick={handleClick}>
                    Pay now
                </Fab>
            </Grid>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
        </Container>
    )
}

export default Payment;
