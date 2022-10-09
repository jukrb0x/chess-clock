import './App.css'
import Clock from "./components/Clock/index.jsx";

function DisableScroll() {
    document.body.style.overflow = 'hidden';
}

function App() {
    DisableScroll();
    return (
        <div className="App">
            <Clock/>
        </div>
    )
}

export default App;