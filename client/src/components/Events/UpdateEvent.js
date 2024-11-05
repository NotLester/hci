import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Combinenav from '../../components/Nav/Combinednav/Combinenav';
import Maingooter from '../../components/footer/Mainfooter/Maingooter';
import Subfooter from '../../components/footer/Subfooter/Subfooter';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateEvents() {
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

  function validateForm() {
    const errors = {};

    if (eventName.trim() === '') {
      errors.eventName = 'Event Name is required';
    }

    if (authorName.trim() === '') {
      errors.authorName = 'Author Name is required';
    }

    if (eventDate === '') {
      errors.eventDate = 'Event Date is required';
    }

    if (venue.trim() === '') {
      errors.venue = 'Venue is required';
    }

    if (time === '') {
      errors.time = 'Time is required';
    }

    if (description.trim() === '') {
      errors.description = 'Description is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function update(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      eventName,
      authorName,
      eventDate,
      venue,
      time,
      description,
    };

    axios
      .put(`http://localhost:5000/events/update/${id}`, data)
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Updated Successfully',
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

    setTimeout(() =>
    window.location.replace(`http://localhost:3000/Events/VIewEvent/${id}`)
  , 2500);
}

function deleteEvent(id) {
  Swal.fire({
    title: 'Are You Sure?',
    text: 'Once deleted, You Will Not Be Able To Recover These Details!',
    icon: 'warning',
    dangerMode: true,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  })
    .then((result) => {
      if (result.isConfirmed) {
        axios.delete('http://localhost:5000/events/delete/' + id);
        Swal.fire({
          title: 'Success!',
          text: 'Deleted Record Successfully',
          icon: 'success',
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location.replace('http://localhost:3000/Events/');
        }, 1500);
      }
    })
    .catch((err) => {
      Swal.fire({
        title: 'Error!',
        text: "Couldn't delete your Details",
        type: 'error',
      });
    });
}

return (
  <div>
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <Combinenav />

    <div
      style={{
        width: '100%',
        opacity: 80,
        backgroundSize: 'cover',
        backgroundImage: `url('https://www.medidata.com/wp-content/uploads/2021/09/shutterstock_379892197_LR-1024x529.jpg')`,
      }}
    >
      <Grid item>
        <Box
          sx={{
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ marginTop: 5 }}>
           Update Your Event 
          </Typography>
          <div
            style={{
              backgroundColor: 'white',
              margin: 5,
              borderRadius: 5,
              opacity: 50,
            }}
          >
            <Box
              component="form"
              sx={{ margin: 5, opacity: 100 }}
              noValidate
              onSubmit={update}
              xs={12}
              sm={8}
              md={5}
              elevation={6}
              square
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="event"
                label="Event Name"
                name="event"
                value={eventName}
                autoComplete="event"
                autoFocus
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
                error={!!errors.eventName}
                helperText={errors.eventName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="author"
                value={authorName}
                label="Author Name"
                id="author"
                onChange={(e) => {
                  setAuthorName(e.target.value);
                }}
                error={!!errors.authorName}
                helperText={errors.authorName}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="Event Date"
                    required
                    disablePast
                    value={dayjs(eventDate)}
                    onChange={(e) => {
                      setEventDate(e);
                    }}
                    error={!!errors.eventDate}
                    helperText={errors.eventDate}
                  />
                  <TimePicker
                    label="Time"
                    onChange={(e) => {
                      setTime(e);
                    }}
                    value={dayjs(time)}
                    error={!!errors.time}
                    helperText={errors.time}
                  />
                </DemoContainer>
                </LocalizationProvider>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={venue}
                  name="venue"
                  label="Venue"
                  id="venue"
                  onChange={(e) => {
                    setVenue(e.target.value);
                  }}
                  error={!!errors.venue}
                  helperText={errors.venue}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={description}
                  name="description"
                  label="Description"
                  id="description"
                  multiline
                  rows={3}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  error={!!errors.description}
                  helperText={errors.description}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update Event Details
                </Button>
                <Button
                  onClick={() => deleteEvent(id)}
                  startIcon={<DeleteIcon />}
                  variant="contained"
                  fullWidth
                  color="error"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Delete
                </Button>
              </Box>
            </div>
          </Box>
        </Grid>
      </div>

      <Maingooter />
      <Subfooter />
    </div>
  );
}
