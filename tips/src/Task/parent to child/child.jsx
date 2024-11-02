
function B({colors}){

    const c=(e)=>{
     const {value}= e.target ;    
     colors(value);
    }

    return(
        <>
        <input type="text"  onChange={c}/>
        </>
    )

}

export default B;
