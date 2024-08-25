import Image from "next/image";
import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import Nav from "../components/navbar";
import DataFetcher from "../components/fetcher";

export default function Home() {
  return (
    
    <Box
      width="100vw"
      height="100vh"
      bgcolor="#1b1f28"
    >
    <Nav/>
    <Box
      width="100vw"
      height="100vh"
      bgcolor="#1b1f28"
      p={2}
      >
    <Box display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
            boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.20)",
            
            borderRadius:"20px", 
            width:"500px", 
            height:"300px", 
            bgcolor:"#1b1f28"}} >
        <DataFetcher/>
    </Box>
    </Box>
    </Box>
  );
}