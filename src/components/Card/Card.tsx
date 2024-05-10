import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
interface Data {
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export default function MediaCard(props: Data ) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.imgUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Box  sx={{margin:"  20px 20px 20px 20px"}}>

      <ButtonGroup 
      fullWidth
       variant="contained" aria-label="Basic button group">
         <Button>-</Button>
         <Button>4 in Cart</Button>
         <Button>+</Button>
       </ButtonGroup>
       <Button  fullWidth  variant='contained'>Add To Cart </Button>

      </Box>
     
      
    </Card>
  );
}
