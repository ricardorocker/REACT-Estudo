// import Styles from "./EditPost.module.css";
import styles from "./EditPost.module.css";

import { useNavigate, useParams } from "react-router-dom";

import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useEffect, useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const EditPost = () => {

    const { id } = useParams();

    const { document: post } = useFetchDocument("posts", id);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setImage(post.image);
            setBody(post.body);

            // const textTags = post.tagsArray.join(", ");

            setTags(post.tagsArray);
        }
    }, [post])

    // ------- MY TRY -------
    // const [postReceived, setPostReceived] = useState([]);
    // const [hasData, setHasData] = useState(false);

    // if (post && postReceived.length === 0) {
    //     setPostReceived(post.tagsArray);
    //     setHasData(true)
    // }

    // useEffect(() => {
    //     if (!hasData) return;

    //     function setPost() {
    //         setTitle(post.title);
    //         setImage(post.image);
    //         setBody(post.body);
    //         setTags(post.tagsArray);
    //     }
    //     setPost();
    // }, [hasData]);

    const { user } = useAuthValue();

    const { insertDocument, response } = useInsertDocument("posts");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError("");

        // validate image
        try {
            new URL(image);
        } catch (error) {
            return setFormError("A imagem precisa ser uma URL.");
        }

        // create array tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        // check all values
        if (!title || !image || !body || !tags) {
            setFormError("Por favor, preencha todos os campos!");
        }

        if (formError) return;

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        // redirect to home page
        navigate("/");
    };


    return (
        <>
            {post && (
                <div className={styles.edit_post}>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como desejar</p>
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
                        <div className={styles.preview_title}>Preview da imagem atual:</div>
                        <img className={styles.preview_image} src={post.image} alt={post.image} />
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
                        {!response.loading ? (
                            <button type="submit" className="btn">
                                Editar
                            </button>
                        ) : (
                            <button className="btn" disabled>
                                Aguarde...
                            </button>
                        )}
                        {response.error && <p className="error">{response.error}</p>}
                        {formError && <p className="error">{formError}</p>}
                    </form>
                </div>
            )}
        </>
    );
}

export default EditPost