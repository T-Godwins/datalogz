import Image from "next/image";
import Nav from "./components/navbar";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    
    <Box
      width="100vw"
      height="100vh"
      bgcolor="#1b1f28"
    >
    <Nav/>
    <Stack
        height="80vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={2}
        gap={2}
        
        >
      <Stack maxWidth="50%" spacing={3}>
        <Typography variant="h2" sx={{fontWeight:"bold"}}>Monitor and Flag <br /> Declining Code Quality</Typography>
        <Typography variant="h5" sx={{color:"#a3a6ad"}}>Tired of unpredictable code quality? Our tool offers automated solutions to identify and address problems before they escalate."</Typography>
        <Button 
              variant="contained"
              sx={{
                maxWidth:"300px",
                fontSize:{xs:"10px", lg:'2rem'},
                  borderRadius: '10px', 
                  bgcolor: '#4a8dfb', // Contrasting background color on hover
                  color: '#ffffff',  // Brighter shade of the original background color
                    "&:hover": {
                      bgcolor: '#4a8dfb',
                      boxShadow: `
                        0 0 8px #81d4fa,   /* Light blue glow */
                        0 0 16px #81d4fa,  /* Light blue glow */
                        0 0 24px #81d4fa   /* Light blue glow */ `
                    }
                  }}
                  ><a href="/Dashboard">Get Started</a> 
            </Button>
      </Stack>

      <a href="/"><img src="landing.png" alt="datalogz logo" style={{height:"500px", borderRadius:"50px"}} /></a>
      
    </Stack>
    </Box>
    
  );
}
