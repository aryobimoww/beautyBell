import React from 'react';
import { Link } from 'react-router-dom';
import ArtisanCard from './ArtisanCard';
const Home = ({data}) =>{

    return( 
        <div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                
                {

                Object.values(data).map((user,i)=>{
                        if(data[i].name!=='test{{i}}'){
                        return(
                        
                            <ArtisanCard
                            id={data[i].id}
                            image={data[i].image}
                            name={data[i].name}
                            description={data[i].description}
                            

                            />
                        );
                    }
                    })
                
                        
                }
            </div>
        <div style={{display:'flex',position:'relative',justifyContent:'center'}}>
            <div style={{flexDirection:'column'}}>
                <Link to='/artisan'>
                <button style={{marginRight:'30px',marginLeft:'20px',width:'120px',background:'pink',borderRadius:'6px',border:'pink',color:'white'}}>Stock</button>
                </Link>     
            </div>
            <div>
                <Link to='/profile'>
                <button style={{marginLeft:'40px',width:'120px',background:'pink',borderRadius:'6px',border:'pink',color:'white'}}>Profile</button>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default Home;