import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";

function App() {
    return (
        <div>
            <Navigation />
            <h1>app.js</h1>
            <Login />
            <Registration />
        </div>
    );
}

export default App;
