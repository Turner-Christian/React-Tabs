import React, { useState } from 'react';
import '../App.css';


const Tabs = (props) => {
    const [ tabNum, setTabNum ] = useState(1);

    const Active = (e) => {
        setTabNum(e)
    }

    return (
        <div className="flex">
            <div className='cardHead'>
                <div >
                    <button onClick={() => Active(1)} className={tabNum === 1? 'tabChange': 'tab'}><strong >Tab1</strong></button>
                </div>
                <div>
                    <button onClick={() => Active(2)} className={tabNum === 2? 'tabChange': 'tab'}><strong>Tab2</strong></button>
                </div>
                <div>
                    <button onClick={() => Active(3)} className={tabNum === 3? 'tabChange': 'tab'}><strong>Tab3</strong></button>
                </div>
            </div>
            <div className='cardContent'>
                <div className={tabNum === 1? 'show-content': 'content'}>
                    <p>This is the first tab</p>
                </div>
                <div className={tabNum === 2? 'show-content': 'content'}>
                    <p>This is the second tab</p>
                </div>
                <div className={tabNum === 3? 'show-content': 'content'}>
                    <p>This is the third tab</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;