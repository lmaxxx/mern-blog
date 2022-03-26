import classes from './PostCard.module.scss'
import {FC} from 'react'
import {IPost} from "../../types/post.types";
import {Box, Container, Heading, Image, Text, Icon} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {AiOutlineUser} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {MdDateRange} from 'react-icons/md'

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
          transform: "scale(1.03)"
        }}
        backgroundColor={"gray.50"}
        transition={".2s"}
        borderRadius={"8px"}
        border={"1px solid #F7FAFC"}
      >
        <Image
          objectFit={"cover"}
          objectPosition={"center"}
          h={"300px"}
          src={post.picture}
          w={"100%"}
          borderRadius={"8px"}
          alt={""}
        />
        <Container color={"gray.600"}>
          <Text
            isTruncated
            fontSize={"lg"}
            alignItems={"center"}
            display={"flex"}
          >
            <Icon as={AiOutlineUser}></Icon>
            {post.creator.login}
          </Text>
          <Heading
            color={"gray.700"}
            fontWeight={"normal"}
          >{post.title}</Heading>
          <Text
            alignItems={"center"}
            display={"flex"}
          >
            <Icon as={MdDateRange}></Icon>
            {date}
          </Text>
          <Text
            alignItems={"center"}
            display={"flex"}
            isTruncated
          >
            <Icon as={BiCommentDetail}></Icon>
            {post.comments.length}
          </Text>
        </Container>
      </Box>
    </div>
  )
}

export default PostCard
