import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <Box >
    <Navbar/>

    <Text w="80%" ml="10%" mt="80px">This is Home of a simple social media platform consisting of a backend
API and a frontend UI, and analytics pages. The platform also supports creating,
reading, updating, and deleting operations for user profiles and posts. In addition,
users can "like" and "unlike" posts. The analytics pages displays
insights on user engagement and content popularity.<br/>
<br/><li>Use the Navigation bar above to navigate between the main application pages and the analytics
pages.</li><br/>

    <li>Axios library is used in this project to make HTTP requests to the API endpoints.</li>
    <br/><li>Most of the errors are gracefully handled and users are constantly informed of the status of their requests
    through loading indicators, success messages, and error messages.</li><br/>
    <li>Styling to the frontend UI is done using CSS framework Chakra UI</li>

</Text>

  </Box>
  )
}

export default HomePage
