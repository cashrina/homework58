import './App.css'
import Users from "./components/Users/Users.tsx";
import {useState} from "react";
import {User} from "./types.ts";
import Cat from '../src/assets/cat.png';
import Crab from '../src/assets/crab.png';
import Elephant from '../src/assets/elephant.png';
import Fish from '../src/assets/fish.png';
import Frog from '../src/assets/frog.png';
import Giraffe from '../src/assets/giraffe.png';
import Owl from '../src/assets/owl.png';
import Penguin from '../src/assets/penguin.png';
import Platypus from '../src/assets/platypus.png';
import Rabbit from '../src/assets/rabbit.png';
import Shark from '../src/assets/shark.png';
import Sheep from '../src/assets/sheep.png';

const App = () => {
    const [user, setUser] = useState<User[]>([
        { id: '1', name: 'Cat', email: 'john@example.com', active: true, role: 'user', img: Cat },
        { id: '2', name: 'Elephant', email: 'jane@example.com', active: false, role: 'editor', img: Elephant},
        { id: '3', name: 'Fish', email: 'fish@example.com', active: true, role: 'administrator', img:Fish },
        { id: '4', name: 'Frog', email: 'frog@example.com', active: true, role: 'administrator', img:Frog },
        { id: '5', name: 'Giraffe', email: 'giraffe@example.com', active: true, role: 'administrator', img:Giraffe },
        { id: '6', name: 'Owl', email: 'owl@example.com', active: true, role: 'administrator', img:Owl },
        { id: '7', name: 'Penguin', email: 'penguin@example.com', active: true, role: 'administrator', img:Penguin },
        { id: '8', name: 'Platypus', email: 'platypus@example.com', active: true, role: 'administrator', img:Platypus },
        { id: '9', name: 'Rabbit', email: 'rabbit@example.com', active: true, role: 'administrator', img:Rabbit },
        { id: '10', name: 'Shark', email: 'shark@example.com', active: true, role: 'administrator', img:Shark },
        { id: '11', name: 'Sheep', email: 'sheep@example.com', active: true, role: 'administrator', img:Sheep },
        { id: '12', name: 'Crab', email: 'crab@example.com', active: true, role: 'user', img: Crab },
    ]);

    return (
        <div className="container">
            <div className="row justify-content-center col-12 flex-wrap">
                <div className="col-4">
                    <Users userItem={user}/>
                </div>
            </div>
        </div>
    )
};

export default App
