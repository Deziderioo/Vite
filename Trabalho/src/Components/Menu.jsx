import style from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={style.wrapMenu}>
      <div>
        <p>
          <a href={"/"}>Home</a>
        </p>
        <p>
          <a href={"/Tecnologias"}>Tecnologias</a>
        </p>
        <p>
          <a href={"/Media"}>Calcule</a>
        </p>
        <p>
          <a href={"/Cont"}>Contato</a>
        </p>
      </div>
    </div>
  );
}
