import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Heading,
  Skeleton,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const PostAnalytics = () => {
  const [totalPosts, setTotalPosts] = useState(null);
  const [topLikedPosts, setTopLikedPosts] = useState([]);

  useEffect(() => {
    const fetchPostAnalytics = async () => {
      try {
        const totalPostsResponse = await axios.get("https://blue-tense-puppy.cyclic.app/analytics/posts");
        setTotalPosts(totalPostsResponse.data.count);

        const topLikedPostsResponse = await axios.get(
          "https://blue-tense-puppy.cyclic.app/analytics/posts/top-liked"
        );
        setTopLikedPosts(topLikedPostsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPostAnalytics();
  }, []);

  return (
    <>
    <Navbar/>
    <Box px={[4, 6, 8, 10]} py={[8, 10, 12, 14]}>
      <Heading as="h1" size="xl" mb={8}>
        Post Analytics
      </Heading>

      <Skeleton isLoaded={totalPosts !== null}>
        <Center mb={8}>
          <Stat>
            <StatLabel>Total Posts</StatLabel>
            <StatNumber>{totalPosts}</StatNumber>
            <StatHelpText>as of today</StatHelpText>
          </Stat>
        </Center>
      </Skeleton>

      <Heading as="h2" size="lg" mb={4}>
        Top 5 Most Liked Posts
      </Heading>

      {topLikedPosts.map((post, index) => (
        <Box key={post._id} mb={4}>
          <Text fontSize="xl">
            {index + 1}. {post.content} ({post.likes} likes)
          </Text>
        </Box>
      ))}
    </Box>
    </>
  );
};

export default PostAnalytics;
