import React from 'react'
import './styles/sidebar.css'

//icons
import logo from '../logo.svg'
import dashboard from '.././assets/ChartBar.svg'
import profile from '.././assets/ChartBar.svg'
import recommendatinos from '.././assets/ChartBar.svg'
import catalog from '.././assets/ChartBar.svg'
import saved from '.././assets/ChartBar.svg'
import applications from '.././assets/ChartBar.svg'
import learning from '.././assets/ChartBar.svg'

const Sidebar = () => {
  return (
    <>
    <div className="container">
            
            <ul className="sidebar">
            <li><img src={logo}/></li>
             <li><span><i src={dashboard}></i></span><span>Home</span></li>
             <li><span><i className="fa fa-dashboard"></i></span><span>Dashboard</span></li>
             <li><span><i className="fa fa-users"></i></span><span>Users</span></li>
             <li><span><i className="fa fa-shopping-cart"></i></span><span>Products</span></li>
             <li><span><i className="fa fa-bookmark"></i></span><span>Bookmarks</span></li>
             <li><span><i className="fa fa-gear"></i></span><span>Settings</span></li>
             
             
            </ul>
            
            <div className="content">
               
            </div>
    </div>
  </>
  )
}

export default Sidebar