import './App.css'
import Users from "./components/Users/Users.tsx";
import {useState} from "react";
import {User} from "./types.ts";
import Cat from '../src/assets/cat.png';
import Fish from '../src/assets/fish.png';
import Frog from '../src/assets/frog.png';

const App = () => {
    const [user, setUser] = useState<User[]>([
        { id: '1', name: 'Cat', email: 'john@example.com', active: true, role: 'user', img: Cat },
        { id: '3', name: 'Fish', email: 'fish@example.com', active: true, role: 'editor', img:Fish },
        { id: '4', name: 'Frog', email: 'frog@example.com', active: true, role: 'administrator', img:Frog },
    ]);

    return (
        <div className="container">
            <div className="row justify-content-center flex-wrap">
                <div className="col-4">
                    <Users userItem={user}/>
                </div>
            </div>
        </div>
    )
};

export default App
