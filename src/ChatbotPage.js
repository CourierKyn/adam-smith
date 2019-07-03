import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Box from "@material-ui/core/Box";

function strToJson(str) {
    return JSON.parse(str);
}




export default function ChatbotPage(props) {
    const theme = {
        background: '#f5f8fb',
        // fontFamily: 'Helvetica Neue',
        width: '100px',
        headerBgColor: '#f5f8fb',
        headerFontColor: '#fff',
        headerFontSize: '0px',
        botBubbleColor: '#D4372C',
        botFontColor: '#fff',
        userBubbleColor: '#D4372C',
        userFontColor: '#fff',
    };

    const summit = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_rewards/point/redemption', {
            method: 'POST',
            body: JSON.stringify({
                "query": '',
            })
        }).then(res => res.text()).then(res => setResponse(strToJson(res)));
        setCurrent(current + 1)
    }
    }

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
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
                    message: '{magic(previousValue)}', //此处需调用接口
                    trigger: 2,
                },
            ]}

            />
        </ThemeProvider>
    )
}

