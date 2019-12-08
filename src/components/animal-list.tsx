import React from 'react';
import AnimalRow from '../components/animal-row'
import { IAnimal } from '../components/models/animal';


interface AnimalListProps { 
    
    animals: Array<IAnimal> ;
    onAnimalRemove(id: number) : void;
    onAnimalAdd(animal: IAnimal) : void; 
}

interface AmimalListState { 
    animalNew: IAnimal | null;
    name: string;
    type: string;
    age: number;

}

class AnimalList extends React.Component<AnimalListProps, AmimalListState> {
    constructor(props: AnimalListProps) {
        super(props);
        this.state = {animalNew: null, name: '', type: '', age: 0}
    }

    onAnimalAdd = (name: string, type: string, age: number) => {
        const animalNew: IAnimal = {
            animalid: 0,
            name: name,
            type: type,
            age: age
        }
        this.props.onAnimalAdd(animalNew);
    }


    handleNameChange = (event: any) => {
        this.setState({ name: event.target.value });
    }

    handleTypeChange = (event: any) => {
        this.setState({ type: event.target.value });
    }

    handleAgeChange = (event: any) => {
        this.setState({ age: event.target.value });
    }


    handleSubmit = (event: any) => {
        this.onAnimalAdd(this.state.name, this.state.type, this.state.age);
        event.preventDefault();
    }

    render() {

        const animals = this.props.animals.map((animal) => {
            return <AnimalRow animalRow={animal} onAnimalRemove={this.props.onAnimalRemove}  key={animal.animalid}  />
            });

        const addForm =  <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                            </label>
                            <label>
                                Type:
                                <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
                            </label>
                            <label>
                                Age:
                                <input type="text" value={this.state.age} onChange={this.handleAgeChange} />
                            </label>

                                <input type="submit" value="Submit" />
                        </form>
        

        return (
            <div>
                <div>{addForm}</div>

                <div className="animal-list">{animals}</div>
            </div>
        )
    }
}

export default AnimalList;