import * as React from 'react';

import { IAnimal } from '../components/models/animal';
import './animal-list.css';

export interface IAnimalRowProps {
    animalRow: IAnimal;
    onAnimalRemove(id: number) : void;
}


export interface IAnimalRowState {
   
}

 class AnimalRow extends React.Component<IAnimalRowProps, IAnimalRowState> {
    // constructor(props: IAnimalRowProps) {
    //     super(props);

    // }

    onAnimalRemove = (id: number) => {
        this.props.onAnimalRemove(id);
    }

    render() {
        const { animalRow } = this.props;
        return (
            <li className="enforcement-app-period-row-container"> 
                {animalRow.animalid}   
                {animalRow.name} is a {animalRow.type} who is {animalRow.age} years old  
                    <button onClick={(e) => this.onAnimalRemove(animalRow.animalid)}>Remove </button>
            </li> 
        )
    }
}

export default AnimalRow;