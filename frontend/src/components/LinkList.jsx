import React, { useContext, useState } from 'react';
import { LinkContext } from '../context/LinkContext';

const LinkList = () => {
    const { links, deleteLink } = useContext(LinkContext);
    const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get unique categories for dropdown
    const categories = Array.from(new Set(links.map(link => link.category)));

    // Filter links based on the selected category
    const filteredLinks = selectedCategory === 'All'
        ? links
        : links.filter(link => link.category === selectedCategory);

    return (
        <div className="mt-4">
            <h2 className="mx-3 text-lg text-center font-semibold mb-4 border-b">Bookmarked Links</h2>

            {/* Category Selection Dropdown */}
            {categories.length > 0 && (
                <div className="mb-4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="All">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            )}

            {filteredLinks.length === 0 ? (
                <p className='text-center'>No links found</p>
            ) : (
                <>

                    <ul className="list-disc pl-5 overflow-y-scroll h-[30vh]">


                        {filteredLinks.map((item) => (
                            <li key={item.id} className="border-b py-2 flex justify-between items-center">
                                <div className="flex-grow text-wrap w-[70%] overflow-hidden">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                        title={item.link}
                                    >
                                        {item.link}
                                    </a>
                                    <p className="text-gray-600">{item.note}</p>
                                    <p className="text-gray-400 text-sm">{formatDate(item.bookmarkedAt)}</p>
                                </div>
                                <button
                                    onClick={() => deleteLink(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                    style={{ minWidth: '80px' }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </>)
            }
        </div >
    );
};

export default LinkList;
