import React from "react";
import {useNavigate} from "react-router-dom"; // Use for internal navigation

const HomePage = () => {
    const navigate = useNavigate();

    // Function to handle redirection
    const handleRedirect = (url, isExternal = false) => {
        if (isExternal) {
            // For external URLs, open in a new tab
            window.open(url, "_blank", "noopener,noreferrer");
        } else {
            // For internal navigation using React Router
            navigate(url);
        }
    };

    return (
        <div>
            <div className="home-header">
                <h1>Pluralsight Administration</h1>
            </div>
            <div className="home-intro">
                <h4 className="tw-font-semibold">
                    This React and Redux project involves building a dynamic application that manages state effectively
                    using Redux, with React Router for navigation and asynchronous actions for loading data via API
                    calls. I’ve implemented a mock API using Express and JSON Server for testing purposes. Tailwind CSS
                    is used for styling, and user interactions like adding and deleting courses are handled with toast
                    notifications. The project includes modular components, error handling, loading spinners, and state
                    updates to ensure smooth user experience.
                </h4>
            </div>

            <div className="useful-links">
                <button className="app-btn app-btn-primary"
                        onClick={() => handleRedirect("https://github.com/pete85/react-redux-demo", true)}>
                    Github
                </button>

                <button className="app-btn app-btn-primary"
                        onClick={() => handleRedirect("https://reactrouter.com/en/main", true)}>
                    React Router
                </button>

                <button className="app-btn app-btn-primary"
                        onClick={() => handleRedirect("https://react-redux.js.org/api/hooks", true)}>
                    React Redux Hooks
                </button>

                <button className="app-btn app-btn-primary"
                        onClick={() => handleRedirect("https://pete85.com", true)}>
                    pete85
                </button>
            </div>
        </div>
    )
        ;
};

export default HomePage;
