import { Box, Typography, Paper , CardContent } from "@mui/material";
import NbpLogo from '../../assets/images/nbplogo.png';
import { FaArrowRight } from "react-icons/fa";
import './Cards.scss';
export default function Cards({feature,handleButtonClick,relativeBtnRef,onProductSelect}) {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative", 
        padding: 2,
        borderRadius: 3,
        backgroundColor: `${feature.bgColor}`,
        textAlign: "center",
        margin: "20px",
        width: '350px',
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor:'#ffffff',
          top: -20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: 12,
          fontWeight: "bold",
          px: 1.5,
          py: 1.5,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
        }}
      >
       <img src={NbpLogo} width={'30px'}/>
      </Box>  
      <CardContent style={{marginTop:'20px' ,color: feature.color}}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {feature.title}
        </Typography>
        <Typography variant="body2" mb={2} style={{color: feature.color}}>
          {feature.description}
        </Typography>
        <div className='divider'/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
        <p style={{color: feature.label}}>
          {feature.duration}
        </p>
        <div style={{width:'35px', height:'35px',   backgroundColor: feature.btn,display:'flex', borderRadius:'7px', cursor:'pointer'}}>
        <div ref={relativeBtnRef} style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%', borderRadius:'7px'}} onClick={() => {handleButtonClick(),onProductSelect(feature.title)}}
        >
        <FaArrowRight color={feature.btnIcon} />
        </div>
        </div>
        </div>
        </CardContent>
    </Paper>
  );
}
