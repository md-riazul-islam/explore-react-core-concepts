import Phone from "./Phone";

export default function PhoneStore({phones}){
    return(
        <div>
            <h3>Number of phone: {phones.length} </h3>
            {
                phones.map(phone => <Phone phone={phone} key={phone.id}></Phone>)
            }
        </div>
    )
}