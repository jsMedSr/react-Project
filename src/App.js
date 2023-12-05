
import { useState ,useRef } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal';
import Form from './components/Layout/Form';
import Button from './components/Layout/Button/Button';


const App = () => {

  const  inputEl =  useRef(null)

  const [showBrothers,setShowBrothers] = useState(true);
  const [filterhdl,setFilterhdl] = useState("")
  const [formData,setFormData] = useState(
    {id : 6,
    name : "",
    age : 10,
    adress : "",
    phone : "",
    type : "br"
    
  })

  var [value,setValue]= useState(
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
  }
]);


const deleteHandler = (e,clickedIdx)=>{
  const newBrothers = value.filter((el , idx)=> el.id !== clickedIdx);
  setValue(newBrothers)
  console.log(newBrothers)
}
const inputhandler = () =>{
  handelBrothers()
}
const onChangeHandeler = (e) =>{
  const key = e.target.id;
  const value = e.target.value;
  setFormData((prevState)=>({  ...prevState, [key] : value   }))
  
console.log(e.target.value)
console.log(formData)

}
const onSubmitHandler = (e) =>{
  e.preventDefault();
console.log(formData)
setValue( value.push(formData)  )

   
  
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
        <Button  fct={ ()=>{  setShowBrothers(!showBrothers) }}> 
        {showBrothers ? "hide brothers":"show brothers"}
        </Button>

      <Filter filtration={filterNames} />

        <div className={showBrothers ? "show" : "hide" } >
          <div style={{margin:"20px"}}>
            <input type='text' placeholder='for test ref' ref={inputEl} onChange={inputhandler} ></input>
          </div>
        <h1>brothers</h1>
        <Card namesList = {handelBrothers()}  deleteFunc={deleteHandler} />

        </div>

      <Form onSubmit={onSubmitHandler}>
      <Form.Controller>
          <label htmlFor='name'>  Name  </label>
          <input type='text' id='name' placeholder='enter name'  onChange={(e)=>{onChangeHandeler(e)}} />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor='age'>  age  </label>
          <input type='text' id='age' placeholder='enter age' onChange={(e)=>{onChangeHandeler(e)}} />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor='adress'>  adress  </label>
          <input type='text' id='adress' placeholder='enter adress'onChange={(e)=>{onChangeHandeler(e)}} />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor='phone'>  phone  </label>
          <input type='text' id='phone' placeholder='enter phone' onChange={(e)=>{onChangeHandeler(e)}}/>
        </Form.Controller>
        <Form.Controller>
          <label htmlFor='type'>  type  </label>
          <input type='text' id='type' placeholder='enter type' onChange={(e)=>{onChangeHandeler(e)}} />
        </Form.Controller>
        <div>
          <Button type='submit' style={{width:"200px"}}>  save </Button>
          <Button type='reset' style={{width:"200px"}}>  Reset </Button>
        </div>
      </Form>
      

    </div>
  );
}

export default App;
