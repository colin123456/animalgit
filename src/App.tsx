// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import AnimalList from '../src/components/animal-list';

import { IAnimal } from '../src/components/models/animal';
import './App.css';



interface AnimalListProps { }

interface AnimalListState { 
  
  animals: Array<IAnimal>;


}

class App extends React.Component<AnimalListProps, AnimalListState> {
  constructor(props: AnimalListProps) {
    super(props);

    this.state = {animals: this.animalList()}

  }

  animalList = () => {

    let animals: Array<IAnimal> = [
                    {animalid: 1, name: "Tom", type: "Cat", age: 5},
                    {animalid: 2, name: "Jerry", type: "Mouse", age: 2},
                    {animalid: 3, name: "Scooby", type: "Dog", age: 5},
                    {animalid: 4, name: "Maria", type: "Bird", age: 5},
                    {animalid: 5, name: "Jaws", type: "Fish", age: 5}
                ]
    return (
              animals
    )
   
}

onAnimalRemove = (id: number) => {
  const filteredAnimals = this.state.animals.filter((animal) => {
    return animal.animalid !== id;
  })

  this.setState({animals: filteredAnimals});
}



  render() {
    return (
      <React.Fragment>
          <div>        
            <AnimalList animals={this.state.animals} onAnimalRemove={this.onAnimalRemove} />
          </div>
      </React.Fragment>

    );
  }
}

export default App;

