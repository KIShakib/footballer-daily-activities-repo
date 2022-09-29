import React from 'react';
import './Questions.css';

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
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Props</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>props stand for properties.</td>
                                    <td>useState is the actual state.</td>
                                </tr>
                                <tr className="hover">
                                    <th>2</th>
                                    <td>React Props are like function parameters in JavaScript and attributes in HTML.</td>
                                    <td>The state is like a statement on a web page, rather it can be changed or not.</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>The component receives the argument as a props
                                        object.</td>
                                    <td>If the statement changes, have to use setAbc to set the state’s new changed value.</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>props are read only.</td>
                                    <td>state can be changed.</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>props can't be modified.</td>
                                    <td>state can be modified using setAbc(newValue)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="collapse rounded my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='text-xl font-bold font-mono'>What useEffect is used for other than data load?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <ul className='useEffect-list p-5'>
                        <li>Validating input field</li>
                        <li>Filter an array</li>
                        <li>Trigger an animation</li>
                        <li>For changing the state value.</li>
                        <li>Load Data by useEffect dependency parameter.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Questions;