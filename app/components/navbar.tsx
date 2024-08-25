"use client";
import Image from "next/image";
// import React, {useState} from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { 
  Button, 
  Container, 
//   Head, 
  Box, 
  Stack, 
  AppBar, 
  Typography,
  IconButton,
  Menu,
  MenuItem,
//   MenuIcon,
  useMediaQuery
  } from "@mui/material";
export default function Nav() {
  

  // const isMobile = useMediaQuery('(max-width:600px)');
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <AppBar 
        position="sticky" 
        sx={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 6px 6px rgba(0, 0, 0, 0.15)" }}
        p={0}
    >

      <SignedOut>
        <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              gap={2}
              bgcolor="#1b1f28"
        >
          <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={10}
          > 
          <Button
            sx={{
                '&:hover': {
                backgroundColor: 'transparent', // Prevent color change on hover
                transform: 'translateX(5px)',  // Slight upward movement on hover
                },
                transition: 'transform 0.2s ease-in-out', // Smooth transition for the movement
            }}
            >
            <a href="/"><img src="datalogz-logo.png" alt="datalogz logo" style={{height:"60px", borderRadius:"50px"}} /></a>
            <Typography variant="h4" color="white" sx={{fontSize:{xs:"0px", lg:"2rem"}}}>
                <a href="/">DATALOGZ</a>
            </Typography>
            </Button>
            <Stack 
                width="150px"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                >
            <a href="/">Home</a>
            <a href="/Team">Team</a>
            </Stack>
          </Stack>
            
          <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
          >  
            <Button 
              variant="contained"
              sx={{
                fontSize:{xs:"10px", lg:'1rem'},
                  borderRadius: '10px', 
                    color: "#4a8dfb",  // Brighter shade of the original color
                    bgcolor: "#2b3a60",  // Brighter shade of the original background color
                    "&:hover": {
                      bgcolor: '#4a8dfb', // Contrasting background color on hover
                      color: '#ffffff',   // White text on hover for good contrast
                    }
                  }}
                  ><a href="/">BOOK DEMO</a> 
            </Button>
            <Button 
              variant="contained"
              sx={{
                  fontSize:{xs:"10px", lg:'1rem'},
                  borderRadius: '50px', 
                  bgcolor:"black", 
                  color:"white",
                  "&:hover": {
                      bgcolor: 'rgba(2, 2, 2, 0.7)',
                      color: 'white',}
                  }}
                  ><SignInButton />
            </Button>
            
          </Stack>
        </Stack>
      </SignedOut>

      <SignedIn>
      <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              gap={2}
              bgcolor="#1b1f28"
        >
          <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
          > 
          <Button
            sx={{
                '&:hover': {
                backgroundColor: 'transparent', // Prevent color change on hover
                transform: 'translateX(5px)',  // Slight upward movement on hover
                },
                transition: 'transform 0.2s ease-in-out', // Smooth transition for the movement
            }}
            >
            <a href="/"><img src="datalogz-logo.png" alt="datalogz logo" style={{height:"60px", borderRadius:"50px"}} /></a>
            <Typography variant="h4" color="white" sx={{fontSize:{xs:"0px", lg:"2rem"}}}>
                <a href="/">DATALOGZ</a>
            </Typography>
            </Button>
          </Stack>
          <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
              p={2}
          >  
            <Button 
              variant="contained"
              sx={{
                fontSize:{xs:"10px", lg:'1rem'},
                  borderRadius: '10px', 
                    color: "#4a8dfb",  // Brighter shade of the original color
                    bgcolor: "#2b3a60",  // Brighter shade of the original background color
                    "&:hover": {
                      bgcolor: '#4a8dfb', // Contrasting background color on hover
                      color: '#ffffff',   // White text on hover for good contrast
                    }
                  }}
                  ><a href="/">BOOK DEMO</a> 
            </Button>
            
            <UserButton />
            
          </Stack>
        </Stack>
          </SignedIn>

          {/* {isMobile ? (
          <div>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Button color="primary">Button</Button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Button color="primary">Button</Button>
        )} */}

    </AppBar>
  );
}