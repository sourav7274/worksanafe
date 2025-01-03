import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import TaskCreate from './pages/TaskCreate';
import TaskDetail from './pages/TaskDetail';
import Reports from './pages/Reports';
import TeamManagement from './pages/TeamManagement';
import Register from './pages/Register';
import store from './app/store'
import { Provider } from 'react-redux';
import Teams from './pages/Team';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/management",
    element:<Management/>
  },
  {
    path:"/taskcreate",
    element:<TaskCreate/>
  },
  {
    path:"/taskdetail/:id",
    element:<TaskDetail/>
  },
  {
    path:"/reports",
    element:<Reports/>
  },
  {
    path:"/teamManage",
    element:<TeamManagement/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/teams",
    element:<Teams/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

