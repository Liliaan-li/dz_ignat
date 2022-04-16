import React, {ChangeEvent} from 'react'
import s from '../h4/common/c1-SuperInputText/SuperInputText.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : " Введите имя!"// need to fix with (?:)
    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                error={error}
                className={inputClass}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        addUser()
                    }
                }}
            />
            <SuperButton onClick={addUser} disabled={name === ""}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
