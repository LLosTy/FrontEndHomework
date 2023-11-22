import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PathConstants from './routes/pathConstants';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Home = React.lazy(() => import("../pages/Home"))
const List1 = React.lazy(() => import("./components/List1"))
const List2 = React.lazy(() => import("./components/List2"))
const List3 = React.lazy(() => import("./components/List3"))

const TileView1 = React.lazy(() => import("./components/TileView1"))
// // other page components...
// const About = React.lazy(() => import("../pages/About"))

const routes = [
//     { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.LIST1, element: <List1 /> },
    { path: PathConstants.LIST2, element: <List2 /> },
    { path: PathConstants.LIST3, element: <List3 /> },
    { path: PathConstants.TILEVIEW1, element: <TileView1 />},

//     // other mappings ...
//     { path: PathConstants.ABOUT, element: <About /> },
]

export default routes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
