import React from 'react'
import './styles/sidebar.sass'
//icons
// import logo from '../logo.svg'
// import Content from './content';
// import Head from './navbar';
import {ReactComponent as Dashboard} from '.././assets/ChartBar.svg'
import {ReactComponent as Profile} from '.././assets/User.svg'
import {ReactComponent as Recommendatinos} from '.././assets/Puzzle.svg'
import {ReactComponent as Catalog} from '.././assets/MagnifyingGlass.svg'
import {ReactComponent as Saved} from '.././assets/Bookmark.svg'
import {ReactComponent as Applications} from '.././assets/PaperClip.svg'
import {ReactComponent as Learning} from '.././assets/Chart.svg'


const Sidebar = () => {
  return (
<>
    {/* <div className='main'> */}
    {/* <Head /> */}
    <div className="container">
      
      <ul className="sidebar">

        {/* <img src={logo} alt='' className='logo'/> */}
        <li>    
          <Dashboard className="img"/>
          <div className="title">
            <a  href='/dashboard' className="text">Dashboard</a>
          </div>
        </li>

        <li>
          <Profile className="img"/>
          <div className="title">
          <a href='/profile' className="text">Profile</a>
          </div>
        </li>

        <li>
          <Recommendatinos className="img"/>
          <div className="title">
              <a href='/recommendations' className="text">Recommendations</a>
          </div>
        </li>

        <li>
          <Catalog className="img"/>
          <div className="title">
              <a href='/catalog' className="text">Catalog</a>
          </div>
        </li>

        <li>
          <Saved className="img"/>
          <div className="title">
              <a href='/saved' className="text">Saved</a>
          </div>
        </li>
        
        <li>
          <Applications className="img"/>
          <div className="title">
              <a href='/applications' className="text">Applications</a>
          </div>
        </li>

        <hr/>

        <li>
          <Learning className="img"/>
          <div className="title">
              <a href='/learning' className="text">Learning Platform</a>
          </div>
        </li>
      </ul>
    </div>
{/* 
    <div className='content'>
      <Content/>
      </div> */}
    {/* </div> */}
</>
  )
}

export default Sidebar