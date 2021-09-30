/* eslint-disable prettier/prettier */
import {GET_PATIENT, HANDLE_TEXT_CHANGE_PATIENT, PATIENT_VALIDATION,RESET_PATIENT} from '../types/patientTypes';

/* eslint-disable prettier/prettier */
let initialState = {
    patient: {
        name: '',
        guardianName: '',
        address: '',
        city: '',
        phone: '',
        age: '',
        reference: '',
        visited: '',
    },
    errors: {},
    patients: []
}

export const patientReducer = (state = initialState, action) => {
    switch (action.type) {

        case HANDLE_TEXT_CHANGE_PATIENT:
            return {...state, patient: action.payload};

        case PATIENT_VALIDATION:
            return {...state, errors: action.payload};
        case RESET_PATIENT:
            return {...state, patient: action.payload};
        case GET_PATIENT:
            return {...state, patients: action.payload};
        default:
            return state;
    }
}