`1`import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Hirola() {

    const [user1,setUser1] = useState({
        content1:"",
        content2:"",
    })

    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        address:[{
            content1:'',
            content2:""
        }]
    })

    const [datas,setDatas] = useState([]);

    const [add,setAdd] = useState([]);

    console.log(add[5]);

    console.log(datas);

    const storingvalue = (e) => {
        setUser( {...user,[e.target.name]:e.target.value} )
    }

    const storingArrvalue = (s) =>{
        setUser1({...user1,[s.target.name]:s.target.value  })
        setUser({...user , address:[{...user1}]})
    }

    const submit = () => {

        axios.post("http://127.0.0.1:1234/postdata" , user , {
        headers:{
            "content-type":"application/json"
        }
        }).then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    useEffect(()=>{

        // setUser({...user , array:[...user1]})

        axios.get("http://127.0.0.1:1234/getdata",{
            headers:{
                "content-type":"application/json"
            }
            }).then((res) => {setDatas(res.data.data);
                            setAdd(res.data.data);
                            console.log(res.data.data)})
            .catch((err) => console.log(err))
    },[])

    const formSub = (e) => {
        e.preventDefault();
    }

    return (<>
    <div>

        <h1> Post </h1>
        <form onSubmit={formSub}>

            <input type="text" name="firstName" placeholder="firstName" onChange={(e)=>storingvalue(e)} value={user.firstName}/><br/>
            <input type="text" name="lastName" placeholder="lastName"   onChange={(e)=>storingvalue(e)} value={user.lastName}/><br/>
            <input type="text" name="content1" placeholder="content1"   onChange={(e)=>storingArrvalue(e)} value={user1.content1}/><br/>
            <input type="text" name="content2" placeholder="content2"   onChange={(e)=>storingArrvalue(e)} value={user1.content2}/><br/>

            <button type="submit" onClick={submit}> Submit </button>

        </form>

        <div>
            <h1> Get </h1>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>

                {datas.map((d)=>{
                    return(<>
                    <tr>

                        <td>{d.firstName}</td>
                        <td>{d.lastName}</td>
                        <td><NavLink to={'/update'} state={{d}}> Update </NavLink></td>

                        {add.map((l)=>{
                            return(<>
                            <td> {l.content1} </td>
                            <td> {l.content1} </td>
                            </>)
                        })}

                    </tr>
                    </>)
                })}

                

            </tbody>
            </table>

        </div>
    </div>
    </>);
}

export default Hirola;
