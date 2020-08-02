import React from 'react';
import {EmployeesStore} from "./employeesStore";

type State = {
    employeesStore: EmployeesStore
}

const store: State = {
    employeesStore: new EmployeesStore()
}


const StateContext = React.createContext<State>({} as State);

export const StateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <StateContext.Provider value={store}>
            {children}
        </StateContext.Provider>
    );
}

export const useRootState = () => React.useContext(StateContext);