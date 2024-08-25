import Image from "next/image";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Nav from "../components/navbar";

export default function Home() {
  return (
    
    <Box
      width="100vw"
      height="100vh"
      bgcolor="#1b1f28"
    >
    <Nav/>
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
    <Stack 
      p={10}
      width="70%"
      display="flex"
      justifyContent="space-between"
      flexDirection="row" 
      spacing={4} 
      alignItems="center">
      <Stack direction="column" alignItems="center"  spacing={2}>
        <Avatar alt="Samuel Ou" src="/path/to/samuel-headshot.jpg" sx={{ width: 100, height: 100 }} />
        <Typography variant="body1">
          <a href="https://samuel-ou.com/" target="_blank" rel="noopener noreferrer">
            Samuel Ou
          </a>
        </Typography>
      </Stack>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Avatar alt="Mark Tocino" src="/path/to/mark-headshot.jpg" sx={{ width: 100, height: 100 }} />
        <Typography variant="body1">
          <a href="https://marktocinoportolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            Mark Tocino
          </a>
        </Typography>
      </Stack>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Avatar alt="Godwin" src="/path/to/godwin-headshot.jpg" sx={{ width: 100, height: 100 }} />
        <Typography variant="body1">
          <a href="https://godwins.site" target="_blank" rel="noopener noreferrer">
            Godwins Tuyishime
          </a>
        </Typography>
      </Stack>
    </Stack>
    </Box>
    </Box>
  );
}