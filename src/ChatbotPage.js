import React, {Component} from 'react';
import ChatBot, {Loading} from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import Box from "@material-ui/core/Box";

class Response extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            result: '',
            trigger: false,
        };

        this.triggetNext = this.triggetNext.bind(this);
    }

    componentWillMount() {
        const {steps} = this.props;
        const query = steps.query.value;
        fetch('http://hsbc.natapp1.cc/', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify({
                "query": query
            })
        }).then(res => res.text()).then(res => this.setState({loading: false, result: JSON.parse(res).answer}));
    }

    triggetNext() {
        this.setState({trigger: true}, () => {
            this.props.triggerNextStep();
        });
    }

    render() {
        const {trigger, loading, result} = this.state;
        return (
            <Box>
                {loading ? <Loading/> : result}
            </Box>
        )
    };
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

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                    {
                        id: 'start',
                        message: '请问您想知道什么',
                        trigger: 'query',
                    },
                    {
                        id: 'query',
                        user: true,
                        trigger: 'response',
                    },
                    {
                        id: 'response',
                        component: <Response/>,
                        asMessage: true,
                        trigger: 'query',
                    },
                ]}

            />
        </ThemeProvider>
    )
}

