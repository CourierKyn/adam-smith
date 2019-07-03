import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
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
import {Container} from "@material-ui/core";


function strToJson(str) {
    return JSON.parse(str);
}

export default function ChatbotPage(props) {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        width: '100px',
        headerBgColor: '#f5f8fb',
        headerFontColor: '#fff',
        // headerFontSize: '0px',
        botBubbleColor: '#D4372C',
        botFontColor: '#fff',
        userBubbleColor: '#D4372C',
        userFontColor: '#fff',

    };

    const style1 = {
        height : '85vh'
    };

    // const summit = () => {
    //     fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_rewards/point/redemption', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             "query": '',
    //         })
    //     }).then(res => res.text()).then(res => setResponse(strToJson(res)));
    //     setCurrent(current + 1)
    // }
    // }

    return (
        <Grid>
            <ThemeProvider theme={theme} >
                <ChatBot hideHeader={'true'} contentStyle={style1}
                    steps={[
                                {
                                    id: '1',
                                    message: '请问您想知道什么',
                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    user: true,
                                    trigger: '3',
                                },
                                {
                                    id: '3',
                                    message: '{previousValue}', //此处需调用接口
                                    trigger: '2',
                                },
                    ]}
                />
            </ThemeProvider>
        </Grid>
    )
}

