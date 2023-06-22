import React from 'react';
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import LogIn from './components/LogIn';

function App() {
return (
  <>
    <Header />
    <Catalog />
    <Footer />
  </>
)
}


  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  // return (
  //   <div>

  //   {(typeof backendData.users === 'undefined') ? (
  //     <p>Loading....</p>
  //   ): (
  //    backendData.users.map((user, i) => (
  //     <p key={i}>{user}</p>
  //    )) 
  //   )}

  //   </div>
  // )

export default App