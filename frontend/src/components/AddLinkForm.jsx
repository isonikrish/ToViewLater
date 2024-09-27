// src/components/AddLinkForm.jsx

import React, { useState, useContext } from 'react';
import { LinkContext } from '../context/LinkContext';

const AddLinkForm = () => {
    const { addLink } = useContext(LinkContext);
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
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter link"
                className="border border-gray-300 p-2 mb-2 w-full rounded"
                required
            />
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
