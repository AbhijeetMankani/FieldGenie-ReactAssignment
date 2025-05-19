import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import FormContext from '../context/formContext';

const { Row, Cell, Header, Title } = DataTable;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

type TableProp = {
    navigation: NavigationProp<any>;
}



const Table: React.FC<TableProp> = ({ navigation }) => {
    const { allFormData } = React.useContext(FormContext);


    return (


        <View style={{ flex: 1 }}>
            <DataTable>
                <Header>
                    <Title>Name</Title>
                    <Title>Email</Title>
                </Header>
                {allFormData.map((data, index) => (
                    <Row key={index}>
                        <Cell>{data.name}</Cell>
                        <Cell>{data.email}</Cell>
                    </Row>
                ))}

            </DataTable>
        </View>
    )
}

export default Table;