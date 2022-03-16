import classes from './PostCard.module.scss'
import {FC} from 'react'
import {IPost} from "../../types/post.types";
import {Box, Container, Heading, Image, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

interface PropsType {
  post: IPost
}

const PostCard: FC<PropsType> = ({post}) => {
  const date = new Date(post.creationDate)
    .toLocaleDateString('en-us', {weekday: "long", year: "numeric", month: "short", day: "numeric"})
  const navigate = useNavigate()

  const goToPostPage = (id: string) => {
    navigate(`/${id}`)
  }

  return (
    <div className={classes.PostCard} onClick={goToPostPage.bind(this, post._id)}>
      <Box
        _hover={{
          boxShadow: "0px 2px 6px rgba(0, 0, 0, .35)"
        }}
        boxShadow={"0px 2px 6px rgba(0, 0, 0, .2)"}
        transition={".2s"}
      >
        <Image
          objectFit={"cover"}
          objectPosition={"center"}
          h={"300px"}
          src={post.picture}
          w={"100%"}
          alt={""}
        />
        <Container borderTop={"0.1px solid rgba(0, 0, 0, .2)"} p={"1rem"}>
          <Heading
            textAlign={"center"}
            color={"gray.800"}
            fontWeight={"normal"}
          >{post.title}</Heading>
          <Text
            isTruncated
            textAlign={"center"}
            fontSize={"xl"}
            p={".5rem 0"}
            color={"red.500"}
          >By {post.creator.login}</Text>
          <Text textAlign={"center"}>{date}</Text>
          <Text textAlign={"center"}>Comments {post.comments.length}</Text>
        </Container>
      </Box>
    </div>
  )
}

export default PostCard
