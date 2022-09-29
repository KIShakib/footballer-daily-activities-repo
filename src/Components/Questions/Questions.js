import React from 'react';

const Questions = () => {
    return (
        <div className='w-[75%] mx-auto'>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>How Does React Work?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React create a virtual DOM that is the copy of real DOM tree in JavaScript. So when React needs to change the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing with real DOm. Then update the only changing content. </p>
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>Difference Between Props & State.</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React create a virtual DOM that is the copy of real DOM tree in JavaScript. So when React needs to change the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing with real DOm. Then update the only changing content. </p>
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>Other activities of useEffect after dataload.</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React create a virtual DOM that is the copy of real DOM tree in JavaScript. So when React needs to change the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing with real DOm. Then update the only changing content. </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;