/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { addPatient, getPatient, handleTextChange, validate } from '../redux/actions/patientActions';

const CreatePatient = (props) => {
    
    const { patient, errors, patients } = props;

    const handleSubmit = () => {

        if(props.validate()){
            //Submit the form
            props.addPatient()
        }
    }    

    return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}> Create Patient </Text>
      <TextInput
        style={styles.txtInput}
        label="Name"
        value={patient.name}
        onChangeText={text => props.handleTextChange(text, "name")}
      />
      {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
      <TextInput
        style={styles.txtInput}
        label="Guardian Name"
        value={patient.guardianName}
        onChangeText={text => props.handleTextChange(text, "guardianName")}
        />
        {errors.guardianName && <Text style={styles.errors}>{errors.guardianName}</Text>}
      <TextInput
        style={styles.txtInput}
        label="Address"
        value={patient.address}
        onChangeText={text => props.handleTextChange(text, "address")}
        />
        {errors.address && <Text style={styles.errors}>{errors.address}</Text>}
      <TextInput
        style={styles.txtInput}
        label="City"
        value={patient.city}
        onChangeText={text => props.handleTextChange(text, "city")}
        />
        {errors.city && <Text style={styles.errors}>{errors.city}</Text>}
      <TextInput
        style={styles.txtInput}
        label="Phone"
        value={patient.phone}
        onChangeText={text => props.handleTextChange(text, "phone")}
        />
        {errors.phone && <Text style={styles.errors}>{errors.phone}</Text>}
      <TextInput
        style={styles.txtInput}
        label="Age"
        value={patient.age}
        onChangeText={text => props.handleTextChange(text, "age")}
        />
        {errors.age && <Text style={styles.errors}>{errors.age}</Text>}
      <TextInput
        style={styles.txtInput}
        label="Reference"
        value={patient.reference}
        onChangeText={text => props.handleTextChange(text, "reference")}
        />
        {errors.reference && <Text style={styles.errors}>{errors.reference}</Text>}
      <TextInput
        style={styles.txtInput}
        label="Visited"
        value={patient.visited}
        onChangeText={text => props.handleTextChange(text, "visited")}
        />
        {errors.visited && <Text style={styles.errors}>{errors.visited}</Text>}

        <Button mode = {'contained'} style={styles.btn}
            onPress={ () => handleSubmit()}>
            Save
        </Button>

        <Button mode = {'contained'} style={styles.btn}
            onPress={() => props.getPatient()}>
            Get Patient
        </Button>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
    patient: state.patientReducer.patient,
    errors: state.patientReducer.errors,
    patients: state.patientReducer.patients,
})

const mapDispatchToProps = (dispatch) => ({
    handleTextChange: (value, name) => handleTextChange(dispatch, value, name),
    addPatient: () => addPatient(dispatch),
    validate: () => validate(dispatch),
    getPatient: () => getPatient(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(CreatePatient);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 22,
  },
  txtInput: {
      marginVertical: 5,
      backgroundColor: "#fff"
  },
  btn: {
      marginVertical: 10,
  },
  errors: {
      color: 'red'
  }
})