import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button, Table, Thead, Tbody, Tr, Th, Td, useToast, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const toast = useToast();

  // Fetch all users from backend API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://blue-tense-puppy.cyclic.app/users')
            setUsers(response.data)
            setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
        setLoading(true)
         await axios.delete(`https://blue-tense-puppy.cyclic.app/users/${userId}`);
         const response = await axios.get('https://blue-tense-puppy.cyclic.app/users')
         setUsers(response.data)
         setLoading(false)
        
      toast({
        title: 'Success',
        description: `User Deleted successfully`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
   <Navbar/>
   {loading?<Stack w={["100%","90%","80%"]} ml={["null","5%","10%"]} mt="5%" >
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
    </Stack>:
    <Box boxShadow={["",'','dark-lg']}  p='6' rounded='md' w={["100%","90%","80%"]} ml={["null","5%","10%"]} mt="5%" >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        User List
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th >Name</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user._id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Flex>
                  <Button
                    colorScheme="blue"
                    mr={2}
                    size={["xs","sm","md"]}
                    onClick={()=>{navigate(`/user/${user._id}`)}}
                  >
                    View
                  </Button>
                  
                  <Button
                    colorScheme="green"
                    mr={2}
                    size={["xs","sm","md"]}
                    onClick={()=>{navigate(`/user/${user._id}/edit`)}}
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    size={["xs","sm","md"]}
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
}
    </>
  );
};

export default UserList;