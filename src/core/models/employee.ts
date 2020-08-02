import {Gender} from "../enums/gender";

export interface Employee {
    name: string;
    position: string;
    dateOfBirth?: Date;
    gender?: Gender;
    isFired?: boolean;
}
