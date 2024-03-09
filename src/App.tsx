import React from 'react';
import logo from './logo.svg';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';
import './App.css';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const teamList = CollegeBasketballTeams.teams;

function Heading() {
  return <h1>WELCOME TO MARCH MADNESS!</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h3>Team: {oneTeam.school}</h3>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          City/State: {oneTeam.city}, {oneTeam.state}
        </h3>
        <br />
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      <h2>Team List</h2>
      <br />

      {teamList.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
