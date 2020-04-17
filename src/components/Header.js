import React from 'react'
import { useAppState } from '../AppContext'


const Header = () => {
    let [{toRead,completed}, dispatch] = useAppState()
    return (
        <div>
            <header className="App-header"> Reading Challenge 
    <p>We read {completed.length} out of {toRead.length}</p>
            </header>
            
        </div>
    )
}

export default Header;