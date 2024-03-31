import style from "./App.module.css";
import Menu from "./Components/Menu";

export default function App() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <h1 className={style["firstPageHeading"]}>
          Bem vindo a Deziderio Planet
        </h1>
      </div>
    </div>
  );
}
