import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './My Components/Profile';
import Skills from './My Components/Skills';
import Aboutme from './My Components/Aboutme';
import Assignments from './My Components/Assignments';
import Project from './My Components/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Profile></Profile>
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      },
      {
        path:'/aboutme',
        element:<Aboutme></Aboutme>
      },
      
      {
        path:'/assignments',
        element:<Assignments></Assignments>
      },
      {
        path:'/projects',
        element:<Project></Project>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
