export default function Bike({bike}){
    // console.log(bike)
    const style={
        background:'yellow',
        border:'2px solid green',
        margin:'10px',
        padding:'20px'
    }
    return(<div style={style}>
         <p>Brand : {bike.name} </p>
         <p>Price : {bike.price}</p>
         
    </div>)
}