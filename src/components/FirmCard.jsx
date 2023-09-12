import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

export default function FirmCard({firm}) {
  return (
    <Card >
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
        <CardMedia
        sx={{p:1,objectFit:"contain", height: 140 }}
        image= {firm?.image}
        title="green iguana"
      />
      </CardContent>
      <CardActions>
      <EditIcon/>
      <DeleteOutlineIcon/>
      </CardActions>
    </Card>
  );
}