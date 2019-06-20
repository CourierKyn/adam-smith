import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
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
  root: {
    flexGrow: 4,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function MadeWithLove() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        Made with Love by SCUTHSBC Team
      </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function TabContainer(props) {
  return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
  );
}

function TextBox(props) {
  return(
      <Typography variant="body1" >
        *请确认你的信用卡号
      <Grid >
        <TextField
            id="standard-read-only-input"
            // label="Read Only"
            defaultValue={props.CreditCardNumber}
            // className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
        />
      </Grid>
      </Typography>
  )
}

function strToJson(str) {
  return JSON.parse(str);
}

export default function Cancel(props) {
  const [current, setCurrent] = React.useState(0);
  const [response, setResponse] = React.useState(
  {"msg":"Transaction Accepted","code":"1"}
  );
  const summit = () => {
    fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card/creditcard/cancellation', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
        'Content-Type': 'application/json',
        'Authorization': '5cfe45fe562d5e6ed88a8547d0134c31d72d468fa7fbe2f16b93188e',
      },
      body: JSON.stringify({
        "creditcardnumber": props.CreditCardNumber,
      })
    }).then(res => res.text()).then(res => setResponse(strToJson(res)));
    setCurrent(current + 1)
  }


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [second, setSecond] = React.useState(0);

  function handleSure() {
    summit()
    setSecond(1)
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6"
                      color="inherit" >
            注销信用卡
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <div className={classes.root}>
            <React.Fragment>
              <TextBox CreditCardNumber={props.CreditCardNumber} />
              <Typography>&#160;</Typography>
              <Grid container spacing={3}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                  <DialogTitle id="alert-dialog-title">{"你确定注销你的信用卡？"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      请确保你信用卡的余额为零。
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                      取消
                    </Button>
                    <Button color="secondary" autoFocus>
                      确定注销
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </React.Fragment>
            <div className={classes.buttons} >
              <Button variant="contained" size="medium"
                      color="primary" align = "right"
                      className={classes.button }
                      style={{background: '#D4372C', color: 'white'}}
                      onClick={handleClickOpen}>
                确认
              </Button>
            </div>
          </div>
        </Paper>
      </main>
      <MadeWithLove />
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>
      <Typography>&#160;</Typography><Typography>&#160;</Typography><Typography>&#160;</Typography>

    </React.Fragment>
  )
}
