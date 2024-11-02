import { useState } from "react";


function Formtask() {

    const[username,setUsername]=useState("");
    const[rollno,setRollno]=useState("");
    const[salery,setSalery]=useState("");
    const[manager,setManager]=useState("");
    const[datas,setDatas]=useState([]);


    function data(){
    
        if(!username || !rollno || !salery || !manager){
            alert('fill all the values');
         }
         else{
            setUsername("");
            setRollno("");
            setSalery('');
            setManager('');
         }

           const data={
         id:Math.floor(Math.random()*100),
         value:username,
         value1:rollno,
         value3:salery,
         value4:manager 
                 }

         setDatas(e=>[...e,data]);

         console.log(datas);
    };

function deleteuser(id){

    const arr=datas.filter(e=>e.id !== id)
    console.log(arr);
    setDatas(arr)

}

    return ( 
        <>
        <div className="totaldiv">
        <div id="form">
            
            <label id="label">Enter your Name :</label>
            <input type="text" placeholder="enter your name" value={username}  onChange={e=>setUsername(e.target.value)}/>
    
         <br />
        
             <label>Enter your Roll no : </label> 
             <input type="number" placeholder="enter your rollno"  value={rollno} onChange={e=>setRollno(e.target.value)} />  
         <br />

             <label>Enter your Salery : </label>
             <input type="number" placeholder="enter your salery" value={salery} onChange={e=>setSalery(e.target.value)} />    
         <br />

             <label>Enter Manager no :   </label>
             <input type="number" placeholder="enter manager no"  value={manager}  onChange={e=>setManager(e.target.value)}/>     
           <br />
                             <button onClick={data}>submit</button>
                    
        </div>


        <div id="table">

        <table>
        {datas.length === 0 ? "":<thead><tr> <th>Name</th> <th>Roll no</th> <th>Salery</th> <th>Manager No</th> </tr></thead>}
        <tbody>
            {
                datas.map((z)=>{
             {return(
                  <tr>
                    <td>{z.value}</td>
                    <td>{z.value1}</td>
                    <td>{z.value3}</td>
                    <td>{z.value4}</td>
                    <button onClick={()=>deleteuser(z.id)} >delete</button>
                  </tr>
             )}   })
            }
        </tbody>
            </table>
        </div>
        </div>
        </>
     );
}

export default Formtask;




