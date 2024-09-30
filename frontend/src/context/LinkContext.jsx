import React, { createContext, useState, useEffect } from 'react';
import icon from '../../public/icons/logo.png'
export const LinkContext = createContext();

const LinkProvider = ({ children }) => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        // Load links from local storage
        const storedLinks = JSON.parse(localStorage.getItem('links')) || [];
        setLinks(storedLinks);
        // // Schedule notifications for all existing links with reminders
        // storedLinks.forEach(link => {
        //     if (link.reminder) {
        //         scheduleNotification(link);
        //     }
        // });
    }, []);

    const addLink = (link, note, category) => {
        const newLink = {
            id: Date.now(),
            link,
            note,
            bookmarkedAt: new Date().toISOString(),
            category,
        };
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
        try {
            const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
            return tab.url;
        } catch (error) {
            console.error('Error fetching current tab URL:', error);
            return '';
        }
    }


    return (
        <LinkContext.Provider value={{ links, addLink, deleteLink, getCurrentUrl }}>
            {children}
        </LinkContext.Provider>
    );
};

export default LinkProvider;