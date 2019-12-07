import React from 'react';
import AnimalRow from '../components/animal-row'
import { IAnimal } from '../components/models/animal';


interface AnimalListProps { animals: Array<IAnimal> }

interface AmimalListState { }

class AnimalList extends React.Component<AnimalListProps, AmimalListState> {
    constructor(props: AnimalListProps) {
        super(props);

    }

    render() {

        const animals = this.props.animals.map((animal) => {
            return <AnimalRow animalRow={animal} key={animal.animalid}  />
            }
        )

        return (
            <div>
                <div className="animal-list">{animals}</div>
            </div>
        )
    }
}

export default AnimalList;