import { useState } from "react"
import Card  from "./Components/Card.jsx"
import Menu from "./Components/Menu.jsx"
import {apiRMCharacters} from "./api/server"
import { useEffect } from "react"
import style from "./RickAPI.module.css"



export const RickAndMorty = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")
    
    
      useEffect(()=> {
        apiRMCharacters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            if(!response.data.results){
                console.log("Array vazio")
            }
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                console.log("Esta página não contém este personagem")
            }
            if(error.response.status === 500){
                console.log("Erro de conexão com servidor")
            }
            console.error(error)
        })
      }, [page, searchName])
    
        return(
            <div>
                <Menu/>
                <h1 className={style.wrapH1}>Rick and Morty API</h1>
                <div className={style.WrapALL}>
                    <div className={style.wrapInputs}>
                        <input
                            className={style.inptStyle} 
                            type="text" 
                            placeholder="Digite uma página" 
                            value={page}
                            onChange={(event) => setPage(event.target.value)}
                        />
                        <br />
                        <input 
                            className={style.inptStyle} 
                            type="text" 
                            placeholder="Digite um nome" 
                            value={searchName}
                            onChange={(event) => setSearchName(event.target.value)}
                        />
                    </div>
                    <br />
                    <section className={style.Cards}>
                    {data.map((item) => {
                        return(
                            <div key={item.id}>
                            <Card 
                            title={item.name}
                            desc={item.status}
                            imgSrc={item.image}
                            statusColor={item.status === "Alive"
                            ? "Green"
                            : item.status === "Dead"
                            ? "Red"
                            : "Gray"
                        }
                            />
                            
                            {/* <div>
                            {item.status === "Alive"
                            ? <div style={{background: "green", width: "100px"}}>Vivo</div>
                            : item.status === "Dead"
                            ? <div style={{background: "red", width: "100px"}}>Morto</div>
                            : <div style={{background: "grey", width: "100px"}}>desconhecido</div>}
                            </div> */}
                            </div>
                        )
                    })}
                    </section>
                </div>
            </div>
        )
    }