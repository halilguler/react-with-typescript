import React from 'react';
import {IState as IProps} from "../App";

const List: React.FC<IProps> = (props: IProps) => {
    const {people} = props;

    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return <li key={index} className={"List"}>
                <div className={"List-header"}>
                    <img className={"List-img"} src={person.imageUrl} alt={person.note}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age}</p>
                <p className={"List-note"}>{person.note}</p>
            </li>
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default List;