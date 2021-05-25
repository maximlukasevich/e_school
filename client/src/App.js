import './App.css'
import NavbarPanel from "./components/NavbarPanel/NavbarPanel";
import Login from "./components/Auth/Login/Login";
import Registration from "./components/Auth/Registration/Registration";

function App() {
    return (
        <div>
            <h1>app.js</h1>
            <NavbarPanel auth={true} role={'Адмін'} username={'maxim.lukasevich@gmail.com'}/>
            <Login />
            <Registration />
        </div>
    )
}

export default App
