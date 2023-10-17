import {useState} from 'react';

export function Wordcount(){
    const [textarea,wordcounter]=useState("");
    const [counter,setCount]=useState(0);
    var hstyle={
        textAlign:"center"
    }
    const count=(event)=>{
        wordcounter(event.target.value);
        var myarray=event.target.value.split(" ");
        var arrayfilter=myarray.filter(myfunction);
        function myfunction(value){
            return value!=="";
        }
        setCount(arrayfilter.length);
    }
    return(
        <div style={{margin:"auto",width:"40%",marginTop:"50px",padding:"10px",boxShadow:"10px 10px 100px",backgroundColor:"aliceblue"}}>
            <h2 style={hstyle}>Responsive Paragraph Word Counter</h2>
            <form>
                <textarea rows="8" cols="30" value={textarea} style={{width:"100%",boxSizing:"border-box",border:"2px solid black"}}  onChange={count}></textarea>
            </form>
            <p>Word Count:{counter}</p>
        </div>
    )
}