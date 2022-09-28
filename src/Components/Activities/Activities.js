import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {
    const[activities, setActivities] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);
    return (
        <div className='lg:grid gap-2 w-full card-container my-10'>
            {
                activities.map(activity => <Activity activity={activity} key={activity.id}></Activity>)
            }
        </div>
    );
    
};

export default Activities;