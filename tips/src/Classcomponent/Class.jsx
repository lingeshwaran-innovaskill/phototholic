import React from "react"


export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            color:"blue",
            favcolor:''
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    colorchange=()=>{
        this.setState({favcolor:"ash"})
    }
    componentDidUpdate(){
       document.getElementById('color').innerHTML= ` My fav color :  ${this.state.favcolor}  `
    }
    render(){
        return(
            <>
        <h1> fav color : {this.state.color}</h1> 
        <button onClick={this.colorchange}>Change</button> 
        <h1 id="color"> </h1>
            </>
        )
    }
}










                        //unmounting 




// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//          show:true
//         }
//     }
     
//     delchild=()=>{
//         this.setState({show:false})
//     }

//     render(){ return(
//         <>
//         {this.state.show? <Child /> : ""}    //ternary operator =>for condition checking
//         <h1>parrent component</h1>
//         <button onClick={this.delchild}>delete</button>   
//         </>
//     )

//     }                      //when i press the button chind function will be deleted 
// };


// export default App;


// class Child extends React.Component{

//     componentWillUnmount(){        
//     alert("do u want to delete");
//     }
//     render(){
//         return(
//             <h1>Child component</h1>
//         )
//     }
// }















                     //  store the props value in class (!we can't change the props value)





// class App extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             countclass:""
//         }
//     }

// static getDerivedStateFromProps(props){
//     return(
//         {countclass:props.count}         //we store the value like this in class
//     )
// }
                                  //we can't change the props value in class
// render(){
//     return(
//         <h1>{this.state.countclass}</h1>
//     )
// }
// };
// export default App;



























// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
// componentDidMount(){
    
//      let increase=()=>{
//         this.setState({count:this.state.count+1})  => it is used to count the value 
//      } 
//      setInterval(increase,2000);    //it will count only once 

//     setTimeout(increase,3000);     //it will count in infinite level 
// }
// render(){
//     return(
//         <h1>{this.state.count}</h1>
//     )
// }
// };
// export default App;






// change the initialize value using component did mount





// class App extends React.Component{

//    constructor(){
//     super();
//     this.state={
//         name:"Lingesh",         //initialize the name 
//         age:21
//     }
//    }
// componentDidMount(){
//     setTimeout(()=>{
//         this.setState({name:"lee"})    //this is used to change the initialize value 
//     },5000)                            //using setTime out is the example for change the name (after 5sec)
// }

// render(){
//     return(
//         <>
//         <h1>{this.state.name}</h1>
//         </>
//     )
//  }
// };
// export default App;









































// import React from "react"     =>     this is for class (react.component)


// import Classname from "./Class2"       =>  this is used for store the file for transfer the element (in this)


// export  default class lingesh extends React.Component{

//     constructor(props)           => constructor is used to store the value for the class
//     {
//         super(props);  
//         this.state={                
//             name:"lingesh",
//             age:21
//         }
//     }
//     render()                    ==>  this  is for the class component (when we use class this is must)
//     {
//         return(
//            <>
//            <h1>class Component</h1>
//            <h1>{this.props.name}</h1>    
   

//            <h2>{this.state.name}</h2>     ==> this is used for get the name from constructor 
//            <p>{this.state.age}</p>

//            <Classname stuname={this.state.name} />
//           </>
//         )
//     }
// };
