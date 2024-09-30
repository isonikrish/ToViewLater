import React, { useState, useContext } from 'react';
import { LinkContext } from '../context/LinkContext';
import { TbBrowserPlus } from "react-icons/tb";
import { IoMdBookmark } from "react-icons/io";

const AddLinkForm = () => {
    const { addLink, getCurrentUrl } = useContext(LinkContext);
    const [link, setLink] = useState('');
    const [note, setNote] = useState('');
    const [copied, setCopied] = useState(false);
    const [category, setCatgeory] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addLink(link, note, category);
        setLink('');
        setNote('');
        setCatgeory('')
    };

    const handleCopyUrl = async () => {
        const currentUrl = await getCurrentUrl();
        if (currentUrl) {
            setLink(currentUrl);
            setCopied(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <div className="w-full flex justify-between h-12 gap-2 py-2 relative">
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter link"
                    className="border border-gray-300 p-2 h-full rounded flex-grow"
                    required
                />

                {/* Tooltip Wrapper */}
                <div className="relative group">
                    <button
                        type="button"
                        className="bg-orangish text-white p-2 h-full rounded flex items-center justify-center gap-2 hover:bg-orange-700"
                        onClick={handleCopyUrl}
                    >
                        <TbBrowserPlus />
                    </button>

                    {/* Tooltip */}
                    <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Copy current tab URL
                    </span>
                </div>
            </div>
            <input
                type="text"
                value={category}
                onChange={(e) => setCatgeory(e.target.value)}
                placeholder="Enter category"
                className="border border-gray-300 p-2 h-full w-full rounded flex-grow my-3"
                required
            />
            

            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note (optional)"
                className="border border-gray-300 p-2 mb-2 w-full rounded"
            ></textarea>
            <button type="submit" className="bg-darkBlue text-white p-2 rounded hover:bg-blue-600 flex items-center gap-3">
                Bookmark
                <IoMdBookmark className="text-2xl" />

            </button>
        </form>
    );
};

export default AddLinkForm;
