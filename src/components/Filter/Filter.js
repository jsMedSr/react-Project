import styleFilter from './Filter.module.css'
import React, { useState } from 'react'

const Filter = ({filtration}) => {

    const [filter,setFilter] = useState("")

   const handelFilter = (e)=>{
    setFilter(e.target.value)
    filtration(e.target.value)
    }



  return (
    <div className={styleFilter.mt}>
                    <input type='text' placeholder='for test filter' value={filter}  onChange={handelFilter} />



    </div>
  )
}

export default  Filter


