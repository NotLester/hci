import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Cancel';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function AddEvent() {
  const [eventName, setEventName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [eventDate, setEventDate] = useState(null);
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const theme = createTheme();
  const tomorrow = dayjs().add(1, 'day');
  const today = dayjs();
  const todayStartOfTheDay = today.startOf('day');

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (eventName.trim() === '') {
      newErrors.eventName = 'Event name is required';
      isValid = false;
    }

    if (authorName.trim() === '') {
      newErrors.authorName = 'Author name is required';
      isValid = false;
    }

    

    if (venue.trim() === '') {
      newErrors.venue = 'Venue is required';
      isValid = false;
    }

    if (description.trim() === '') {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendData = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let newEvent = {
      eventName: eventName,
      authorName: authorName,
      eventDate: eventDate,
      venue: venue,
      time: time,
      description: description,
    };

    axios
      .post('http://localhost:5000/events/add', newEvent)
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Your Event is Added',
          icon: 'success',
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: "Couldn't Update your Details",
          type: 'error',
        });
      });

    setTimeout(() => {
      window.location.replace('http://localhost:3000/Events');
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://brazen-production.nyc3.digitaloceanspaces.com/brazen_uploads/virtual-career-fair-prep.png?mtime=20201020213448&focal=none)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Add Your Event Details
            </Typography>
            <Box component="form" noValidate onSubmit={sendData} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="event"
                label="Event Name"
                name="event"
                autoComplete="event"
                autoFocus
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                error={Boolean(errors.eventName)}
                helperText={errors.eventName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="author"
                label="Author Name"
                id="author"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                error={Boolean(errors.authorName)}
                helperText={errors.authorName}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Event Date" required disablePast defaultValue={tomorrow} onChange={(e) => {
                                        setEventDate(e);
                                    }} />
                                    <TimePicker label="Time" onChange={(e) => {
                                        setTime(e);
                                    }} required defaultValue={todayStartOfTheDay}/>
                                </DemoContainer>
                                
                            </LocalizationProvider>
              <TextField
                margin="normal"
                required
                fullWidth
                name="venue"
                label="Venue"
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                error={Boolean(errors.venue)}
                helperText={errors.venue}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={Boolean(errors.description)}
                helperText={errors.description}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Event
              </Button>
              <Button
                href="http://localhost:3000/Events"
                startIcon={<DeleteIcon />}
                variant="outlined"
                fullWidth
                color="error"
                sx={{ mt: 1, mb: 1 }}
              >
                Cancel
                </Button>
              <Typography variant="body2" color="text.secondary" align="center">
                {errors.formError}
              </Typography>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
