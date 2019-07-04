import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from '@material-ui/core/Container';
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

const steps = ['填写消费单', '消费结果'];



export default function Checkout(props) {

  const [values,setValues] = React.useState({
    creditcardnumber: '6888458888',
    merchantnumber: 'HK0001001000009',
    transactionamount: '',
    transactionccy: '',
  });
const [time,setTime] = React.useState('')

  const gettime = () => {
    setActiveStep(activeStep + 2);
    const date = new Date()
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds();
    setTime(Y+M+D+h+m+s);
}

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  //调用api
  const summit = () => {
      setActiveStep(activeStep + 2);
      const date = new Date()
      const Y = date.getFullYear() + '-';
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const D = date.getDate() + ' ';
      const h = date.getHours() + ':';
      const m = date.getMinutes() + ':';
      const s = date.getSeconds();
      setTime(Y+M+D+h+m+s);
      fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_transaction/creditcard/transactionPosting', {
          method: 'POST',
          headers: {
              'accept': '*/*',
              'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
              'Content-Type': 'application/json',
              'Authorization': '5cfe45fe562d5e6ed88a85470d1c5f7cec114d64a0b3cb1bafc1ae7a'
          },
          body: JSON.stringify({
              "transactionccy": values.transactionccy,
              "transactionamount": parseInt(values.transactionamount),
              "transactiontime": Y+M+D+h+m+s,
              "creditcardnumber": props.CreditCardNumber,
              "merchantnumber": values.merchantnumber,
          })
      })
  }




  return (
    <React.Fragment  style={{background: '#F3F2F7'}}>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
      </AppBar>
      <main className={classes.layout}>
        <Container className={classes.paper}>
          <Typography>&#160;</Typography>
          <Typography component="h1" variant="h3" align="center">
            Consumption
          </Typography>
          <Typography>&#160;</Typography>
          <Stepper activeStep={activeStep} alternativeLabel  style={{background: '#F3F2F7'}}>
            {steps.map(label => (
              <Step  key={label} >
                <StepLabel  style={{background: '#F3F2F7'}}>{label }</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
              <Typography>&#160;</Typography>
                <Typography variant="h5" component='h3' align='center'>
                  消费成功
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0
                ?
                      <div>
                        {/*<Grid item xs={12} sm={6}>*/}
                          <TextField
                              required
                              id="merchant number"
                              name="merchant number"
                              label="Merchant number"
                              value={'HK0001001000009'}
                              onChange={handleChange('merchantnumber')}
                              variant='outlined'
                              fullWidth
                          />
                        {/*</Grid>*/}
                        <Typography>&#160;</Typography>
                        {/*<Grid item xs={12} sm={6}>*/}
                          <TextField
                              id="transaction amount"
                              name="transaction amount"
                              label="Transaction amount"
                              value={values.transactionamount}
                              onChange={handleChange('transactionamount')}
                              variant='outlined'
                              fullWidth
                          />
                        {/*</Grid>*/}
                        <Typography>&#160;</Typography>
                        {/*<Grid item xs={12} sm={6}>*/}
                          <TextField
                              id="transactionccy"
                              name="Transaction Currency Code (HKD, USD, etc.)"
                              label="Transaction Currency (HKD/USD/...)"
                              value={values.transactionccy}
                              onChange={handleChange('transactionccy')}
                              variant='outlined'
                              fullWidth
                          />
                        {/*</Grid>*/}
                        <Typography>&#160;</Typography>
                        {/*<Grid item xs={12}>*/}
                          <FormControlLabel
                              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                              label="已阅读并同意汇丰信用卡交易条款"
                          />
                        {/*</Grid>*/}
                      </div>
                : null
                }
                  <div className={classes.buttons}>
                      <Button
                          variant="contained"
                          color="primary"
                          onClick={summit}
                          className={classes.button}
                          style={{background: '#D4372C', color: 'white'}}
                      >
                          {activeStep === steps.length ? '确认消费' : '确认消费'}
                      </Button>
                  </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Container>
      </main>
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
    </React.Fragment>
  );
}
