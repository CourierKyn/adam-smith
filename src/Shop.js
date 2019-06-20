import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from "@material-ui/core/Container";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizlIcon from '@material-ui/icons/MoreHoriz';
import Box from "@material-ui/core/Box";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from "@material-ui/core/Icon";
import RewardStoreDetails from "./RewardStoreDetails"
function strToJson(str) {
    return JSON.parse(str);
}


export default function Shop(props) {

    const [response, setResponse] = React.useState(
        {
            "code": "",
            "msg": "",
            "data": {
                "totalPoint": ''
            }
        }
    );
    // const number = 5000010000014074;
    const [current, setCurrent] = React.useState(0);

    const summit = () => {
        fetch('https://simnectzplatform.com:8080/simnectz_Bank-Credit_card_service-credit_card_rewards/point/totalPoint\n', {
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

    // function getStepContent(step) {
    //     switch (step) {
    //         case 0:
    //             return <RewardStoreDetails/>;
    //
    //
    //             const [step, setstep] = React.useState(0);
    //
    //             const change = () => {
    //                 setActiveStep(0);
    //             };
    const [change, setChange] = React.useState(0);
    const [values, setValues] = React.useState( ''
    );
    function handleChange1() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08e28f290fb20292.jpg',
                "title": '玫瑰',
                "productcode": '00001',
                'points': '10',
            }
        )
    }

    function handleChange2() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08dd8e4c2c562674.jpg',
                "title": '月季',
                "productcode": '00002',
                'points': '300'
            }
        )
    }

    function handleChange3() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08e02fac4de81831.jpg',
                "title": '百合',
                "productcode": '00003',
                'points': '200'
            }
        )
    }

    function handleChange4() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08e11f1e63b52402.jpg',
                "title": '饼干',
                "productcode": '00004',
                'points': '1000'
            }
        )
    }

    function handleChange5() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08dd8e5eaf346528.jpg',
                "title": '风信子',
                "productcode": '00005',
                'points': '500'
            }
        )
    }

    function handleChange6() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08e0a92117267372.jpg',
                "title": '紫罗兰',
                "productcode": '00006',
                'points': '20'
            }
        )
    }

    function handleChange7() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08dd8e014c632890.jpg',
                "title": '梅花',
                "productcode": '00007',
                'points': '50'
            }
        )
    }

    function handleChange8() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08e3482161355752.jpg',
                "title": '茉莉',
                "productcode": '00008',
                'points': '10',
            }
        )
    }

    function handleChange9() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08dd8ded41635204.jpg',
                "title": '迷迭香',
                "productcode": '00009',
                'points': '58'
            }
        )
    }

    function handleChange10() {
        setChange(change+1);
        setValues(
            {
                "src": 'https://i.loli.net/2019/06/18/5d08dd9da199234500.jpg',
                "title": '花卉',
                "productcode": '010',
                'points': '250'
            }
        )
    }





                return (
                    <Box>
                        {change === 0
                            ?
                            <Box>
                                {current === 0 && (
                                    summit()
                                )}
                                <Paper>
                                    <Table>
                                        <TableRow>
                                            <TableCell size='medium'> My rewards</TableCell>
                                            <TableCell align="right">{response.data.totalPoint} points</TableCell>
                                        </TableRow>
                                    </Table>
                                </Paper>
                                <GridList cellHeight={180}>
                                    <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>

                                    </GridListTile>
                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08e28f290fb20292.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08e28f290fb20292.jpg'}/>
                                        <GridListTileBar
                                            title={'玫瑰'}
                                            subtitle={<span>10 points</span>}
                                            actionIcon={
                                                <IconButton style={{color: "white"}} onClick={handleChange1}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08dd8e4c2c562674.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08dd8e4c2c562674.jpg'}/>
                                        <GridListTileBar
                                            title={'月季'}
                                            subtitle={<span>300 points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange2}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08e02fac4de81831.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08e02fac4de81831.jpg'}/>
                                        <GridListTileBar
                                            title={'百合'}
                                            subtitle={<span>200 points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange3}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08e11f1e63b52402.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08e11f1e63b52402.jpg'}/>
                                        <GridListTileBar
                                            title={'饼干'}
                                            subtitle={<span>1000 points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange4}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08dd8e5eaf346528.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08dd8e5eaf346528.jpg'}/>
                                        <GridListTileBar
                                            title={'风信子'}
                                            subtitle={<span>500 points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange5}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08e0a92117267372.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08e0a92117267372.jpg'}/>
                                        <GridListTileBar
                                            title={'紫罗兰'}
                                            subtitle={<span>20 points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange6}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08dd8e014c632890.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08dd8e014c632890.jpg'}/>
                                        <GridListTileBar
                                            title={'梅花'}
                                            subtitle={<span>{50} points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange7}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08e3482161355752.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08e3482161355752.jpg'}/>
                                        <GridListTileBar
                                            title={'茉莉'}
                                            subtitle={<span>{10} points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange8}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08dd8ded41635204.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08dd8ded41635204.jpg'}/>
                                        <GridListTileBar
                                            title={'迷迭香'}
                                            subtitle={<span>{58} points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange9}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                    <GridListTile key={'https://i.loli.net/2019/06/18/5d08dd9da199234500.jpg'}>
                                        <img src={'https://i.loli.net/2019/06/18/5d08dd9da199234500.jpg'}/>
                                        <GridListTileBar
                                            title={'花卉'}
                                            subtitle={<span>{250} points</span>}
                                            actionIcon={
                                                <IconButton onClick={handleChange10}>
                                                    <MoreHorizlIcon style={{color: "white"}}/>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                                </GridList>
                            </Box>
                            : <RewardStoreDetails values={values} setChange={setChange} setCurrent={setCurrent}/>
                        }
                    </Box>
                );
        }

