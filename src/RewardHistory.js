import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from "@material-ui/core/Container"
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function RewardHistory(props) {
    const imageSet = {
        '00001': 'https://i.loli.net/2019/06/18/5d08e28f290fb20292.jpg',
        '00002': 'https://i.loli.net/2019/06/18/5d08dd8e4c2c562674.jpg',
        '00003': 'https://i.loli.net/2019/06/18/5d08e02fac4de81831.jpg',
        '00004': 'https://i.loli.net/2019/06/18/5d08e11f1e63b52402.jpg',
        '00005': 'https://i.loli.net/2019/06/18/5d08dd8e5eaf346528.jpg',
        '00006': 'https://i.loli.net/2019/06/18/5d08e0a92117267372.jpg',
        '00007': 'https://i.loli.net/2019/06/18/5d08dd8e014c632890.jpg',
        '00008': 'https://i.loli.net/2019/06/18/5d08e3482161355752.jpg',
        '00009': 'https://i.loli.net/2019/06/18/5d08dd8ded41635204.jpg',
        '00010': 'https://i.loli.net/2019/06/18/5d08dd9da199234500.jpg'
    }
    const GoodSet = {
        '00001': '玫瑰',
        '00002': '月季',
        '00003': '百合',
        '00004': '饼干',
        '00005': '风信子',
        '00006': '紫罗兰',
        '00007': '梅花',
        '00008': '茉莉',
        '00009': '迷迭香',
        '00010': 'Flower'
    }

    const [response, setResponse] = React.useState(
        {
            "code": "",
            "msg": "",
            "data": [
                {
                    "creditcardnumber": "",
                    "productcode": "",
                    "amount": '',
                    "points": '',
                    "transactiontime": ""
                }
            ]
        }
    )

    function strToJson(str) {
        return JSON.parse(str);
    }
    const [current, setCurrent] = React.useState(0);
    const summit = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_rewards/point/redemptionHistory', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'token': 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
                'Content-Type': 'application/json',
                'Authorization': '5cfe45fe562d5e6ed88a8547590f43f7805943d5b97b373fd03d2716',
            },
            body: JSON.stringify({
                "creditcardnumber": props.CreditCardNumber,
            })
        }).then(res => res.text()).then(res => setResponse(strToJson(res)));
        setCurrent(current + 1)
    }

    const datasElements = [] // 保存每个用户渲染以后 JSX 的数组
    response.data.forEach((item) => {
        datasElements.push( // 循环每个用户，构建 JSX，push 到数组中
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={imageSet[item["productcode"]]}/>
                    </ListItemAvatar>
                    <Grid container direction={'column'}>
                        <Grid container justify={'space-between'} alignItems={"center"}>
                            <Grid item>
                                <Typography  variant="h7">
                                    {GoodSet[item["productcode"]]}{'*'}{item.amount}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography  variant="body" >
                                    {'-'}{item["points"]}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Typography color="textSecondary" variant="body2">
                                {item.transactiontime}
                            </Typography>
                        </Grid>
                    </Grid>

                </ListItem>
                <Divider variant="inset" component="li"/>
            </List>
        )
    });
    return (
        <Container>
            {current === 0 && (
                summit()
            )}
            <Typography>&#160;</Typography>
            <Typography align='center' variant="h5" component="h1"
                        style={{color: '#D4372C'}}
            >
                积分兑换记录
            </Typography>
            <Typography>&#160;</Typography>
            <Paper>
                <List>
                    {datasElements}
                </List>
            </Paper>
        </Container>
    );
}
