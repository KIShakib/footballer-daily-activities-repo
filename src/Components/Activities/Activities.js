import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

let selectedArray = [];
let actiTotalTime = 0;

const Activities = ({ setActivitiesTime }) => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);



    const selectedActivities = (activityTime) => {
        selectedArray.push(activityTime);
        const totalTime = selectedArray.reduce((init, cost) => {
            return (parseInt(init) + parseInt(cost));
        }, 0);
        actiTotalTime = totalTime;
        setActivitiesTime(actiTotalTime);
    };

    return (
        <div className='lg:grid gap-2 w-full card-container my-10'>
            {
                activities.map(activity => <Activity selectedActivities={selectedActivities} activity={activity} key={activity.id}></Activity>)
            }
        </div>
    );

};

export default Activities;