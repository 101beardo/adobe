import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, useToast, Box, Text } from "@chakra-ui/react";
import axios from 'axios';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '../components/Navbar';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [updateId,setupdateId]=useState('');
  const [updateName,setUpdateName]=useState('')
  const [updateBio,setUpdateBio]=useState('')
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const newUser = { name, email, bio };
      await axios.post('https://blue-tense-puppy.cyclic.app/users', newUser);
      toast({
        title: 'Success',
        description: `User created successfully`,
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
    setName("")
    setEmail("")
    setBio("")
    setIsLoading(false);
  };

  const handleEditSubmit=async(id)=>{
    if(id){
        try{
            if(updateName || updateBio){
                let payload
                if(updateName && updateBio ){
                    payload={name:updateName,bio:updateBio}
                }else if(updateBio){
                    payload={bio:updateBio}
                }else{
                    payload={name:updateName}
                }
                await axios.put(`https://blue-tense-puppy.cyclic.app/users/${id}`,payload)
                toast({
                    title: 'Success',
                    description: `User Updated successfully`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    });
    
                setupdateId("")
                setUpdateName("")
                setUpdateBio("")
                
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
            <Tab>Create a New User</Tab>
            <Tab>Update already existing user with ID</Tab>
        </TabList>
    <TabPanels>
        <TabPanel>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl id="bio"isRequired>
                    <FormLabel>Bio</FormLabel>
                    <Input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
                </FormControl>

                <Button mt={4} colorScheme="facebook" isLoading={isLoading} type="submit">
                    Create User
                </Button>
                <Text mt={4} >Already a User with existing ID? <br/> Switch to next tab</Text>
            </form>
        </TabPanel>

        <TabPanel>
         
            
                <FormLabel>ID of already existing User </FormLabel>
                <Input type="text" value={updateId} onChange={(e) => setupdateId(e.target.value)} />
            
                <FormLabel>Enter the name to update </FormLabel>
                <Input type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
          
            
          
            <FormLabel>Enter the bio to update </FormLabel>
            <Input type="text" value={updateBio} onChange={(e) => setUpdateBio(e.target.value)} />
           
            
            <Button mt={4} colorScheme="facebook" onClick={()=>handleEditSubmit(updateId)} >
                Edit User
            </Button>
            
        </TabPanel>
    </TabPanels>
    </Tabs>
    </Box>
    </>
  );
};

export default UserForm;
