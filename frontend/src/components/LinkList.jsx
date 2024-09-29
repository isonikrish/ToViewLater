// src/components/LinkList.jsx

import React, { useContext } from 'react';
import { LinkContext } from '../context/LinkContext';

const LinkList = () => {
    const { links, deleteLink } = useContext(LinkContext);

    return (
        <div className="mt-4">
            {links.length === 0 ? (
                <>
                </>
            ) : (
                <ul className="list-disc pl-5 overflow-y-scroll h-[30vh]">
                    <h2 className="mx-3 text-lg text-center font-semibold mb-4 border-b">Bookmarked Links</h2>
                    {links.map((item) => (
                        <li key={item.id} className="border-b py-2 flex justify-between items-center">
                            <div className="flex-grow text-wrap w-[70%] overflow-hidden">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline "
                                    title={item.link} // Show full URL on hover
                                >
                                    {item.link}
                                </a>
                                <p className="text-gray-600">{item.note}</p>
                            </div>
                            <button
                                onClick={() => deleteLink(item.id)}
                                className="text-red-500 hover:text-red-700"
                                style={{ minWidth: '80px' }} // Set a min width for the button
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LinkList;
