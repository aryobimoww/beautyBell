import React,{useEffect,useState,Suspense} from 'react';
import './App.css';
// import ListOfArtisan from './components/ListOfArtisan';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Artisan from './components/Artisan';
import Home from './components/Home'
import Profile from './components/Profile';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { BrowserRouter as 
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () =>{
 const [data,setData]= useState([])
 const [searchfield,setSearchfield]= useState('')
 const [sosmed,setSosmed]= useState({})
 const [picture,setPicture]= useState('')
 const [login,setLogin]=useState(false)
 const [user,setUser]=useState({
   email:'bimo@gmail.com',
   password:'123',
   name:'bimo',
   image:'https://i.pinimg.com/736x/23/b8/29/23b8291586cc7b4ff5f9b16f165bd455--hairstyles-men-mens-haircuts.jpg'
 });
 
   useEffect(async ()=>{
    const res = await fetch('https://604048b4f34cf600173c7cda.mockapi.io/api/v1/list-artisan')
    const data = await res.json();
     setData(data)
     console.log(data)   
  },[])
 const onSearchChange = (event) =>{
    setSearchfield(event.target.value)
  }
  const responseFacebook = (res) => {
    console.log(res)
    setSosmed(res)
    setPicture(res.picture.data.url)
    if(res.accessToken){
      setLogin(true)
    }else{
      setLogin(false)
    }
} 
const responseGoogle = (res) => {
    console.log(res)
} 
  
  
     const filterArtisan = Object.values(data).filter(artisan=>{
       return artisan.name.toLowerCase().includes(searchfield.toLowerCase());
     })   
  console.log(user)
    return(
      <div>
        <Router>
          <Switch>
              <Route exact path='/'>
                  <Login user={user}/>
                  <div style={{display:'flex',justifyContent:'center'}}>
                 <div style={{flexDirection:'row'}}>
                  <div style={{flexDirection:'column'}}>

                    <GoogleLogin
                  clientId='226990174817-hi2ki2pdi2voe01plnrm650d38nis0m3.apps.googleusercontent.com'
                  buttonText='Google'
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  style={{width:'300px'}}
                      />
                  </div>

                 <div style={{flexDirection:'row'}}>

                  { !login && 
                  <FacebookLogin
                      appId='616110936467379'
                      fields='name,email,picture'
                      scope='user_birthday'
                      autoLoad={false}
                      callback={responseFacebook}
                  />
                  }
                  {login &&
                    <Link to='/home'>
                    <FacebookLogin
                      appId='616110936467379'
                      fields='name,email,picture'
                      autoLoad={false}
                      scope='userbirthday'
                      callback={responseFacebook}
                  />
                    </Link>
                  }
                 </div>
                 </div>
                  </div>
              </Route>
              <Route exact path='/home'>
                <Navigation onSearchChange={onSearchChange}/>
                  <Home data={filterArtisan}/>
              </Route>
              <Route path='/artisan/:id'>
                <Artisan />
              </Route>
              <Route path='/profile'>
                <Profile sosmed={sosmed} picture={picture} user={user} />
              </Route>
          </Switch>
        </Router>
      </div>
    )     

    }
  




//        if (this.state.route === 'login'){
//          return (
//          <Router>
//           <Suspense>
//             <Switch>
//               <Route path='/'>
//                <Login onRouterChange={this.onRouterChange}/>
//               </Route>
//             </Switch>
//           </Suspense>

//          </Router>
          
//           )
//      } else if(this.state.route === 'list'){
//        return( 
//          <Suspense fallback={<div>loading...</div>}>
//                 <Navigation onSearchChange={this.onSearchChange}/>
//                 <ListOfArtisan  onRouterChange={this.onRouterChange} dataArtisans={filterArtisan} />
//               </Suspense>
//               )
//      } else if(this.state.route === 'artisan'){
//       return(
    
//       <Suspense fallback={<div>loxading...</div>}>    
//           <Artisan onRouterChange={this.onRouterChange} dataArtisans={filterArtisan} />
//       </Suspense>
      
//       )
//      }else if(this.state.route === 'profile'){
//        return(
//        <Suspense fallback={<div>loading...</div>}>
//          <Profile onRouterChange={this.onRouterChange}/>
//        </Suspense>
//        )
    
//      }     
    
//   }
// }

export default App;
