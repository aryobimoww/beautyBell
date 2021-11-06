import React from "react";

const Profile = ({sosmed,picture,user}) => {
    console.log(user)
    return(    

        <div>
            <nav style={{background:'#F9F3DF',paddingTop:'20px',paddingBottom:'10px',marginBottom:'10px'}}>
                        <h1 style={{marginLeft:'20px'}}>Profile</h1>
                    </nav>
            { sosmed===null
            ?<div style={{display:'flex',marginLeft:'5px',marginTop:'5px'}}>    
                <img src={picture} style={{width:'100px',borderRadius:'10px'}}/>
                <div style={{marginLeft:'50px'}}>
                <h3>Name: {sosmed.name}</h3> 
                <h3>birth of date:</h3>
                <h3>Email: {sosmed.email}</h3>
                </div>
            </div>
            :<div style={{display:'flex',marginLeft:'5px',marginTop:'5px'}}>    
                <img src={user.image} style={{width:'100px',borderRadius:'10px'}} />
                <div style={{marginLeft:'50px'}}>
                <h3>Name: {user.name}</h3> 
                <h3>birth of date:</h3>
                <h3>Email: {user.email}</h3>
                </div>
            </div>
            }
        </div>
        
    
    )
}

export default Profile;