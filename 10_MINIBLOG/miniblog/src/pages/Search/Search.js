import styles from "./Search.module.css";

// hooks
import { useQuery } from "../../hooks/useQuery";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { Link } from "react-router-dom";

import PostDetails from "../../components/PostDetails";

const Search = () => {
  // Obj URLSearchParams
  const query = useQuery();

  // Retorna o valor do parametro "q"
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>Search</h1>
      {posts && posts.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts a partir da sua busca...</p>
          <Link to="/" className="btn btn-dark">
            Voltar
          </Link>
        </div>
      )}
      {posts &&
        posts.map((post) => <PostDetails key={post.id} post={post} />)}
    </div>
  );
};

export default Search;
