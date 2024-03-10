import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Bike from './Bike'
import PhoneStore from './PhoneStore'

function App() {
  
const actors =["John", "Willsmith", "Max", "Devid", "Karolin"]
const bikes = [
  {id:1, name:'Yamaha', price:20000},
  {id:2, name:'Suzuki', price:50000},
  {id:3, name:'Royel Infild', price:30000},
  {id:4, name:'KTM', price:40000},
  {id:5, name:'Runner', price:10000}

]

const phones=[
  {id:1, name:'samsung', price:'20k'},
  {id:2, name:'apple', price:'50k'},
  {id:3, name:'realme', price:'13k'},
  {id:4, name:'techno', price:'17k'},
  {id:5, name:'oppo', price:'10k'},
]
  return (
    <>
      <h1>Welcome to my webpage</h1>
      <PhoneStore phones={phones}></PhoneStore>
      {
        bikes.map(bike => <Bike key={bike.id} bike={bike}></Bike>)
      }
      {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      <Todo task="Jsx" istry={true}></Todo>
      <Todo task="core concepts" istry={false}></Todo>
      <Todo task="try react or jsx" istry={true}></Todo>
      <Persion></Persion>
      <Student names='Riaz' age='19'></Student>
      <Student names='Rejuyan' age='18'></Student>
      <Student names='Raju' age='20'></Student>
      <Student ></Student>
    </>
  )
}

function Persion(){
  const persion = {name:"Riaz", age:19}
  return(
    <div>
      <h3>Hello, I'm {persion.name} and I'm {persion.age} years old.</h3>
    </div>
  )
}

function Student ({names='emty', age='emty'}){
  return(
    <div className='student'>
      <h2>This is a student</h2>
      <p>Name:{names} </p>
      <p>Age: {age} </p>
    </div>
  )
}

export default App
