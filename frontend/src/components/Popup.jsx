// src/components/Popup.jsx

import React from 'react';
import AddLinkForm from './AddLinkForm';
import LinkList from './LinkList';

const Popup = () => {
    return (
        <div className="p-4 w-80 bg-gray-50 rounded-lg shadow-md">
            <div className='flex items-center justify-center'>
                <img src="icons/logo.png" className='w-10 rounded-full' />
                <h1 className='text-2xl font-bold text-darkBlue ml-4'>ToViewLater</h1>
            </div>


            <AddLinkForm />
            <LinkList />
        </div>
    );
};

export default Popup;
