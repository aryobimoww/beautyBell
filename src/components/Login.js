import React,{useState} from 'react';
import { Link,Router,useHistory } from 'react-router-dom';

const Login = ({user}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let history = useHistory()
    const onsubmit = () =>{
        if(email===user.email&&password===user.password){
            console.log('login')
            history.push('/home')
        }else{
            alert('email and password not match')
        }
    }
    return (
        <div>
        <h2 style={{'textAlign':'center'}}>Login</h2>
        <div style={{
        display:'flex', 
        justifyContent:'center',
        border:'none',
        width:'100%',
        height:'150px',
        background:'rgba(249,243,223,0.3)',
        boxShadow:'1px 0px 1px 0px black'
        }}>
        <from >
            <label htmlFor='email'>Email: </label>    
            <input
            style={{marginLeft:'35px',marginTop:'30px'}} 
            type='email' 
            name='email'
            id='emai-address'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}   
            />
            <br/> <br/>
            <label htmlFor='password'>Password: </label>
            <input
            style={{marginLeft:'4px'}}
            type='password'
            name='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /><br/><br/>
            
                    <Link to='/home'>
                    </Link>             
                    <input 
                    style={{
                        background:'#69DADB',
                        borderColor:'#69DADB',
                        boxShadow:'2px 2px gray'
                    }}
                    type='submit'
                    value='login'
                    onClick={onsubmit}
                    />
                
                    
                
            
            
        </from>
        </div>
        <h2 style={{'display':'flex', 'justifyContent':'center'}}>Login via Media</h2>   
        <div style={{textAlign:'center'}}>
        <div style={{marginBottom:'10px'}} >
            <Link to='/home'>
            {/* <button style={{
             backgroundColor:'#8E0505',
             color:'white',
             borderColor:'#8E0505',
             width:'40%',borderRadius:'5px',
             boxShadow:'5px 5px gray'}} 
            > Google Login
            </button> */}
            
            </Link>
        </div>
        <div>
            

            <Link to='/home'>
            
            {/* <button
            style={{
             backgroundColor:'#0F00FF',
             color:'white',
             borderColor:'#0F00FF',
             width:'40%',borderRadius:'5px',
             boxShadow:'5px 5px gray'}} 
            >Facebook Login</button> */}
        </Link>
        </div>
        </div>
        </div>

    )
}

export default Login;