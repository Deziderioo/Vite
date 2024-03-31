import style from "./CalcMedia.module.css";
import Menu from "./Components/Menu";
import { useEffect, useState } from "react";

export const Calc = () => {
  const [num1, setN1] = useState();
  const [num2, setN2] = useState();
  const [num3, setN3] = useState();
  const [num4, setN4] = useState();
  const [num5, setN5] = useState();
  const [Media, setMedia] = useState();

  const handleCalc = () => {
    setMedia(
      (parseFloat(num1) +
        parseFloat(num2) +
        parseFloat(num3) +
        parseFloat(num4) +
        parseFloat(num5)) /
        5
    );
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <h1 className={style.PrimeiraPage}>Calcule aqui sua média!</h1>
        <div className={style.InputsCalc}>
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite a primeira Nota"
            value={num1}
            onChange={(e) => setN1(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite a segunda Nota"
            value={num2}
            onChange={(e) => setN2(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite a Terceira Nota"
            value={num3}
            onChange={(e) => setN3(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite a Quarta Nota"
            value={num4}
            onChange={(e) => setN4(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite a Quinta Nota"
            value={num5}
            onChange={(e) => setN5(e.target.value)}
          />
        </div>
        <div className={style.wrapCalcMedia}>
          <h1> MÉDIA</h1>
          {!isNaN(Media) && (
            <p className={style.mediaStyle}>{Media.toFixed(2)}</p>
          )}
          <button className={style.btnStyle} onClick={handleCalc}>
            Calcular Media
          </button>
        </div>
      </div>
    </div>
  );
};
