import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AlertDialog from './DeleteDialoge';



export default function MaterialMCard(props) {
    return (
        <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.data.mImage}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    Material Name : {props.data.mName}
                </Typography>
                <Typography variant="body2" color="div">
                    Material Group : {props.data.mGroup}
                </Typography>
                <Typography variant="body2" color="div">
                    Material Size : {props.data.mSize}
                </Typography>
            </CardContent>
            <CardActions>
            
                <AlertDialog index={props.index} handleDelete={props.handleDelete} >delete</AlertDialog>
                <Button variant="contained" disableElevation style={{ width: "50%" }}>
                    Oprate
                </Button>


            </CardActions>
        </Card>
    );
}