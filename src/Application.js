import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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

const steps = ['', '', '',''];



export default function Application() {

  const [values, setValues] = React.useState({
    "accommodation": "S",
    "chinesename": "王研",
    "companyaddress": "228 Pok Fu Lam Road,Aberdeen,Hong Kong",
    "companyphonenumber": 24827781,
    "customerid": "U735535(9)",
    "dateofbirth": "1975-08-25",
    "education": "U",
    "emailaddress": "happyday@hotmail.com",
    "employercompanyname": "HSBC",
    "firstname": "Yan",
    "gender": "M",
    "issuecountry": "China",
    "lastname": "Wong",
    "mailingaddress": "551 Austin Road,Tsim Sha Tsui,Kowloon",
    "maritalstatus": "S",
    "mobilephonenumber": 64657884,
    "monthlysalary": 19000,
    "nationality": "China",
    "occupation": "Software",
    "permanentresidencestatus": "Y",
    "position": "Senior Manager",
    "residencephonenumber": 34828869,
    "residentialaddress": "779 Yi Chun Street, Sai Kung, New Territory",
    "wechatid": "W3456754",
    "yearsofresidence": 3,
    "yearsofservices": 2,
    "approvedlimit": 10000,
    "cashadvancelimit": 5000,
    "creditcardtype": "V",
    "expirydate": "2024-02-26",
    "issuancedate": "2019-02-26",
    "repaymentaccountnum": "HK720001001000000001001",
    "repaymentcycle": "M",
    "verificationcode": "001"
  });


  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const [response, setResponse] = React.useState('');
  const [tick, setTick] = React.useState(0);
const handleTick  = () => {
        setTick(1)
}

  const summit = () => {
    setTick(0);
    setActiveStep(activeStep + 1);
    fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card/creditcard/accountOpening', {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
      'Content-Type': 'application/json',
      'Authorization': '5cfe45fe562d5e6ed88a8547d0134c31d72d468fa7fbe2f16b93188e',
    },
    body: JSON.stringify({
      // "account": {
      //   "approvedlimit": 10000,
      //   "cashadvancelimit": 5000,
      //   "creditcardtype": "V",
      //   "expirydate": "2024-02-26",
      //   "issuancedate": "2019-02-26",
      //   "repaymentaccountnum": "HK720001001000000001001",
      //   "repaymentcycle": "M",
      //   "verificationcode": "001"
      // },
      // "customer": {
      //   "accommodation": "S",
      //   "chinesename": "王研",
      //   "companyaddress": "228 Pok Fu Lam Road,Aberdeen,Hong Kong",
      //   "companyphonenumber": 24827781,
      //   "customerid": "U735535(9)",
      //   "dateofbirth": "1975-08-25",
      //   "education": "U",
      //   "emailaddress": "happyday@hotmail.com",
      //   "employercompanyname": "HSBC",
      //   "firstname": "Yan",
      //   "gender": "M",
      //   "issuecountry": "China",
      //   "lastname": "Wong",
      //   "mailingaddress": "551 Austin Road,Tsim Sha Tsui,Kowloon",
      //   "maritalstatus": "S",
      //   "mobilephonenumber": 64657884,
      //   "monthlysalary": 19000,
      //   "nationality": "China",
      //   "occupation": "Software",
      //   "permanentresidencestatus": "Y",
      //   "position": "Senior Manager",
      //   "residencephonenumber": 34828869,
      //   "residentialaddress": "779 Yi Chun Street, Sai Kung, New Territory",
      //   "wechatid": "W3456754",
      //   "yearsofresidence": 3,
      //   "yearsofservices": 2
      // }

      "account": {
        "approvedlimit": 10000,
        "cashadvancelimit": 5000,
        "creditcardtype": "V",
        "expirydate": "2024-02-26",
        "issuancedate": "2019-02-26",
        "repaymentaccountnum": "HK720001001000000001001",
        "repaymentcycle": "M",
        "verificationcode": "001"
      },
      "customer": {
        "accommodation": values.accommodation,
        "chinesename": values.chinesename,
        "companyaddress": values.companyaddress,
        "companyphonenumber": parseInt(values.companyphonenumber),
        "customerid": values.customerid,
        "dateofbirth": values.dateofbirth,
        "education": values.education,
        "emailaddress": values.emailaddress,
        "employercompanyname": values.employercompanyname,
        "firstname": values.firstname,
        "gender": values.gender,
        "issuecountry": values.issuecountry,
        "lastname": values.lastname,
        "mailingaddress": values.mailingaddress,
        "maritalstatus": values.maritalstatus,
        "mobilephonenumber": parseInt(values.mobilephonenumber),
        "monthlysalary": parseInt(values.monthlysalary),
        "nationality": values.nationality,
        "occupation": values.occupation,
        "permanentresidencestatus": values.permanentresidencestatus,
        "position": values.position,
        "residencephonenumber": parseInt(values.residencephonenumber),
        "residentialaddress": values.residentialaddress,
        "wechatid": values.wechatid,
        "yearsofresidence": parseInt(values.yearsofresidence),
        "yearsofservices": parseInt(values.yearsofservices)
      }
    })

  }).then(res => res.text()).then(res => setResponse(strToJson(res)));


}
  function strToJson(str){
    return JSON.parse(str);
  }


  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" style={{background:  'white', color:'#D4372C'}}>
            信用卡注册
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {response.code === '1'
                    ?
                    <Box>
                <Typography variant="h6" gutterBottom>
                  感谢您的申请
                </Typography>
                <Typography variant="subtitle1">
                  您的信用卡号为{response.creditcardnumber}
                </Typography>
                    </Box>
                    :          <Box>
                      <Typography variant="h6" gutterBottom>
                    申请格式有误或者用户不存在
                      </Typography>
                    </Box>
                    }
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0
                ? <React.Fragment>
                      <Typography variant="h6" gutterBottom align="center">
                        基础信息
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} >
                          <TextField
                              required
                              id="chinesename"
                              name="chinesename"
                              label="Chinesename"
                              value={values.chinesename}
                              onChange={handleChange('chinesename')}
                                 fullWidth
                          variant="outlined"

                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="gender"
                              name="gender"
                              label="Gender"
                              value={values.gender}
                              onChange={handleChange('gender')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="firstname"
                              name="firstname"
                              label="First name"
                              value={values.firstname}
                              onChange={handleChange('firstname')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="fname"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="lastname"
                              name="lastname"
                              label="Last name"
                              value={values.lastname}
                              onChange={handleChange('lastname')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="lname"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="maritalstatus"
                              name="maritalstatus "
                              label="maritalstatus "
                              value={values.maritalstatus}
                              onChange={handleChange('maritalstatus')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                              required
                              id="customerid"
                              name="customerid"
                              label="customerid"
                              value={values.customerid}
                              onChange={handleChange('customerid')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="issuecountry"
                              name="issuecountry"
                              label="issuecountry"
                              value={values.issuecountry}
                              onChange={handleChange('issuecountry')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="nationality"
                              name="nationality"
                              label="Nationality"
                              value={values.nationality}
                              onChange={handleChange('nationality')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="education"
                              name="education "
                              label="Education "
                              value={values.education}
                              onChange={handleChange('education')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="mobilePhoneNumber"
                              name="mobilePhoneNumber "
                              label="Mobile Phone Number "
                              value={values.mobilephonenumber}
                              onChange={handleChange('mobilePhoneNumber')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="emailaddress"
                              name="emailaddress "
                              label="Emailaddress "
                              value={values.emailaddress}
                              onChange={handleChange('emailaddress')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                              <FormControlLabel
                                  onClick={handleTick}
                                  control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                                  label="已阅读并同意汇丰信用卡条款"
                              />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                : null
                }
                {activeStep ===1
                ?
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom align="center">
                        详细信息
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="dateofbirth"
                              name="dateofbirth "
                              label="Date Of Birth "
                              helperText="Your birthday"
                              value={values.dateofbirth}
                              onChange={handleChange('dateofbirth')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="monthlysalary"
                              name="monthlysalary "
                              label="Monthly salary "
                              helperText="The salary paid for you every month."
                              value={values.monthlysalary}
                              onChange={handleChange('monthlysalary')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              id="occupation"
                              name="occupation "
                              label="Occupation "
                              helperText="job or profession"
                              value={values.occupation}
                              onChange={handleChange('occupation')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                              id="accommodation"
                              name="accommodation "
                              label="Accommodation "
                              helperText="The ownership of the provided residential address."
                              value={values.accommodation}
                              onChange={handleChange('accommodation')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="none"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                              id="companyaddress"
                              name="companyaddress "
                              label="companyaddress "
                              helperText="The physical address of the company where you works."
                              value={values.companyaddress}
                              onChange={handleChange('companyaddress')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="none"
                          />
                        </Grid>


                        <Grid item xs={12}>
                          <TextField
                              id="employercompanyname"
                              name="employercompanyname "
                              label="Employer Companyname "
                              helperText="The name of the company you works."
                              value={values.employercompanyname}
                              onChange={handleChange('employercompanyname')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="none"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="companyphonenumber"
                              name="companyphonenumber "
                              label="Company phone number "
                              helperText="The phone number of your company"
                              value={values.companyphonenumber}
                              onChange={handleChange('companyphonenumber')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="none"                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="position"
                              name="position "
                              label="Position "
                              helperText="Your job title in your company."
                              value={values.position}
                              onChange={handleChange('position')}
                                 fullWidth
                          variant="outlined"
                              autoComplete="none"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                              required
                              id="mailingaddress"
                              name="mailingaddress "
                              label="Mailing Address "
                              helperText="Your mailing address"
                              value={values.mailingaddress}
                              onChange={handleChange('mailingaddress')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                              required
                              id="permanentresidencestatus"
                              name="permanentresidencestatus "
                              label="Permanent residence status "
                              helperText="Hong Kong permanent resident or not"
                              value={values.permanentresidencestatus}
                              onChange={handleChange('permanentresidencestatus')}
                                 fullWidth
                          variant="outlined"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                              id="residentialaddress"
                              name="residentialaddress "
                              label="Residential address "
                              helperText="The Hong Kong address where you lives."
                              value={values.residentialaddress}
                              onChange={handleChange('residentialaddress')}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="residencephonenumber"
                              name="residencephonenumber "
                              label="Residence phone number "
                              helperText="The phone number of your residential address in Hong Kong."
                              value={values.residencephonenumber}
                              onChange={handleChange('residencephonenumber')}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              id="wechatid"
                              name="wechatid "
                              label="Wechatid "
                              helperText="Your WeChat ID."
                              value={values.wechatid}
                              onChange={handleChange('wechatid')}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            id="yearsofresidence"
                            name="yearsofresidence "
                            label="Years of residence "
                            helperText="The year of living in Hong Kong."
                            value={values.yearsofresidence}
                            onChange={handleChange('yearsofresidence')}
                               fullWidth
                          variant="outlined"
                            
                        />
                      </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                          id="yearsofservices"
                          name="yearsofservices "
                          label="Years of services"
                          helperText="The year of working in this company."
                          value={values.yearsofservices}
                          onChange={handleChange('yearsofservices')}
                             fullWidth
                          variant="outlined"
                          
                      />
                    </Grid>
                      </Grid>
                    </React.Fragment>
                : null}
                {activeStep ===2
                    ?
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom align="center">
                        个人信息确认
                      </Typography>

                      <div>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Chinese Name
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.chinesename}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            First Name
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.firstname}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Last Name
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.lastname}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Gender
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.gender}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            customerid
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.customerid}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Issue Country
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.issuecountry}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>

                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Nationality
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.nationality}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Company Address
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.companyaddress}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Accommodation
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.accommodation}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Company Phone Number
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.companyphonenumber}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Date Of Birth
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.dateofbirth}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>

                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Education
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.education}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Email Address
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.emailaddress}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Employer Companyname
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.employercompanyname}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Mailing Address
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.mailingaddress}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Marital Status
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.maritalstatus}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>

                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Mobile Phone Number
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.mobilephonenumber}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Monthly Salary
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.monthlysalary}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Occupation
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.occupation}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Permanent Residence Status
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.permanentresidencestatus}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Position
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.position}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Residence Phone Number
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.residencephonenumber}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Residential Address
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.residentialaddress}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Wechat ID
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.wechatid}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Years Of Residence
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.yearsofresidence}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          <Card>
                          <CardActionArea>
                            <CardContent>
                          <Typography  component="h4">
                            Years Of Services
                          </Typography>
                          <Typography variant="h6" component="h3">
                            {values.yearsofservices}
                           </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    </React.Fragment>
                    : null
                }
                {activeStep === 3
                    ?
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom align="center">
                        信用卡类型
                      </Typography>
                    <div>

                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                      <TextField
                          disabled
                          id="approvedlimit"
                          name="approvedlimit "
                          label="approvedlimit"
                          value={values.approvedlimit}
                             fullWidth
                          variant="outlined"
                       
                      />
                    </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              disabled
                              id="cashadvancelimit"
                              name="cashadvancelimit "
                              label="cashadvancelimit"
                              value={values.cashadvancelimit}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              disabled
                              id="creditcardtype"
                              name="creditcardtype "
                              label="creditcardtype"
                              value={values.creditcardtype}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              disabled
                              id="expirydate"
                              name="expirydate "
                              label="expirydate"
                              value={values.expirydate}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              disabled
                              id="issuancedate"
                              name="issuancedate "
                              label="issuancedate"
                              value={values.issuancedate}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              disabled
                              id="repaymentaccountnum"
                              name="repaymentaccountnum "
                              label="repaymentaccountnum"
                              value={values.repaymentaccountnum}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                              disabled
                              id="verificationcode"
                              name="verificationcode "
                              label="verificationcode"
                              value={values.verificationcode}
                                 fullWidth
                          variant="outlined"
                              
                          />
                        </Grid>

                      </Grid>
                    </div>
                    </React.Fragment>
                    : null
                }
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  { (tick === 0)
                        ?
                      (<Button
                          disabled
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                          style={{background: '#D4372C', color: 'white'}}
                      >
                        next
                      </Button>)
                        :
                      ((activeStep < 3)
                            ?
                          (<Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                                style={{background: '#D4372C', color: 'white'}}
                            >
                              next
                            </Button>)
                            : null)
                  }
                  {activeStep === 3
                      ?
                      <Button
                          variant="contained"
                          color="primary"
                          onClick={summit}
                          className={classes.button}
                          style={{background: '#D4372C', color: 'white'}}
                      >
                        summit
                      </Button>
                      : null
                  }
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>

      </main>
    </React.Fragment>
  );
}
