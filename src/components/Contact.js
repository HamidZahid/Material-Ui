import { TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Typography variant='h4' mt={6} mb={6} >Contact Us</Typography>
            <TextField variant='contained' label="First Name" type='text' />
        </>
    )
}

export default Contact
