import { Box, Button, Heading, Input, Stack, StackDivider, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

const EditPost = () => {
    const {id}=useParams()
    const [post,setPost]=useState({})
    const [newContent,setNewContent]=useState("")
    const toast = useToast();
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchPost = async () => {
            try {
              const response = await axios.get(`https://blue-tense-puppy.cyclic.app/posts/${id}`)
                  setPost(response.data)
                  setNewContent(response.data.content)
            } catch (error) {
              console.error(error);
            }
          };
          fetchPost();
    },[])
    const handleEditSubmit=async()=>{
        const payload={content:newContent}
        await axios.put(`https://blue-tense-puppy.cyclic.app/posts/${id}`,payload)
        toast({
            title: 'Success',
            description: `Post Updated successfully, Redirecting to PostLists`,
            status: 'success',
            duration: 3000,
            isClosable: true,
            })
            navigate('/postlist')
    }
  return (
    <Box  boxShadow='dark-lg'  p='6' rounded='md' w="80%" ml="10%" mt="5%" >
      <Card>
  <CardHeader>
    <Heading size='md'>Post Details</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Post ID
        </Heading>
        <Text pt='2' fontSize='sm'>
          {post._id}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Post Content
        </Heading>
        <Textarea placeholder="Write the content of post" mt='2' value={newContent} onChange={(e) => setNewContent(e.target.value)} />
      </Box>
      
      <Button mt={4} colorScheme="facebook" onClick={handleEditSubmit} >
                Update Post Content
      </Button>
    </Stack>
  </CardBody>
</Card>
    </Box>
  )
}

export default EditPost
