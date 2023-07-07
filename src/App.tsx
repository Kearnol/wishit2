import React from 'react';
// Pacakges
import { Outlet } from 'react-router-dom';

// import { getFireStore } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Components
import { Helmet } from 'react-helmet';
import ResponsiveAppBar from 'src/components/Common/Nav/ResponsiveAppBar';

// Hooks
// Utils
// Types
// Styles
import './App.css';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title> Wish It Web App</title>
            </Helmet>
            <ResponsiveAppBar />
            <Outlet />
        </div>
    );
}

export default App;
