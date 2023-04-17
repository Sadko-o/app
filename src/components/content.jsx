import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Profile from './profilePage'

  
const content = () => {
  return (
    <div>
        <Routes>
            <Route path="/dashboard" element={<div>Dashboard</div>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/recommendations" element={<div>Recommendations</div>}/>
            <Route path="/catalog" element={<div>Catalog</div>}/>
            <Route path="/saved" element={<div>Saved <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit consequatur harum? Quam iure dolor similique animi nemo cum libero voluptate quas praesentium itaque repudiandae eaque ratione, quisquam impedit ipsa?   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat facilis ex, tempore voluptate consequuntur recusandae harum quibusdam illo ullam expedita itaque animi, accusantium nesciunt et fugiat distinctio, necessitatibus excepturi consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia quo asperiores deleniti, distinctio alias eius libero quis, dolor consequuntur natus exercitationem error perferendis necessitatibus iste repudiandae sint ab ipsam?</div>}/>
            <Route path="/applications" element={<div>Applications</div>}/>
            <Route path="/learning" element={<div>Learning</div>}/>
        </Routes>
    </div>
  )
}

export default content