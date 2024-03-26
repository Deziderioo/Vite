  import style from './App.module.css'
  import Menu from './Components/Menu'

  export default function App() {

    return (
      <div >
        <Menu/>
        <div className={style['wrap-principal']}>
          <h1 className={style.PrimeiraPage}> Trabalho </h1>
        </div>
        </div>
        
    
    )
}