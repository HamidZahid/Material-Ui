import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'

const Cake = () => {
    return (
        <>
            <Typography variant='h4' mt={5} mb={5}> Cakes ----</Typography>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140, mb: 2 }}
                    image="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" >
                        Cake Name
                    </Typography>

                </CardContent>

            </Card>
        </>
    )
}

export default Cake
