import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  /* // My way before watch 
  const { auth } = useAuthentication();
  const uid = auth.currentUser.uid;
  */

  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  console.log(posts);

  if (loading) {
    return <p>Carregando posts...</p>
  }

  const removePost = (id) => {

  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
      {posts && (posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/post/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div>
            <span>Título</span>
            <span>Ações</span>
          </div>

          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button className="btn btn-outline btn-danger" onClick={() => removePost(post.id)}>
                Excluir
              </button>
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default Dashboard;
