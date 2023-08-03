import './App.css'
import ButtonCounter from "./components/ButtonCounter";
import ProfileCard from "./components/ProfileCard";

function App () {
    return (
        <div className="App">
            <div className='containerBC'>
                <ButtonCounter />
            </div>
            <div className='containerPC'>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
            </div>

        </div>
    );
}

export default App;