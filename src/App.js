import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { Login, logout, selectUser } from "./Redux/Reducers/userReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const user=useSelector(selectUser);
  console.log(user)

  const dispatch=useDispatch()

  useEffect(() => {
   const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
    if(userAuth){
      dispatch(Login({
        uid:userAuth.uid,
        email:userAuth.email
      }))
    }
    else{
      dispatch(logout())
    }
   })

   return unsubscribe
  }, [dispatch]);

  
  return (
    <div className="App">
      <Router>
        {!user ? (
         <LoginScreen/>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
