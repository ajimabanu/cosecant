import { Box,  Stack, Typography,styled} from '@mui/material'

import React from 'react'


const StyledBox = styled(Box)({
    height: "5%",
    width: "25%",
  cursor: "pointer",
  marginTop: "30",
    padding:"50",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  
});
const StyledTypography = styled(Typography)({
    margin: '25% 50px 25% 50px',
    background: 'white',
  
})
const Hack = () => {
  return (
   <div className='boo'>
    
                <Box sx={{ background: "transparent", }}>
                    <Typography variant="h1" color="white" textAlign="center" pt={45}>
                        IT SOLUTIONS & 
        </Typography>
        <Typography variant="h1" color="white" textAlign="center" >TECHNOLOGY</Typography>
        <Typography variant="h6" color="white" align="center">Accelerate Stratergcy execution and Consistency in Revenue Growth!</Typography>
          <Typography variant="h6" color="white" align="center">We are Commited to Providing our Clients the Best Strategic</Typography>
        <Typography variant="h6" color="white" align="center">Guidence Available</Typography>
        <div className="bbb"><a href='#' className='action_btn'>DISCOVER MORE</a></div>
      </Box>
      <Box>
            <Stack  direction={"row"} spacing={5}mt={7}>
          <Box height={150}  width={400} className='d'   sx={{backgroundColor:'white'}}><StyledTypography align="center" variant="h4">Define</StyledTypography></Box>
          <Box height={150}  width={400} sx={{backgroundColor:'white'}}><StyledTypography align="center" variant="h4">Develope</StyledTypography></Box>
          <Box height={150}  width={400} sx={{ backgroundColor: 'white' }}><StyledTypography align="center" variant="h4">Deliver</StyledTypography></Box>
            </Stack>
  
        </Box>
          
     
                   
       </div>

  )
}

export default Hack
