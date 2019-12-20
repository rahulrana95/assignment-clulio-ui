import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/mainHeader.scss';


export default class MainHeader extends React.Component {
    render(){return (
        <div className='mainHeader'>
            <div>
                Discover
            </div>
           <ul>
               <li>
                   <Link to='/popular'>Popular</Link>
               </li>
               <li>
                   <Link to='newest'>Newest</Link>
               </li>
               <li>
                   <Link to='trending'>Trending</Link>
               </li>
               <li>
                   <Link to='top-rated'>Top Rated</Link>
               </li>
           </ul>
           <div>
               Search
           </div>

        </div>
    )}
}