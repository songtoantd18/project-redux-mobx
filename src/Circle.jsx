const Circle =(props)=>{


    return (

      <div className="circle">
   
        <h1> {props.id} : {props.title}</h1>
        <div className="circleSmall" style={{backgroundColor:`${props.backgroundColor}`}}>

        </div>
        
        
        
      </div>
     
    )
}
export default Circle;