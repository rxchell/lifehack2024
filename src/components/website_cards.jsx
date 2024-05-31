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

function WebsiteCard (props) {
  const navigate = useNavigate();
  const { data } = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Microlink url={data.url} />
      </CardContent> 
    </React.Fragment>
  );
  
return (
  <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
  </Box>
  )
}

export default WebsiteCard;