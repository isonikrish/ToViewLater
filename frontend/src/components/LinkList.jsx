// src/components/LinkList.jsx

import React, { useContext } from 'react';
import { LinkContext } from '../context/LinkContext';

const LinkList = () => {
    const { links, deleteLink } = useContext(LinkContext); // Use deleteLink instead of removeLink

    return (
        <div className="mt-4">
            <h2 className="text-lg font-semibold">Saved Links</h2>
            {links.length === 0 ? (
                <p className="text-gray-600">No links saved yet.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {links.map((item) => (
                        <li key={item.id} className="border-b py-2 flex justify-between items-center">
                            <div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {item.link}
                                </a>
                                <p className="text-gray-600">{item.note}</p>
                            </div>
                            <button
                                onClick={() => deleteLink(item.id)} // Use the correct id to delete
                                className="text-red-500 hover:text-red-700"
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
