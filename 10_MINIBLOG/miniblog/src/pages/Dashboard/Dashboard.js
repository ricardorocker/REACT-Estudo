import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const posts = [];

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/post/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts...</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
