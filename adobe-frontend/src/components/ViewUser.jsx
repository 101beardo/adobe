import axios from 'axios'
import { Box, Button, Heading, Input, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'


const ViewUser = () => {
    const {id}=useParams()
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchUser = async () => {
            setIsLoading(true)
            try {
              const response = await axios.get(`https://blue-tense-puppy.cyclic.app/users/${id}`)
                  setUser(response.data)
                  setIsLoading(false)
                  
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchUser();
    },[])
    console.log(user)
  return (
    <>
    <Navbar/>
    {isLoading?<Box>Loading...</Box>:
    <Box  boxShadow='dark-lg'  rounded='md' w="80%" ml="10%" mt="1%" >
    <Card>
<CardHeader>
  <Heading size='md'>User Details</Heading>
</CardHeader>

<CardBody>
  <Stack divider={<StackDivider />} spacing='4'>
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        User ID
      </Heading>
      <Text pt='2' fontSize='sm'>
        {user._id}
      </Text>
    </Box>
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        User Name
      </Heading>
      <Text pt='2' fontSize='sm'>
          {user.name}
        </Text>
    </Box>
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        User Email
      </Heading>
      <Text pt='2' fontSize='sm'>
          {user.email}
        </Text>
    </Box>
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        User Bio
      </Heading>
      <Text pt='2' fontSize='sm'>
          {user.bio}
        </Text>
    </Box>
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        User Created At
      </Heading>
      <Text pt='2' fontSize='sm'>
          {user.created_at}
        </Text>
    </Box>
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        User Updated At
      </Heading>
      <Text pt='2' fontSize='sm'>
          {user.updated_at}
        </Text>
    </Box>
    <Button mt={2} colorScheme="facebook" onClick={()=>{navigate(`/userlist`)}} >
                Go back to Users List
    </Button>
  </Stack>
</CardBody>
</Card>
  </Box>
}
  </>
  )
}

export default ViewUser
