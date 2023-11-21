import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./components/layout.jsx";
import React from 'react';
// import Home from "./pages/Home"
// import Navbar from './components/navbar.jsx';
// import Tabs from './components/tabs.jsx';
// import Input from './components/input.jsx';
import Page404 from "./components/page404.jsx";
import tileView1 from './components/tileView1.jsx';
import List1 from './components/List1.jsx';
// ...
// import About from "./pages/About"

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      // your custom routing error component
      errorElement: <Page404 />,
      children: [
        {
          path: "/List1",
          element: <List1 />,
        },

        
        {
          path: "/tileView1",
          element: <tileView1 />,
        },
        // other pages....
        // {
        //   path: "/about",
        //   element: <About />,
        // },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
      )
}


export default App
// import Tabs from './components/tabs.jsx';
// import Input from './components/input.jsx';

// function App() {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Navbar />
//       <Tabs />
//       <Input className="mt-auto" />
//     </div>
//   );
// }

// export default App;