import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();

  const { document: post, loading } = useFetchDocument("posts", id)

  console.log(post)

  return (
    <div>
      {loading && <p>Carregando post...</p>}
      {post && (
        <h1>{post.title}</h1>
      )}
    </div>
  );
};

export default Post;
