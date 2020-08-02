import React from 'react';
import {EmployeesStore} from "./employeesStore";

type State = {
    employeesStore: EmployeesStore
}

const StateContext = React.createContext<State>({} as State);

const store: State = {
    employeesStore: new EmployeesStore()
}

export const StateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <StateContext.Provider value={store}>
            {children}
        </StateContext.Provider>
    );
}

export const useRootState = () => React.useContext(StateContext);