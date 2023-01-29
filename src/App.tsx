// Pacakges
import { Outlet } from 'react-router-dom'

// Components
import { Helmet } from 'react-helmet'
import ResponsiveAppBar from './components/common/nav/ResponsiveAppBar'

// Hooks
// Utils
// Types

// Material UI fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Styles
import './App.css'

function App() {
    return (
        <div className="App">
            <Helmet>
                <title> Wish It Web App</title>
            </Helmet>
            <ResponsiveAppBar />
            <Outlet />
        </div>
    )
}

export default App
