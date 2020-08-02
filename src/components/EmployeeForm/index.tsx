import React, {useState} from 'react'
import {Employee} from "../../core/models/employee";

import './styles.scss'
import {Gender} from "../../core/enums/gender";

type EmployeeFormProps = {
    employee: Employee
    onEmployeeEdit(employee: Employee): void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({employee, onEmployeeEdit}) => {
    const [formErrors, setFormErrors] = useState({name: '', position: ''})

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        const errors = {...formErrors}

        switch (name) {
            case "name":
                errors.name = value.length === 0 ? "Поле 'ФИО' не может быть пустым" : ""
                onNameChange(value)
                break;
            case "position":
                errors.position = value.length === 0 ? "Поле 'Должность' не может быть пустым" : ""
                onPositionChange(value)
                break;
            case "gender":
                onGenderChange(Number.parseInt(value))
                break;
            case "dateOfBirth":
                onDateChange(value);
                break;
            case "isFired":
                onFiredChange();
                break;
            default:
                break;
        }

        setFormErrors({...errors})
    }

    const onNameChange = (name: string) => onEmployeeEdit({...employee, name})
    const onPositionChange = (position: string) => onEmployeeEdit({...employee, position})
    const onGenderChange = (gender: Gender) => onEmployeeEdit({...employee, gender})
    const onDateChange = (date: string) => onEmployeeEdit({...employee, dateOfBirth: new Date(date)})
    const onFiredChange = () => onEmployeeEdit({...employee, isFired: !employee.isFired})

    return (
        <form className='employee-form' noValidate>
            <div className="form-input required">
                <label htmlFor="name">ФИО:</label>
                <input name='name'
                       type='text'
                       className={formErrors.name.length > 0 ? "is-invalid" : ""}
                       value={employee.name}
                       onChange={(e) => onFormChange(e)}
                       required
                />
                {formErrors.name.length > 0 && (
                    <span className='form-input_invalid'>{formErrors.name}</span>
                )}
            </div>

            <div className="form-input required">
                <label htmlFor="position">Должность:</label>
                <input name='position'
                       type='text'
                       className={formErrors.position.length > 0 ? "is-invalid" : ""}
                       value={employee.position}
                       onChange={e => onFormChange(e)}
                       required
                />
                {formErrors.position.length > 0 && (
                    <span className='form-input_invalid'>{formErrors.position}</span>
                )}
            </div>

            <div className="form-input form-radio-group">
                <label htmlFor="gender">Пол:</label>
                <div>
                    <input type="radio"
                           name="gender"
                           id="gender-male"
                           value={Gender.Male}
                           checked={employee.gender === Gender.Male}
                           onChange={e => onFormChange(e)}
                    />
                    <label htmlFor="gender-male">Мужчина</label>
                </div>

                <div>
                    <input type="radio"
                           name="gender"
                           id="gender-female"
                           value={Gender.Female}
                           checked={employee.gender === Gender.Female}
                           onChange={e => onFormChange(e)}
                    />
                    <label htmlFor="gender-female">Женщина</label>
                </div>

            </div>

            <div className="form-input form-date">
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input name='dateOfBirth'
                       type='date'
                       value={employee.dateOfBirth != null
                           ? employee.dateOfBirth.toISOString().substring(0, 10)
                           : (new Date()).toISOString().substring(0, 10)
                       }
                       onChange={e => onFormChange(e)}
                />
            </div>

            <div className="form-input form-checkbox">
                <label htmlFor="isFired">Уволен:</label>
                <input name='isFired'
                       id="isFired"
                       type='checkbox'
                       checked={employee.isFired}
                       onChange={e => onFormChange(e)}
                />
            </div>
        </form>
    )
}