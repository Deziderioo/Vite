import Menu from "./Components/Menu";
import style from "./Tecnologias.module.css";

export default function Tec() {
  return (
    <div>
      <Menu />
      <div>
        <h1 className={style.PrimeiraPage}> Tecnologias </h1>
      </div>
    </div>
  );
}
