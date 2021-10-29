import Person from '../types/Person'

interface PersonProps{
    person: Person;
}

/*
*
* Componente para visualizar la información de la persona
* Los datos se pasan por medio de props
*
*/

const PersonItem: React.FC<PersonProps> = props => {
    return (<p>{`${props.person.name} (${props.person.birth_year}-${props.person.death_year})`}</p>)

}

export default PersonItem;