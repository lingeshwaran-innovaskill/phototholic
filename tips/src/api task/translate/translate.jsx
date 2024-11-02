import axios from "axios";
import { useEffect, useState } from "react";



function Translate() {
    const[option,setOption]=useState([]);
    const [from,setFrom]=useState('en');
    const [to,setTo]=useState('en');
    const [input,setInput]=useState('');
    const [output,setOutput]=useState('');
    


    const Translate=()=>{

        const params=new URLSearchParams();
        params.append('q',input);
        params.append('source',from);
        params.append('target',to);
        params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post('https://libretranslate.de/translate',params,{
            headers:{
                'accept':'application/json',
                'content-Type':'application/x-www-form-urlencoded'
            },
        }).then(res=>setOutput(res.data.translatedText))
    } 
    useEffect(()=>{
        axios.get('https://libretranslate.com/languages',{
        headers:{'accept' : 'application/json'} 
        }).then(res=>setOption(res.data))
        .catch(err=>console.log(err))
    },[])



//     curl -X 'GET' \
//   'https://libretranslate.com/languages' \
//   -H 'accept: application/json' 

    return (  
        <div className="maindiv">
            <div className="options">
                From ({from}):
                <select onChange={e=>setFrom(e.target.value)}>
                    {option.map((e)=>{
                        return(
                            <option  key={e.code} value={e.code}>{e.name}</option>
                        )
                    })}
                </select>
                To : ({to})
                <select onChange={e=>setTo(e.target.value)}>
                {option.map((e)=>{
                        return(
                            <option  key={e.code} value={e.code}>{e.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className="textarea">
                <textarea cols={50} rows={15} onInput={e=>{setInput(e.target.value)}}></textarea><br/>
                <textarea cols={50} rows={15} value={output}></textarea>
            </div>
            <div>
                <button onClick={e=>Translate()}>Submit</button>
            </div>
        </div>
    );
}

export default Translate;