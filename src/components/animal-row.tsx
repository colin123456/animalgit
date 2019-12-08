import * as React from 'react';

import { IAnimal } from '../components/models/animal';

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
            <div>
                {animalRow.animalid}  
                {animalRow.name} {animalRow.type} {animalRow.age}  
                    <button onClick={(e) => this.onAnimalRemove(animalRow.animalid)}>Remove </button>
            </div> 
        )
    }
}

export default AnimalRow;