import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();

  const { document: post, loading } = useFetchDocument("posts", id)

  console.log(post)

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <div>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.image} />
          <div className={styles.description}>{post.body}</div>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>{tag}
              </p>
            ))}
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Post;
