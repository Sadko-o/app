import React, { useState } from 'react';
import './styles/sidebar.sass';
import { ReactComponent as Dashboard } from '.././assets/ChartBar.svg';
import { ReactComponent as Profile } from '.././assets/User.svg';
import { ReactComponent as Recommendations } from '.././assets/Puzzle.svg';
import { ReactComponent as Catalog } from '.././assets/MagnifyingGlass.svg';
import { ReactComponent as Saved } from '.././assets/Bookmark.svg';
import { ReactComponent as Applications } from '.././assets/PaperClip.svg';
import { ReactComponent as Learning } from '.././assets/Chart.svg';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="container">
        <ul className="sidebar">
          {[
            { href: '/dashboard', icon: Dashboard, label: 'Dashboard' },
            { href: '/profile', icon: Profile, label: 'Profile' },
            { href: '/recommendations', icon: Recommendations, label: 'Recommendations' },
            { href: '/catalog', icon: Catalog, label: 'Catalog' },
            { href: '/saved', icon: Saved, label: 'Saved' },
            { href: '/applications', icon: Applications, label: 'Applications' },
            { divider: true },
            { href: '/learning', icon: Learning, label: 'Learning Platform' },
          ].map((item, index) => (
            <React.Fragment key={index}>
              {item.divider ? (
                <hr />
              ) : (
                <li
                  onClick={() => handleClick(item.href)}
                  className={activeItem === item.href ? 'active' : ''}
                >

                <Link to={item.href}>
                  <item.icon className="img" />
                  <div className="title">
                    <p className="text">{item.label}</p>
                  </div>
                </Link>
                </li>

                
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
