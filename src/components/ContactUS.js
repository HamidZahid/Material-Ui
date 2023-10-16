import React from 'react'
import { Typography, TextField, Box, Button } from '@mui/material'
import { Formik } from 'formik'

const ContactUS = () => {
    return (
        <>
            <Box>
                <Typography variant='h4' mt={6} mb={6} >Contact Us</Typography>
                <TextField variant='outlined' label="First Name" mb="1" type='text' fullWidth />
                <TextField variant='outlined' label="Last Name" mb="1" type='text' fullWidth />
                <TextField variant='outlined' label="First Name" mb="1" type='text' fullWidth />
                <TextField variant='outlined' label="My Name" mb="1" type='text' fullWidth />
                <TextField variant='outlined' label="Your Name" mb="1" type='text' fullWidth />
                <TextField variant='outlined' label="His Name" mb="1" type='text' fullWidth />
                <TextField variant='outlined' label="Her Name" mb="1" multiline type='text' fullWidth />
                <Button size='large' variant='contained' mt={3}> Button</Button>
            </Box>

        </>
    )
}

export default ContactUS
