import classes from './PostList.module.scss'
import {useQuery} from "react-query";
import {useState} from "react";
import {IPost} from "../../types/post.types";
import postService from '../../services/postService'
import {SimpleGrid} from "@chakra-ui/react";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  const {} = useQuery("get posts", () => postService.getPosts(), {
    onSuccess({data}) {
      setPosts(data)
    }
  })

  return (
    <div className={classes.PostList}>
      <SimpleGrid minChildWidth='30vw' gap={"2rem"}>
        {
          posts.map(post => <PostCard key={post._id} post={post}/>)
        }
      </SimpleGrid>
    </div>
  )
}

export default PostList
