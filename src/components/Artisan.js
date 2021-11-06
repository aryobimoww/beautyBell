import React, { useEffect,useState} from "react";
import {useParams} from 'react-router-dom' 
import Services from "./Services";


const Artisan = (props)=>{
    useEffect(()=>{
        fetchData();
        
    },[])
    const [artis,setArtis]=useState([])
    const fetchData= async ()=>{
        const res = await fetch(`https://604048b4f34cf600173c7cda.mockapi.io/api/v1/list-artisan/${id}`)
        const data = await res.json();
        setArtis(data)
        console.log(data)
    }
    
   
       let stars =[];
        for(let i = 0;i < artis.rating;i++ ){
            stars.push('★')
            
        }
        console.log(stars)
    
     
    const{id}=useParams()
    //  data.find(art=>art.id===id)
    const {name,description,user_image,avatar}=artis;
    if(id){
        return(
                <div>
                    <nav style={{background:'#F9F3DF',paddingTop:'20px',paddingBottom:'10px',marginBottom:'10px'}}>
                        <h1 style={{marginLeft:'20px'}}>Artisan</h1>
                    </nav>
                    <div style={{marginLeft:'40px',marginTop:'20px'}}>
                    <div style={{display:'flex'}}>
                          <img alt='user' src={avatar}/>
                        <div className='star' style={{marginLeft:'40px'}}>
                            <p>{name}</p>
                           <p style={{color:'gold',fontSize:'20px'}}>{stars}</p>
                            {/* <span>☆</span> */}
                        </div>
                    </div>
                         <p>{description}</p> 
                
             <div> 
                 <h2>Services</h2>
                <div>
                    {
                        Object.values(artis).map((art,i)=>{
                            return(
                            <div style={{display:'flex'}}>
                                {
                                    Object.values(art).map((d,i)=>{
                                        console.log(d.name)
                                        if(d.name!==undefined){
                                        return(

                                            <Services
                                                id={art[i]}
                                                image={artis.image}
                                                name={d.name}
                                                price={d.price}
                                                caption={d.caption}
                                            />
                                            
                                        )}  
                                        }
                                    )
                                }
                                
                            </div>
                            )
                        })
                    }

                    </div>
                </div> 
            </div>
         </div>
        );
    }
}
    

export default Artisan;