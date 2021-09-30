/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import {store} from '..';
import {GET_PATIENT, HANDLE_TEXT_CHANGE_PATIENT,PATIENT_VALIDATION, RESET_PATIENT} from '../types/patientTypes';

const API_URL = process.env.REACT_APP_API_URL;

export const handleTextChange = (dispatch, value, name) => {
  let patient = {...store.getState().patientReducer.patient};
  patient[name] = value;
  dispatch({type: HANDLE_TEXT_CHANGE_PATIENT, payload: patient});
};

export const addPatient = async (dispatch) => {
  try {
    let patient = {...store.getState().patientReducer.patient};

    await axios.post(
        API_URL,
      patient,
    );
    patient = {
        name: '',
        guardianName: '',
        address: '',
        city: '',
        phone: '',
        age: '',
        reference: '',
        visited: '',
    }

    dispatch({type: RESET_PATIENT, payload: patient});

  } catch (error) {

    console.log(error);
    console.log('Api failed');

  }
};

export const getPatient = async (dispatch) => {
    try {
        let {data} = await axios.get(
            API_URL,
        );
        dispatch({type: GET_PATIENT, payload: data.patients});
    } catch (e) {
        console.log("Error :", e);
    }
}

export const validate = (dispatch) => {

    let patient = {...store.getState().patientReducer.patient};
    let errors = {...store.getState().patientReducer.errors};
    errors = {}
    let check = true;
    
    if(!patient.name){
        errors.name = "Please enter the name";
        check = false
    }
    if(!patient.guardianName){
        errors.guardianName = "Please enter the guardian name";
        check = false
    }
    if(!patient.address){
        errors.address = "Please enter the address";
        check = false
    }
    if(!patient.city){
        errors.city = "Please enter the city";
        check = false
    }
    if(!patient.phone){
        errors.phone = "Please enter the phone";
        check = false
    }
    if(!patient.age){
        errors.age = "Please enter the age";
        check = false
    }
    if(!patient.reference){
        errors.reference = "Please enter the reference";
        check = false
    }
    if(!patient.visited){
        errors.visited = "Please enter the visited";
        check = false
    }

    dispatch({type: PATIENT_VALIDATION, payload: errors})

    return check;
};