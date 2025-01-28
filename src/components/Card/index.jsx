import React from 'react';
import { Grid2, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { FaArrowRight } from "react-icons/fa";

import './Cards.scss';


const Cards = ({feature}) => {
  return (
    <Box
    display="flex"
    gap={2}
    sx={{ padding: 2 }}
  >
    {/* Card 1 */}
    <Card
      sx={{
        backgroundColor: "#A8E6CF", // Light green
        color: "#000",
        width: 450,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="overline"
          fontWeight="bold"
          color="text.secondary"
        >
          {feature.strategy}
        </Typography>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {feature.title}
        </Typography>
        <Typography variant="body2" mb={2}>
          {feature.description}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          {feature.cagr}
        </Typography>
        <div className='divider'/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
        <p>
          {feature.duration}
        </p>
        <div style={{width:'35px', height:'35px', backgroundColor:'white',display:'flex', borderRadius:'7px', cursor:'pointer'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%', borderRadius:'7px'}}>
        <FaArrowRight />
        </div>
        </div>
        </div>
        <IconButton sx={{ position: "absolute", bottom: 16, right: 16 }}>
      </IconButton>
      </CardContent>
     
    </Card>
    </Box>
  );
};

export default Cards;
