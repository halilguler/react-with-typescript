import React from 'react';
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = (props: IProps) => {

    const [input, setInput] = React.useState({
        name: "",
        age: 0,
        note: "",
        imageUrl: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.imageUrl) {
            return
        }
        props.setPeople([...props.people, {
            name: input.name,
            age: input.age,
            imageUrl: input.imageUrl,
            note: input.note
        }]);
        setInput({
            name: "",
            age: 0,
            note: "",
            imageUrl: "",
        })
    }

    return (
        <div className={"AddToList"}>
            <input type={"text"}
                   placeholder={"Name"}
                   className={"AddToList-input"}
                   value={input.name}
                   onChange={handleChange}
                   name={"name"}
            />
            <input type={"number"}
                   placeholder={"Age"}
                   className={"AddToList-input"}
                   value={input.age}
                   onChange={handleChange}
                   name={"age"}
            />
            <input type={"text"}
                   placeholder={"ImageUrl"}
                   className={"AddToList-input"}
                   value={input.imageUrl}
                   onChange={handleChange}
                   name={"imageUrl"}
            />
            <textarea
                placeholder={"Note"}
                className={"AddToList-input"}
                value={input.note}
                onChange={handleChange}
                name={"note"}
            />
            <button className={"AddToList-btn"} onClick={() => handleClick()}>
                Add to List
            </button>
        </div>
    )
}
export default AddToList;