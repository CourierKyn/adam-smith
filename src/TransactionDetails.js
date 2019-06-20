import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from "@material-ui/core/Container"
import Paper from '@material-ui/core/Paper';
import {Grid, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
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


export default function TransactionDetails(props) {
    const classes = useStyles();
    function handleChange() {
        props.setChange(0)
    }

    return (
        <Box style={{background: '#F3F2F7'}}>
            <Container >
                <Typography>&#160;</Typography>
                <Typography>&#160;</Typography>
                <Typography>&#160;</Typography>
                <Typography align='center' variant="h3" component="h1">
                    {props.values.bookingccy} {props.values.bookingamount}
                </Typography>
                <Typography align='center' color="textSecondary" variant="h5">
                    {props.values.merchantname}
                </Typography>
                <Typography align='center' color="textSecondary" variant="h6">
                    {props.values.transactiontime}
                </Typography>
                <Typography>&#160;</Typography>
                <Typography>&#160;</Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        variant="body"
                                    >
                                        Deal Number: {props.values.dealnumber}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider light/>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        variant="body"
                                    >
                                        Merchant Num: {props.values.merchantnumber}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider light/>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body"
                                        style={{fontWeight: 'bold'}}
                                    >
                                        Transaction amount
                                    </Typography>
                                }
                            />
                            <Grid container xs={4} direction='row-reverse'>
                                <Grid item>
                                    <Typography
                                        variant="body"
                                        style={{fontWeight: 'bold'}}
                                    >
                                        {props.values.transactionccy} {props.values.transactionamount}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>

                    </List>
                </Paper>
                <Typography>&#160;</Typography>
            </Container>
            <Typography>&#160;</Typography>

            <Container align={'right'}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleChange}
                className={classes.button}
                style={{background: '#D4372C', color: 'white'}}
            >
                back
            </Button>
            </Container>
            <Typography>&#160;</Typography>
            <Typography>&#160;</Typography>
        </Box>
    );
}