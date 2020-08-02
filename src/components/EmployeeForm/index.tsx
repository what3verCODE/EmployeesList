import React from 'react'
import {Employee} from "../../core/models/employee";

import './styles.scss'
import {Gender} from "../../core/enums/gender";

type EmployeeFormProps = {
    employee: Employee
    onEmployeeEdit(employee: Employee): void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({employee, onEmployeeEdit}) => {
    const onNameChange = (name: string) => onEmployeeEdit({...employee, name})
    const onPositionChange = (position: string) => onEmployeeEdit({...employee, position})
    const onGenderChange = (gender: Gender) => onEmployeeEdit({...employee, gender})
    const onDateChange = (date: string) => onEmployeeEdit({...employee, dateOfBirth: new Date(date)})
    const onFiredChange = () => onEmployeeEdit({...employee, isFired: !employee.isFired})

    return (
        <form className='employee-form'>
            <div className="form-input required">
                <label htmlFor="name">ФИО:</label>
                <input name='name' type='text' value={employee.name} onChange={e => onNameChange(e.target.value)} required/>
            </div>

            <div className="form-input required">
                <label htmlFor="position">Должность:</label>
                <input name='position' type='text' value={employee.position} onChange={e => onPositionChange(e.target.value)} required/>
            </div>

            <div className="form-input form-select">
                <label htmlFor="gender">Пол:</label>
                <select name="gender" id="gender" onChange={(e) => onGenderChange(Number.parseInt(e.target.value))}>
                    <option value={Gender.Male}>Мужской</option>
                    <option value={Gender.Female}>Женский</option>
                </select>
            </div>

            <div className="form-input form-date">
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input name='dateOfBirth' type='date' value={(new Date()).toISOString().substring(0, 10)} onChange={e => onDateChange(e.target.value)}/>
            </div>

            <div className="form-input form-checkbox">
                <label htmlFor="isFired">Уволен:</label>
                <input name='isFired' type='checkbox' checked={employee.isFired} onChange={() => onFiredChange()}/>
            </div>
        </form>
    )
}