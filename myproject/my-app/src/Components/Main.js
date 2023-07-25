import react, { useState }from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search+ '&key=AIzaSyC0brJ4pIcUhKtmEBwbCLEC7Q5V_LvRi1M')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Today a reader, tomorrow a leader<br/>– Margaret Fuller</h1>
                </div>
                <div className="row2">
                    <h2>Type a book name</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter the Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyUp={searchBook}/>
                        <button><i class="fa fa-search"></i></button>
                    </div>
                    <img src="./images/93.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={ bookData }/>
              }  
            </div>
        </>
    )
}
export default Main;