import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    const { img, name, position, time, description } = activity;
    return (
        <div>
            <div className="card w-full h-[450px] bg-slate-700 shadow-xl">
                <figure><img src={img} className="card-img pt-7" alt="Shoes" /></figure>
                <div className="card-body flex justify-between">
                    <div>
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">{position}</div>
                        </h2>
                    </div>
                    <div>
                        <p>{description.slice(0, 150)}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline">{time} Sec</div>
                    </div>
                    <div className='flex justify-center'>
                        <button className="btn btn-outline btn-secondary btn-sm w-72">Add To-Do List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;