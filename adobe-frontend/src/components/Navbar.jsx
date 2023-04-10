import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-around"} fontSize={["10px","15px","20px"]} p={4} bg="blue.400" color="white">

          <Link to="/">Home</Link>
       
          <Link to="/userform">Users</Link>

          <Link to="/userlist">All Users</Link>
        
          <Link to="/postform">Posts</Link>

          <Link to="/postlist">All Posts</Link>
       
          <Link to="/useranalytics">User Analytics</Link>
        
          <Link to="/postanalytics">Post Analytics</Link>
        
    </Flex>
  )
}

export default Navbar
