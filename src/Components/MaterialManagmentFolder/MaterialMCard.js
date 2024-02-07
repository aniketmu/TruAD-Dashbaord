import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MaterialMCard() {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://imgs.search.brave.com/S5rG7x8u-fRxY9zOQB3hYyMaZO1zD__77q-BBnV9-zU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG1pbmRpYS5nb3Yu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvTW9kaS1K/aS1QaG90by0wMi1l/MTY0NzMyNTkzNjgy/MS5qcGc"
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    Material Name :
                </Typography>
                <Typography variant="body2" color="div">
                    Material Group :
                </Typography>
                <Typography variant="body2" color="div">
                    Material Size :
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" disableElevation>
                    Delete
                </Button>

            </CardActions>
        </Card>
    );
}