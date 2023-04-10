import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, useToast, Box, Text } from "@chakra-ui/react";
import axios from 'axios';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import Navbar from '../components/Navbar';

const PostForm = () => {
    const [user_id, setUserID] = useState('');
    const [content, setContent] = useState('');

    const [updateId,setupdateId]=useState('');
    const [updateContent,setUpdateContent]=useState('')

    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
  
      try {
        const newPost = { user_id, content };
        await axios.post('https://blue-tense-puppy.cyclic.app/posts', newPost);
        toast({
          title: 'Success',
          description: `Post created successfully`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          });
        }catch (error) {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      setUserID("")
      setContent("")
    
      setIsLoading(false);
    };
  
    const handleEditSubmit=async(id)=>{
      if(id){
          try{
              if(updateContent){
                  let payload={content:updateContent}
                  await axios.put(`https://blue-tense-puppy.cyclic.app/posts/${id}`,payload)
                  toast({
                      title: 'Success',
                      description: `User Updated successfully`,
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                      });
      
                  setupdateId("")
                  setUpdateContent("")   
              }else{
                  toast({
                      title: 'Error',
                      description: "Either enter Name or bio to update",
                      status: 'error',
                      duration: 3000,
                      isClosable: true,
                    });
              }
      
          }catch(error){
              toast({
                  title: 'Error',
                  description: error.message,
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                });
          }
      }else{
          toast({
              title: 'Error',
              description: "Enter ID first to proceed",
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
      }
      
    }
  
    return (
        <>
        <Navbar/>
      <Box boxShadow='dark-lg'  p='6' rounded='md' w="80%" ml="10%" mt="5%">
      <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
              <Tab>Create a New Post</Tab>
              <Tab>Update already existing post with ID</Tab>
          </TabList>
      <TabPanels>
          <TabPanel>
              <form onSubmit={handleSubmit}>
                  <FormControl id="user_id" isRequired>
                      <FormLabel>User ID</FormLabel>
                      <Input type="text" value={user_id} onChange={(e) => setUserID(e.target.value)} />
                  </FormControl>
  
                  <FormControl id="content" isRequired>
                      <FormLabel>Content</FormLabel>
                      <Textarea placeholder="Write the content of post" value={content} onChange={(e) => {setContent(e.target.value)  }}/>
                      {/* <Text></Text> */}
                      {/* <Input type="text" value={content} onChange={(e) => setContent(e.target.value)} /> */}
                  </FormControl>
  
  
                  <Button mt={4} colorScheme="facebook" isLoading={isLoading} type="submit">
                      Create Post
                  </Button>
                  <Text mt={4} >Already have a post to update? <br/> Switch to next tab</Text>
              </form>
          </TabPanel>
  
          <TabPanel>
           
              
                  <FormLabel>ID of already existing Post </FormLabel>
                  <Input type="text" value={updateId} onChange={(e) => setupdateId(e.target.value)} />
              
                  <FormLabel>Enter the content of post to update </FormLabel>
                  <Input type="text" value={updateContent} onChange={(e) => setUpdateContent(e.target.value)} />
             
              
              <Button mt={4} colorScheme="facebook" onClick={()=>handleEditSubmit(updateId)} >
                  Edit Post
              </Button>
              
          </TabPanel>
      </TabPanels>
      </Tabs>
      </Box>
      </>
    );
}

export default PostForm
