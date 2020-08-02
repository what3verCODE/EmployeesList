import React from 'react';

import {Employee} from "./core/models/employee";
import {EmployeesList} from "./components/EmployeesList";
import {EmployeeForm} from "./components/EmployeeForm";

import {useObserver} from 'mobx-react'
import {useRootState} from "./core/store/store";

import './App.scss';

export const App = () => {
    const store = useRootState();

    const [selected, setSelected] = React.useState<number | undefined>();

    const onEmployeeCreate = (employee: Employee) => {
        //validate current employee
        if (selected != null) {
            const selectedEmployee = {...store.employeesStore.employees[selected]}
            if(selectedEmployee.name === "" || selectedEmployee.position === "") return;
        }

        //call mobx action
        store.employeesStore.addEmployee(employee);
        //set selected to last index
        setSelected(store.employeesStore.employees.length - 1);
    }
    const onEmployeeRemove = (index: number) => {
        //set selected to undefined
        setSelected(undefined)
        //call mobx action
        store.employeesStore.removeEmployee(index)
    }

    const onEmployeeEdit = (index: number, employee: Employee) => {
        //call mobx action
        store.employeesStore.editEmployee(index, employee)
    }

    const onRowSelection = (index: number) => setSelected(index)

    return useObserver(() => (
        <div className="wrapper">
            <div className="heading">
                <ul>
                    <li className="btn btn-success"
                        onClick={() =>
                            onEmployeeCreate({name: "Введите имя", position: "Введите должность"})
                        }
                    >
                        Добавить нового сотрудника
                    </li>

                    <li className={selected != null ? "btn btn-success" : "btn btn-success btn-disabled"}
                        onClick={() => {
                            if (selected != null) onEmployeeRemove(selected)
                            else return;
                        }}
                    >
                        Удалить выбранного сотрудника
                    </li>
                </ul>
            </div>

            <div className="sections">
                <div className="left-side">
                    <EmployeesList employees={store.employeesStore.employees}
                                   selected={selected}
                                   onRowSelection={i => onRowSelection(i)}
                    />
                </div>

                <div className="right-side">
                    {selected != null
                        ? <EmployeeForm employee={store.employeesStore.employees[selected]}
                                        onEmployeeEdit={(e) => onEmployeeEdit(selected, e)}
                        />
                        : null
                    }
                </div>
            </div>
        </div>
    ));
}
