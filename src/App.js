import "./App.css";
import Home from "./components/Home";
import Error from "./components/Error";
import { Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
    return (
        <div className="App">
            <ul>
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <Link to={"/users"}>
                    <li>Users</li>
                </Link>
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
