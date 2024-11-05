import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Combinenav from "../../components/Nav/Combinednav/Combinenav";
import Maingooter from "../../components/footer/Mainfooter/Maingooter";
import Subfooter from "../../components/footer/Subfooter/Subfooter";
import axios from 'axios';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';


const imgUrl="https://img.freepik.com/free-vector/farmers-market-concept-illustration_114360-8886.jpg?w=2000";
export default function ViewEvents() {


    const [events, setEvents] = useState([]);

    useEffect(() => {
        function getEvents() {
            axios.get("http://localhost:5000/events/").then((res) => {
                setEvents(res.data);

            }).catch((err) => {
                alert(err);
            })
        }
        getEvents();

    }, [])

    return (


        <div>

            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <Combinenav />
            <div style={{ width: '100%', opacity: '70%', backgroundSize: 'cover', minHeight: '100vh', backgroundImage: `url('https://www.thebalancemoney.com/thmb/j65dIWXtJFEPmjo1qkZ2cyBsNII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/job-fair-498213851-5b300e588e1b6e00366f8179.jpg')` }}>

                    <div style={{ textAlign: 'right' }}>
                        <Button href='http://localhost:3000/Events/Add' variant="contained" startIcon={<AddIcon />} sx={{ marginLeft: 'auto', marginRight: 20, marginTop: 5 }}>
                            Add Your Event
                        </Button>
                    </div>
                        <h1 style={{ marginBottom: 20,textAlign:'center', color: "black" }}>Events</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <List sx={{columnCount:3,maxWidth:920,width:'100%'}}>

                        {events.map((val) => {
                            return (
                                <ListItem  alignItems="flex-start" sx={{ width:350,mb:4,ml:3,mr:3, bgcolor: '#C0C0C0', borderRadius: '10px' }}>
                                    <Card  sx={{ mr: 3, ml: 3 ,height:375}}>
                                        <CardActionArea href={`http://localhost:3000/Events/VIewEvent/${val._id}`}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={imgUrl}
                                            />
                                           <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {val.eventName}
                                                </Typography>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DateField']}>
                                                        <DateField disabled value={dayjs(val.eventDate)} label="Event Date" />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                                <Typography variant="body2" noWrap color="text.secondary">
                                                    {val.description} 
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button href={`http://localhost:3000/Events/ViewEvent/${val._id}`} size="small" color="primary">
                                                See More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </ListItem>
                            );
                        })}


                        <Divider variant="inset" component="li" />

                </List>
                    </div>
            </div>

            <Maingooter />
            <Subfooter />



        </div>
    );
}
