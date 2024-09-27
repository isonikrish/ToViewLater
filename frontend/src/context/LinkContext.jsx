import React, { createContext, useState, useEffect } from 'react';

export const LinkContext = createContext();

const LinkProvider = ({ children }) => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        // Load links from local storage
        const storedLinks = JSON.parse(localStorage.getItem('links')) || [];
        setLinks(storedLinks);
    }, []);

    const addLink = (link, note) => {
        const newLink = { id: Date.now(), link, note };
        const updatedLinks = [...links, newLink];

        setLinks(updatedLinks);
        // Save the updated links array to local storage
        localStorage.setItem('links', JSON.stringify(updatedLinks));
    };

    const deleteLink = (id) => {
        const updatedLinks = links.filter(link => link.id !== id);
        setLinks(updatedLinks);
        // Update local storage
        localStorage.setItem('links', JSON.stringify(updatedLinks));
    };

    const getCurrentUrl = async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        return tab.url
    }

    return (
        <LinkContext.Provider value={{ links, addLink, deleteLink, getCurrentUrl }}>
            {children}
        </LinkContext.Provider>
    );
};

export default LinkProvider;
