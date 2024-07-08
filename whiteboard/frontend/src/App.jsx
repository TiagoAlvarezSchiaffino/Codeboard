import { Excalidraw } from "@excalidraw/excalidraw"
import {Quit} from "../wailsjs/runtime/runtime"

function App() {
    return (
        <>
            <main style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button 
                    onClick={Quit} 
                    className="quit-button"
                >
                    Quit
                </button>
                <Excalidraw />
            </main>
        </>
    )
}

export default App
