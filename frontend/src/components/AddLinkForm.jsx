// src/components/AddLinkForm.jsx

import React, { useState, useContext } from 'react';
import { LinkContext } from '../context/LinkContext';
import { TbBrowserPlus } from "react-icons/tb";

const AddLinkForm = () => {
    const { addLink, getCurrentUrl } = useContext(LinkContext);
    const [link, setLink] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addLink(link, note); // Pass link and note as arguments
        setLink('');
        setNote('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Add Link</h2>
            <div className="w-full flex justify-between h-12 gap-2 py-2">
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter link"
                className="border border-gray-300 p-2 h-full rounded flex-grow"
                required
            />
            <button 
                type="button" 
                className="bg-blue-500 text-white p-2  h-full rounded hover:bg-blue-600"
                onClick={async () => {
                    const currentUrl = await getCurrentUrl()
                    setLink(currentUrl)}
                }
                >
            <TbBrowserPlus />
            </button>
            </div>
            
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note (optional)"
                className="border border-gray-300 p-2 mb-2 w-full rounded"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Save Link
            </button>
        </form>
    );
};

export default AddLinkForm;
