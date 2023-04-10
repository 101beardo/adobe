import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Text,
  Spacer,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const toast = useToast();
  const [loading,isLoading]=useState(false)
  const navigate=useNavigate()

  useEffect(() => {
    isLoading(true)
    axios.get('https://blue-tense-puppy.cyclic.app/posts').then((response) => {
      setPosts(response.data);
      isLoading(false)
    });
  }, []);

  const handleLike = async(postId) => {
    try{
        isLoading(true)
       await axios.post(`https://blue-tense-puppy.cyclic.app/posts/${postId}/like`)
       await axios.get('https://blue-tense-puppy.cyclic.app/posts').then((response) => {
       setPosts(response.data)
       isLoading(false)
    })
    }catch(err){
        console.log(err)
    }

  };

  const handleUnlike =async (postId) => {
    try{
        isLoading(true)
        await axios.post(`https://blue-tense-puppy.cyclic.app/posts/${postId}/unlike`)
        await axios.get('https://blue-tense-puppy.cyclic.app/posts').then((response) => {
        setPosts(response.data)
        isLoading(false)
     })
     }catch(err){
         console.log(err)
     }
  };

  const handleDelete = async(postId) => {
    try {
        isLoading(true)
        await axios.delete(`https://blue-tense-puppy.cyclic.app/posts/${postId}`);
        const response = await axios.get('https://blue-tense-puppy.cyclic.app/posts')
        setPosts(response.data)
        isLoading(false)
       
     toast({
       title: 'Success',
       description: `Post Deleted successfully`,
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
    {loading?<Box>Loading...</Box>:
    <Box  boxShadow={["",'','dark-lg']}  p='6' rounded='md' w={["100%","90%","80%"]} ml={["null","5%","10%"]} mt="5%" >
      <Heading size="lg" mb={4}>
        Posts
      </Heading>
      <List spacing={3}>
        {posts.map((post) => (
          <ListItem rounded={"lg"} boxShadow="lg" p="20px" key={post._id}>
            <Flex alignItems="center">
              <Box  mt="10px" flex="1">
                <Heading fontSize={["10px","15px","20px"]}>Post ID</Heading>
                <Text fontSize={["10px","15px","20px"]} >{post._id}</Text>
                <Heading fontSize={["10px","15px","20px"]}>By User ID</Heading>
                <Text fontSize={["10px","15px","20px"]} >{post.user_id}</Text>
                <Heading fontSize={["10px","15px","20px"]}>Content</Heading>
                <Text fontSize={["10px","15px","20px"]} >{post.content}</Text>
              </Box>
              <Spacer />
              <Box>
                <Button size={["xs","xs","sm"]} mr={2} colorScheme="green" onClick={() => handleLike(post._id)}>
                  Like ({post.likes})
                </Button>
                <Button
                  size={["xs","xs","sm"]}
                  mr={2}
                  onClick={() => handleUnlike(post._id)}
                >
                  Unlike
                </Button>
                <Button size={["xs","xs","sm"]} mr={2} colorScheme="blue"
                onClick={()=>{navigate(`/post/${post._id}/edit`)}}
                >
                  Edit
                </Button>
                <Button
                  size={["xs","xs","sm"]}
                  colorScheme="red"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </Button>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
}
    </>
  );
};

export default PostList;

