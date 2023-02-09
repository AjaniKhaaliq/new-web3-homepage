// import React, {useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/about';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import ComponentA from './context/ComponentA';
// import { CounterOne } from './reducer/CounterOne';
// import { CounterTwo } from './reducer/CounterTwo';
import './App.css';
// import {PRODUCTS} from './products/product-data';
// import FilterableProductTable from './products/FilterableProductTable';
// import CounterOne from './effects/CounterOne';
// import CounterTwo from './effects/CounterTwo';
// import CounterThree from './effects/CounterThree';
import Component1 from './news-homepage-main/Component1';
import Component2 from './news-homepage-main/Component2';
import Component3 from './news-homepage-main/Component3'
import Component4 from './news-homepage-main/Component4';






// export const EmailContext = React.createContext();
// export const UsersContext = React.createContext();
// export const profileContext = React.createContext();

// const users = [
//   {id: 1, name: 'Timi'},
//   {id: 2, name: 'Ajani'},
//   {id: 3, name: 'Sikirah'}
// ];

// const profile = {
//   firstName: 'Joy',
//   lastName: 'Smith',
//   age: 32
// }


  const App = () => {
    return(
      <div>
        {/* <FilterableProductTable products={PRODUCTS}/> */}
        {/* <CounterOne/>
        <CounterTwo/>
        <CounterThree/> */}
        <Component1/>
        <Component2/>
        <Component3/>
        <Component4/>
      </div>
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/services" element={<Services/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//       </Router>
    );

//     // return(
//     //   <div>
//         {/* <CounterTwo/>
//         {/* <EmailContext.Provider value = {'johndoe@gmail.com'}> */}
//           {/* <UsersContext.Provider value = {users}> */}
//             {/* <profileContext.Provider value={profile}> */}
//               {/* <ComponentA/> */}
//             {/* </profileContext.Provider> */}
//           {/* </UsersContext.Provider> */}
//           {/* <ComponentA/> */}
//         {/* </EmailContext.Provider> */}
//       // </div>
// //     )
// // }; */}

// function App () {
//   const [email, setEmail] = useState('johnDoe@gmail.com');

//   return(
//     <ComponentA Email = {email}/>
//   )
}

export default App;
