import Menu from "./Components/Menu";
import Card from "./Components/Card.jsx";
import style from "./Tecnologias.module.css";

import { useState } from "react";

import reactImg from "./assets/ReactIcon.png";
import reactRouterImg from "./assets/ReactRouter.png";
import Axios from "./assets/Axios.png";
import Vite from "./assets/ViteIcon.png";
import Npm from "./assets/NpmIcon.png";

export const Tecnologias = () => {
  const [show, setShow] = useState("all");

  return (
    <>
      <Menu />
      <section>
        <h1 className={style.PrimeiraPage}> Tecnologias </h1>
        <div className={style.btnstyle}>
          <button className={style.btnTec} onClick={() => setShow("react")}>
            REACT
          </button>
          <button
            className={style.btnTec}
            onClick={() => setShow("reactRouter")}
          >
            REACT ROUTER
          </button>
          <button className={style.btnTec} onClick={() => setShow("Axios")}>
            AXIOS
          </button>
          <button className={style.btnTec} onClick={() => setShow("Vite")}>
            VITE
          </button>
          <button className={style.btnTec} onClick={() => setShow("Npm")}>
            NPM
          </button>
          <button className={style.btnTec} onClick={() => setShow("all")}>
            ALL
          </button>
        </div>
        <div className={style.WrapCards}>
          {show === "react" && (
            <Card
              title="REACT"
              imgSrc={reactImg}
              desc="React é uma poderosa biblioteca JavaScript que simplifica a criação de interfaces de usuário interativas e reativas para aplicativos web modernos."
            />
          )}
          {show === "reactRouter" && (
            <Card
              title="React Router"
              imgSrc={reactRouterImg}
              desc="
              é uma excelente opção para gerenciamento de rotas em projetos React, permitindo uma navegação mais fluida e sem a necessidade de fazer novas solicitações ao servidor."
            />
          )}
          {show === "Axios" && (
            <Card
              title="AXIOS"
              imgSrc={Axios}
              desc="O Axios é uma biblioteca JavaScript que simplifica o processo de fazer requisições HTTP a endpoints de API, facilitando a comunicação entre um aplicativo e um servidor de forma assíncrona."
            />
          )}
          {show === "Vite" && (
            <Card
              title="Vite"
              imgSrc={Vite}
              desc="Vite melhora o tempo de inicio de servidor de desenvolvimento ao primeiro dividir os módulos em uma aplicação em duas categorias: dependências e código-fonte."
            />
          )}
          {show === "Npm" && (
            <Card
              title="NPM"
              imgSrc={Npm}
              desc="
              O npm é o gerenciador de pacotes padrão do Node.js. Ele simplifica a gestão de dependências e oferece ferramentas úteis para o desenvolvimento de projetos JavaScript."
            />
          )}
          {show === "all" && (
            <>
              <Card title="REACT" imgSrc={reactImg} desc="Sou o React Router" />
              <Card
                title="React Router"
                imgSrc={reactRouterImg}
                desc="Sou o React Router"
              />
              <Card title="AXIOS" imgSrc={Axios} desc="Sou o Axios" />
              <Card title="Vite" imgSrc={Vite} desc="Sou o Vite" />
              <Card title="NPM" imgSrc={Npm} desc="Sou o NPM" />
            </>
          )}
        </div>
      </section>
    </>
  );
};
