import style from './CardContent.module.css'

function CardContent({itm,deleteFunc}) {
  return (
    <div className={style.cardStyle}  style={{color : itm.type==="fr" ? "red" : "blue"}}>
            <div>Names : {itm.name}</div>
            <div>Age : {itm.age}</div>
            <div>Adress : {itm.adress}</div>
            <div>Phone : {itm.phone}</div>
            <div className={style.btnDel} onClick={(e) => deleteFunc(e,itm.id)}>X</div>
        </div>
  )
}

export default CardContent