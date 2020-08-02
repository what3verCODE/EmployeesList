import React from 'react'
import {Employee} from "../../core/models/employee";

import './styles.scss';
import {Tag} from "../Tag";
import {Gender} from "../../core/enums/gender";

type EmployeeRowProps = {
    employee: Employee
    onClick(): void;
}

export const EmployeeRow: React.FC<EmployeeRowProps> = ({employee, onClick}) => {

    return (
        <tr className="employee" onClick={() => onClick()}>
            <td className="employee_name">
                {employee.name}
            </td>

            <td className="employee_gender">
                {employee.gender != null
                    ? employee.gender === Gender.Male
                        ? "М"
                        : "Ж"
                    : ""}
            </td>

            <td className="employee_position">
                {employee.position}
            </td>

            <td className="employee_date">
                {employee.dateOfBirth != null
                    ? employee.dateOfBirth.toLocaleDateString()
                    : "Не указан"
                }
            </td>

            <td className="employee_is-fired">
                {employee.isFired
                    ? <Tag value='Уволен' status='danger'/>
                    : <Tag  value='Работает' status='success'/>
                }
            </td>
        </tr>
    )
}