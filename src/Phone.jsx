import './Phone.css'
export default function Phone({phone}){
    console.log(phone)
    const{name, price} =  phone
    return(
        <div className='phone'>
            <h4>Phone Name: {name}</h4>
            <h5>Phone Price: {price}</h5>
        </div>
    )
}