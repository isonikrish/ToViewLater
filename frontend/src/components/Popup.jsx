// src/components/Popup.jsx

import React from 'react';
import AddLinkForm from './AddLinkForm';
import LinkList from './LinkList';

const Popup = () => {
    return (
        <div className="p-4 w-80 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4 text-blue-500">ToViewLater</h1>
            <AddLinkForm />
            <LinkList />
        </div>
    );
};

export default Popup;
