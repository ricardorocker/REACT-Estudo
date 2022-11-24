import styles from "./CreatePost.module.css";

import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h1>Criar post</h1>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            placeholder="Pense num bom título..."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            placeholder="Insira uma imagem que representa seu post"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="content"
            cols="30"
            rows="4"
            placeholder="Insira o conteúdo do post"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            placeholder="Insira as tags separadas por vírgula"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
