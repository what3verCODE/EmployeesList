import React from 'react';
import {Employee} from "../../core/models/employee";
import {EmployeeRow} from "../EmployeeRow";

import './styles.scss'

type EmployeesListProps = {
    employees: Employee[]
    onRowSelection(index: number): void;
}

export const EmployeesList: React.FC<EmployeesListProps> = ({employees, onRowSelection}) => {

    return (
        <table className='employees'>
            <thead className='employees-heading'>
                <tr>
                    <th style={{width: '35%'}}>ФИО</th>
                    <th style={{width: '10%'}}>Пол</th>
                    <th style={{width: '20%'}}>Должность</th>
                    <th style={{width: '20%'}}>Дата рождения</th>
                    <th style={{width: '15%', textAlign: 'center'}}>Статус</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee, index) =>
                    <EmployeeRow
                        key={index}
                        employee={employee}
                        onClick={() => onRowSelection(index)}
                    />)
                }
            </tbody>

        </table>
    )
}