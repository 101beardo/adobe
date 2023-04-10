import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Table, Thead, Tr, Th, Td, Stack } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const UserAnalytics = () => {
  const [users, setUsers] = useState([]);
  const [topUsers,setTopUsers]=useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('https://blue-tense-puppy.cyclic.app/analytics/users')
      .then(response => {
        setUsers(response.data.count);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get('https://blue-tense-puppy.cyclic.app/analytics/users/top-active')
      .then(response => {
        setTopUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 return (
    <>
    <Navbar/>
    {loading?
    <Stack w={["100%","90%","80%"]} ml={["null","5%","10%"]} mt="5%" >
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
:
        <Box boxShadow={["",'','dark-lg']}  p='6' rounded='md' w={["100%","90%","80%"]} ml={["null","5%","10%"]} mt="5%" >
          <Heading as="h1" size="lg" mb="4">User Analytics</Heading>
          <Text>Total Number of Users: {users}</Text>

          <Heading mt="20px" as="h1" size="md" mb="4">The top 5 most active users</Heading>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Table size="md">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Post Count</Th>
                </Tr>
              </Thead>
              <tbody>
                {topUsers.map(user=>{
                    return(
                        <Tr key={user._id}>
                        <Td>{user.name}</Td>
                        <Td>{user.email}</Td>
                        <Td>{user.post_count}</Td>
                        </Tr>
                    )
                })}
              </tbody>
            </Table>
          </Box>
        </Box>
}
        </>
      );
}

export default UserAnalytics;
