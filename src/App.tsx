import React from 'react';
import AnimalList from '../src/components/animal-list';

import { IAnimal } from '../src/components/models/animal';
import './App.css';



interface AnimalListProps { }

interface AnimalListState { 
  
  animals: Array<IAnimal>;
  animalSortByNameAsc: boolean;


}

class App extends React.Component<AnimalListProps, AnimalListState> {
  constructor(props: AnimalListProps) {
    super(props);

    this.state = {animals: this.animalList(), animalSortByNameAsc: true}

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


onAnimalAdd = (animal: IAnimal) => {
  const maxAnimalId = Math.max(...this.state.animals.map(o => o.animalid), 0);
  animal.animalid = maxAnimalId + 1;
  this.setState({ animals: [...this.state.animals, animal] }) 
}

onAnimalSortByName = () => {
  this.state.animalSortByNameAsc ? this.onAnimalSortByNameAsc() : this.onAnimalSortByNameDesc();
}


onAnimalSortByNameAsc = () => {
// sort by name
const sortedByName = this.state.animals.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); 
  var nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
})

this.setState({animals: sortedByName, animalSortByNameAsc: false});
}

onAnimalSortByNameDesc = () => {
  // sort by name
  const sortedByName = this.state.animals.sort(function(b, a) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  
  this.setState({animals: sortedByName, animalSortByNameAsc: true});
  }


  render() {
    return (
      <React.Fragment>
        <div className="container">

        <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Animal Zoo Time</span>
              <span className="heading-primary-sub">Zoo Grid</span>
            </h1>
          </div>
          
              <AnimalList animals={this.state.animals} onAnimalRemove={this.onAnimalRemove} onAnimalAdd={this.onAnimalAdd} onAnimalSortByName={this.onAnimalSortByName} />
             
         
        </div>
      </React.Fragment>
    );
  }
}

export default App;

