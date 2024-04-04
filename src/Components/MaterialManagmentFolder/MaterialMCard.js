import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AlertDialog from './DeleteDialog';
import OprateDialog from './OprateDialog';
import "../MCard.css"


// <<<<<<< HEAD
// export default function MaterialMCard({name, group, file, size}) {
// =======

export default function MaterialMCard({ data, key, handleDelete }) {
    // >>>>>>> 790dee5c0b629f4d47ec39a49c8d5a99b492be38
    return (
        <Card sx={{ maxWidth: "100%", borderRadius: "10px", backgroundColor:'#6c757d', color:'white'}} className='mcard'>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                // <<<<<<< HEAD
                //                 image={file || "https://imgs.search.brave.com/S5rG7x8u-fRxY9zOQB3hYyMaZO1zD__77q-BBnV9-zU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG1pbmRpYS5nb3Yu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvTW9kaS1K/aS1QaG90by0wMi1l/MTY0NzMyNTkzNjgy/MS5qcGc"} 
                //             />
                //             <CardContent>
                //                 <Typography gutterBottom variant="body2" component="div">
                //                     Material Name : {name}
                //                 </Typography>
                //                 <Typography variant="body2" color="div">
                //                     Material Group : {group}
                //                 </Typography>
                //                 <Typography variant="body2" color="div">
                //                     Material Size : {size}
                // =======
                image={data.file}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    Material Name : {data.name}
                </Typography>
                <Typography variant="body2" color="div">
                    Material Group : {data.group}
                </Typography>
                <Typography variant="body2" color="div">
                    Material Size : {data.size}
                    {/* >>>>>>> 790dee5c0b629f4d47ec39a49c8d5a99b492be38 */}
                </Typography>
            </CardContent>
            <CardActions>

                <AlertDialog index={data._id} handleDelete={handleDelete} >delete</AlertDialog>

                <OprateDialog thumbnail={data.file}>Oprate</OprateDialog>

            </CardActions>
        </Card>
    );
}