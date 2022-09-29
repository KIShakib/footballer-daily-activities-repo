import React, { useState } from 'react';
import logo from '../Image/bg2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';

const success = () => toast.success('Successfuly Done!! Congratulations...');

const Detail = ({ activitiesTime }) => {
    const [activitiesBreakTime, setActivitiesBreakTime] = useState(0);

    const breakTime = (time) => {
        localStorage.setItem('break-time', time);
        const getFromLs = localStorage.getItem('break-time');
        setActivitiesBreakTime(getFromLs);
    }

    return (
        
        <div>
            <div className="my-info-div mt-10 pb-8 rounded bg-slate-700 shadow-xl w-full lg:ml-3">
                <div className="flex flex-row justify-around pt-5">
                    <figure className=' w-[30%]'>
                        <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" flex flex-col justify-center">
                        <h1 className='text-xl font-bold'>Khubaibul Islam Shakib</h1>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <p className='ml-1'>Mymensingh, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around mt-5 bg-slate-500 mx-6 rounded">
                    <div>
                        <h3 className='text-xl'>52KG</h3>
                        <small className='text-lg'>Weight</small>
                    </div>
                    <div>
                        <h3 className='text-xl'>5.7 ft</h3>
                        <small className='text-lg'>Height</small>
                    </div>
                    <div>
                        <h3 className='text-xl'>22 Years</h3>
                        <small className='text-lg'>Age</small>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl mt-5 mx-6'>Add A Break</h3>
                </div>
                <div className="flex flex-row justify-around mt-5 bg-slate-800 mx-6 rounded p-5">
                    <button onClick={() => breakTime(10)} className="btn btn-outline btn-secondary btn-circle mr-1">10</button>
                    <button onClick={() => breakTime(20)} className="btn btn-outline btn-secondary btn-circle mr-1">20</button>
                    <button onClick={() => breakTime(30)} className="btn btn-outline btn-secondary btn-circle mr-1">30</button>
                    <button onClick={() => breakTime(40)} className="btn btn-outline btn-secondary btn-circle mr-1">40</button>
                    <button onClick={() => breakTime(50)} className="btn btn-outline btn-secondary btn-circle mr-1">50</button>
                    <button onClick={() => breakTime(60)} className="btn btn-outline btn-secondary btn-circle mr-1">60</button>
                </div>
                <div>
                    <h3 className='text-2xl mt-8 mx-6'>Activities Details</h3>
                </div>
                <div className="flex flex-row justify-around mt-5 bg-slate-800 mx-6 rounded p-5">
                    <h4>Total Activities Time: {activitiesTime} sec</h4>
                </div>
                <div className="flex flex-row justify-around mt-5 bg-slate-800 mx-6 rounded p-5">
                    <h4>Break Time: {activitiesBreakTime} sec</h4>
                </div>
                <div className='flex justify-center mt-6'>
                    <button onClick={success} className="btn btn-outline btn-secondary">Activities Completed</button>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Detail;