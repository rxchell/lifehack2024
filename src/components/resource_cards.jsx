import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Microlink from '@microlink/react'

function ResourceCard (props) {
  const navigate = useNavigate();
  const { data } = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
          <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body1">
          <Microlink url={data.url} />
        </Typography>
      </CardContent>
      <div>
      <CardActions>
        <Button size="small" onClick={handleExpandClick}>
          Learn More
        </Button>
      </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>
              {data.description1}
              <br />
              {data.description2}
              <br />
              {data.description3}
              <br />
              {data.description4}
              <br />
              {data.description5}  
            </Typography>
            </CardContent> 
          </Collapse>
      </div>
    </React.Fragment>
  );
  
return (
  <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
  </Box>
  )
}

export default ResourceCard;