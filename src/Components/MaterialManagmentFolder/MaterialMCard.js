import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AlertDialog from "./DeleteDialog";
import OprateDialog from "./OprateDialog";
import "../MCard.css";
 
export default function MaterialMCard({ data, key, handleDelete }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: "10px",
        backgroundColor: "#6c757d",
        color: "white",
      }}
      className="mcard"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
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
        </Typography>
      </CardContent>
      <CardActions>
        <AlertDialog index={data._id} handleDelete={handleDelete}>
          delete
        </AlertDialog>

        <OprateDialog thumbnail={data.file}>Oprate</OprateDialog>
      </CardActions>
    </Card>
  );
}
