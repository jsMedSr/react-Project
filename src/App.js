
import { useState ,useRef } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal';
import Form from './components/Layout/Form';


const App = () => {

  const  inputEl =  useRef(null)

  const [showBrothers,setShowBrothers] = useState(true);
  const [filterhdl,setFilterhdl] = useState("")


  const [value,setValue]= useState(
  [{
  id : 0,
    name : "aissam",
  age : 26,
  adress : "temara",
  phone : "02655658",
  type : "br"
  },
  {id : 1,
    name : "youssef",
  age : 35,
  adress : "oulad malk",
  phone : "0156885658",
  type : "fr"

  },
  {id : 2,
    name : "simed",
  age : 33,
  adress : "bouskoura",
  phone : "045555658",
  type : "fr"
  },
  {id : 3,
  name : "bader",
  age : 20,
  adress : "beni drar",
  phone : "0156885658",
  type : "br"

  },
  {id : 4,
  name : "med",
  age : 33,
  adress : "bouskoura",
  phone : "045555658",
  type : "br"
  },
  {id : 5,
  name : "hicham",
  age : 37,
  adress : "bouskoura",
  phone : "02655658",
  type : "fr"
  },
  
]);


const deleteHandler = (e,clickedIdx)=>{
  const newBrothers = value.filter((el , idx)=> el.id !== clickedIdx);
  setValue(newBrothers)
  console.log(newBrothers)
}
const inputhandler = () =>{
  handelBrothers()
}

const filterNames = (name)=>{
  setFilterhdl(name)

}

const handelBrothers = () =>{
  if(filterhdl.length !== 0){
    console.log( value.filter( (el)=> el.name.includes(filterhdl)   ))
    return  value.filter( (el)=> el.name.includes(filterhdl)   );
  }

  return value;
}
  return (
   
       <div className="App ">
        <button style={{marginTop : "25px"}} onClick={ ()=>{  setShowBrothers(!showBrothers) }}> 
        {showBrothers ? "hide brothers":"show brothers"}
        </button>


      <Filter filtration={filterNames} />

        <div className={showBrothers ? "show" : "hide" } >
          <div style={{margin:"20px"}}>
            <input type='text' placeholder='for test ref' ref={inputEl} onChange={inputhandler} ></input>
          </div>
        <h1>brothers</h1>
        <Card namesList = {handelBrothers()}  deleteFunc={deleteHandler} />

        </div>

      <Form>
        <Form.Controller>
          <label htmlFor='name'>  Name  </label>
     
          <input type='name'  placeholder='enter name' />
        </Form.Controller>
      </Form>
      

    </div>
  );
}

export default App;
