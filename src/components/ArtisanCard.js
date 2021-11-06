import React from "react"
import { Link } from "react-router-dom"



const ArtisanCard = ({name,description,image,id}) => {
return(
<div>
    <div style={{marginLeft:'10px',marginBottom:'20px',width:'270px',border:'2px solid lightgray',background:'#F9F3DF'}}>
        <img alt='artisan' src={image} style={{width:'100%'}}/>
        <p style={{marginLeft:'5px'}}>{name}</p>
        <p style={{marginLeft:'5px'}}>{description}</p>
        <Link to={{pathname:`/artisan/${id}`}}>
        <button style={{marginBottom:'4px',marginLeft:'20px',width:'7em',background:'pink',border:'1px solid pink',color:'white'}} >Services</button>
        </Link>
    </div>
  
</div>


)

}



export default ArtisanCard