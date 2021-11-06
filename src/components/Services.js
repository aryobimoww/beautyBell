import React from 'react';

const Services = ({name,caption,price,image})=>{
    return(
            <div style={{marginTop:'5px',marginRight:'20px',marginLeft:'5px',border:'1px solid #F9F3DF',width:'200px',background:'#F9F3DF'}}>
                    <div style={{flexDirection:'column'}}>
                        <div style={{display:'flex'}}>
                            <img src={image} style={{width:'50px',borderRadius:'20px',marginLeft:'5px'}}/>
                            <h3 style={{marginLeft:'10px'}}>{name}</h3>
                        </div>

                        <p>Price Rp:{price}</p>
                        <p>{caption}</p>
                    </div>
                

            </div>
        )
    
}
export default Services;