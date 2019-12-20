import React from 'react';
import { Link, Route } from 'react-router-dom';
import MainHeader from './MainHeader';
import Sidebar from './Sidebar';
import '../styles/home.scss';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrendingMovies';
import NewestMovies from './NewestMovies';
import TopRatedMovies from './TopRatedMovies';




export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='leftArea'>
                    <MainHeader />
                    <div className='content'>
                        <Route path='/' exact component={PopularMovies} />
                        <Route path='/popular' component={PopularMovies} />
                        <Route path='/trending' component={TrendingMovies} />
                        <Route path='/newest' component={NewestMovies} />
                        <Route path='/top-rated' component={TopRatedMovies} />
                        
                    </div>
                </div>
                <div className='sidebarArea'>



                    <Sidebar />
                </div>
                {/* <Route path='/a' exact component={Name}/> */}

            </div>
        )
    }
}