import { useState } from 'react'
import ResponsiveAppBar from './components/common/nav/ResponsiveAppBar'
// Material UI fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <ResponsiveAppBar />
        </div>
    )
}

export default App
