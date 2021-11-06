import React from "react";

const Navigation = ({onSearchChange})=>{
    return(
    <div style={{background:'#F9F3DF',paddingTop:'30px'}}>
    <nav style={{marginLeft:'40px',marginBottom:'10px'}}>
        <h1>Artisans</h1>
        <input
            type='search'
            placeholder='search artisans '
            style={{width:'300px',marginBottom:'30px'}}
            onChange={onSearchChange}
        />
        </nav>
    </div>
    )
}
export default Navigation;