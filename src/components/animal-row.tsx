import * as React from 'react';

import { IAnimal } from '../components/models/animal';

export interface IAnimalRowProps {
    animalRow: IAnimal;
}


export interface IAnimalRowState {
   
}

 class AnimalRow extends React.Component<IAnimalRowProps, IAnimalRowState> {
    constructor(props: IAnimalRowProps) {
        super(props);

    }

    render() {
        const { animalRow } = this.props;
        return (
            
         <div>{animalRow.animalid}  {animalRow.name} {animalRow.type} {animalRow.age}</div> 

        )
    }
}

export default AnimalRow;