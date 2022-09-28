import React from 'react';
import Activities from '../Activities/Activities';
import Detail from '../Detail/Detail';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container lg:grid'>
            <div className="card-container">
                <Activities></Activities>
            </div>
            <div className="detail-info-container">
                <Detail></Detail>
            </div>
        </div>
    );
};

export default Home;