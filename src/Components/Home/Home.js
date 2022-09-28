import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import Detail from '../Detail/Detail';
import './Home.css';

const Home = () => {
    const [activitiesTime, setActivitiesTime] = useState(0);
    console.log(activitiesTime);
    return (
        <div className='home-container lg:grid'>
            <div className="card-container">
                <Activities setActivitiesTime={setActivitiesTime}></Activities>
            </div>
            <div className="detail-info-container">
                <Detail activitiesTime={activitiesTime}></Detail>
            </div>
        </div>
    );
};

export default Home;