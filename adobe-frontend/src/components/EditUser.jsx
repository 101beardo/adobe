import { Box, Button, Heading, Input, Stack, StackDivider, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import Navbar from './Navbar'

const EditUser = () => {
    const {id}=useParams()
    const [user,setUser]=useState({})
    const [newName,setNewName]=useState("")
    const [newBio,setNewBio]=useState("")
    const [loading,setLoading]=useState(false)
    
    const toast = useToast();
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchUser = async () => {

            try {
                setLoading(true)
              const response = await axios.get(`https://blue-tense-puppy.cyclic.app/users/${id}`)
                  setUser(response.data)
                  setNewName(response.data.name)
                  setNewBio(response.data.bio)
                  setLoading(false)
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchUser();
    },[])
    const handleEditSubmit=async()=>{
        const payload={name:newName,bio:newBio}
        await axios.put(`https://blue-tense-puppy.cyclic.app/users/${id}`,payload)
        toast({
            title: 'Success',
            description: `User Updated successfully, Redirecting to UserLists`,
            status: 'success',
            duration: 3000,
            isClosable: true,
            })
            navigate('/userlist')
    }
  return (
    <>
    <Navbar/>
    {loading?<Box>Loading...</Box>:
    <Box  boxShadow='dark-lg'  p='6' rounded='md' w="80%" ml="10%" mt="5%" >
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
        <Input mt='2' value={newName} onChange={(e) => setNewName(e.target.value)} />
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          User Bio
        </Heading>
        <Input mt='2' value={newBio} onChange={(e) => setNewBio(e.target.value)} />
      </Box>
      <Button mt={4} colorScheme="facebook" onClick={handleEditSubmit} >
                Update User Deatils
      </Button>
    </Stack>
  </CardBody>
</Card>
    </Box>
  }
  </>
  )
}

export default EditUser
