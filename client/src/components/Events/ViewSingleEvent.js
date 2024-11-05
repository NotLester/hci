import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Combinenav from '../../components/Nav/Combinednav/Combinenav';
import Maingooter from '../../components/footer/Mainfooter/Maingooter';
import Subfooter from '../../components/footer/Subfooter/Subfooter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DateField } from '@mui/x-date-pickers/DateField';
import { FiEdit } from 'react-icons/fi'

const imgUrl = "https://img.freepik.com/free-vector/farmers-market-concept-illustration_114360-8886.jpg?w=2000";

export default function ViewSingleEvent() {
    const [eventName, setEventName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [venue, setVenue] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const { id } = useParams();

    useEffect(() => {
        function getEvent() {
            axios
                .get(`http://localhost:5000/events/get/${id}`)
                .then((res) => {
                    if (res.data.status) {
                        setEventName(res.data.event.eventName);
                        setAuthorName(res.data.event.authorName);
                        setEventDate(res.data.event.eventDate);
                        setVenue(res.data.event.venue);
                        setTime(res.data.event.time);
                        setDescription(res.data.event.description);
                    }
                })
                .catch((err) => {
                    alert(err);
                });
        }

        getEvent();
    }, []);




    return (
        <div>
            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <Combinenav />

            <div style={{ width: '100%', opacity: '70%', backgroundSize: 'cover', backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ya3Nob3AlMjBzZXNzaW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80')` }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card sx={{ width: '75%', height: '100%', mt: 5, mb: 4, ml: 3, mr: 3, bgcolor: '#ffffff', borderRadius: '10px', position: 'relative' }}>

                        <CardMedia component="img" height="140" image={imgUrl} />
                        <CardContent>
                            <CardActions sx={{ position: 'absolute', right: '10px' }}>
                                <Button startIcon={<FiEdit />} href={`http://localhost:3000/Events/Update/${id}`} size="small" color="primary">
                                    Update Event
                                </Button>
                            </CardActions>
                            <Typography gutterBottom variant="h4" component="div">
                                {eventName}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Author: {authorName}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Venue: {venue}
                            </Typography>
                            <div style={{marginBottom:'10px'}}>

                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                    <DateField sx={{color:'solid black'}} disabled value={dayjs(eventDate)} label="Event Date" />
                                    <TimePicker label="Time" disabled value={time} />
                                </DemoContainer>
                            </LocalizationProvider>
                            </div>
                            <Typography variant="body2" color="text.primary">
                                {description}
                            </Typography>
                        </CardContent>


                    </Card>
                </div>
            </div>
            <Maingooter />
            <Subfooter />
        </div>
    );
}
