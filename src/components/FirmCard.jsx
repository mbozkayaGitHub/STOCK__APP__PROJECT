import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { btnStyle } from '../styles/globalStyles';
import useStockCall from '../hooks/useStockCall';

export default function FirmCard({firm,setOpen}) {

    const {deleteStockData} =useStockCall()
  return (
    <Card sx={{
        p:2,
        width:"300px",
        height:"400px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
        <CardMedia
        sx={{p:1,objectFit:"contain", height:"130px" }}
        image= {firm?.image}
        title="firm-image"
      />
       <Typography variant="body2" color="text.secondary">
          Phone:{firm?.phone}
        </Typography>
      </CardContent>
      <CardActions>
      <EditIcon sx={btnStyle} onClick={() =>setOpen(true)} />
      <DeleteOutlineIcon sx={btnStyle}
      onClick={()=>deleteStockData("firms", firm.id)}
      />
      </CardActions>
    </Card>
  );
}