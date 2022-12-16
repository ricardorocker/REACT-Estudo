// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import { FaAngular, FaReact, FaGraduationCap } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre Mim</h1>
      <p>
        Atualmente trabalho como desenvolvedor Front End
        <span className={styles.angular}>
          <FaAngular className={styles.icons} />
          Angular
        </span>,
        desde jan/21, na Itix Tecnologia, remotamente.
      </p>
      <p>Entretanto, comecei a estudar
        <span className={styles.react}>
          <FaReact className={styles.icons} />
          ReactJS </span>
        desde 01/11/22, e estou
        <span style={{ color: "rgb(238, 145, 153)" }}> apaixonado </span>
        por ele, tenho muito anseio em trabalhar com essa linguagem!</p>
      <p>Este projeto consiste em um "blog" feito com
        <span className={styles.react}>
          <FaReact className={styles.icons} />
          React </span>
        no front-end e
        <span className={styles.firebase}>
          <SiFirebase className={styles.icons} />
          Firebase </span>
        no back-end.</p>
      <p>Sou pós graduado em
        <span className={styles.graduation}>
          <FaGraduationCap className={styles.icons} />
          Engenharia de Software </span>.
      </p>
      {/* <Link to="/post/create" className="btn">
        Criar post
      </Link> */}
      <div className={styles.social_media}>
        <a href="https://github.com/ricardorocker" target="_blank" rel="noopener noreferrer" className="btn">
        GitHub
        </a>
        <a href="https://www.linkedin.com/in/ricardo-s-rocker" target="_blank" rel="noopener noreferrer" className="btn">
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default About;
