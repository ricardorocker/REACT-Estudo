import styles from "./Search.module.css";

// hooks
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  return <div>
    <h1>Search</h1>
    <p>{search}</p>
  </div>;
};

export default Search;
