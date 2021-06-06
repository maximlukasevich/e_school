import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./store/CurrentUser/action";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Class from "./components/Classes/Class";
import Classes from "./components/Classes/Classes";
import UserProfile from "./components/UserProfile/UserProfile";
import UserSettings from "./components/UserProfile/UserSettings";
import Footer from "./components/Footer/Footer";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])


    const isAuth = useSelector(state => state.user.isAuth)
    const user = useSelector(state => state.user.user)
    let userId
    if (user) {
        userId = user._id
    }


    return (
        <BrowserRouter>
            <Navigation />
                <Switch>
                    {!isAuth && <>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/registration'>
                            <Registration />
                        </Route>
                        <Redirect to='/login' />
                    </> }
                    {isAuth && <>
                        <Route exact path='/classes/'>
                            <Classes />
                        </Route>
                        <Route exact path='/classes/:className'>
                            <Class />
                        </Route>
                        <Route exact path='/users/:userId'>
                            <UserProfile />
                        </Route>
                        <Route exact path={`/users/${userId}/settings`}>
                            <UserSettings />
                        </Route>
                        <Redirect to={`/users/${userId}`} />
                    </> }
                </Switch>
            <Footer />
        </BrowserRouter>
    );
};
export default App;
