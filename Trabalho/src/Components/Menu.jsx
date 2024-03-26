import style from "./Menu.module.css"

export default function Menu(){
    return(
        <div className={style.wrapMenu}>
            <p className={style.wrapP}>
                <a className={style.wrapA} href={'/'}>Home</a>
            </p>
        </div>
    )
}