/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { getPatient } from '../redux/actions/patientActions';


const PatientList = (props) => {

    useEffect(() => {
        props.getPatient();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.patient}>
            <Text><Text style={styles.heading}>Name:</Text><Text style={styles.value}>{item.name}</Text></Text>
            <Text><Text style={styles.heading}>guardianName:</Text><Text style={styles.value}>{item.guardianName}</Text></Text>
            <Text><Text style={styles.heading}>address:</Text><Text style={styles.value}>{item.address}</Text></Text>
            <Text><Text style={styles.heading}>age:</Text><Text style={styles.value}>{item.age}</Text></Text>
            <Text><Text style={styles.heading}>phone:</Text><Text style={styles.value}>{item.phone}</Text></Text>
            <Text><Text style={styles.heading}>reference:</Text><Text style={styles.value}>{item.reference}</Text></Text>
            <Text><Text style={styles.heading}>visited:</Text><Text style={styles.value}>{item.visited}</Text></Text>
            
        </View>
      );

    const { patients } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Patient List</Text>
            <FlatList
                data={patients}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    patient: {
        backgroundColor: '#e5e5e5',
        borderRadius:8,
        margin: 6,
        padding: 12,
        marginHorizontal: 12
    },
    heading: {
        fontWeight: 'bold'
    },
    value: {
      fontSize: 14,
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    }
});
const mapStateToProps = (state) => ({
    patients: state.patientReducer.patients,
})

const mapDispatchToProps = (dispatch) => ({
    getPatient: () => getPatient(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
