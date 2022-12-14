import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  /* // My way before watch 
  const { auth } = useAuthentication();
  const uid = auth.currentUser.uid;
  */

  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando posts...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
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
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>

          {posts.map((post) => (
            <div key={post.id} className={styles.post_row}>
              <p>{post.title}</p>
              <div>
                <Link to={`/post/${post.id}`} className="btn btn-outline">
                  Ver
                </Link>
                <Link to={`/post/edit/${post.id}`} className="btn btn-outline">
                  Editar
                </Link>
                <button className="btn btn-outline btn-danger" onClick={() => deleteDocument(post.id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default Dashboard;
