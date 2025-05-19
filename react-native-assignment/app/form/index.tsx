import { FormDataType } from '@/interfaces/interfaces';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { FormContext } from '../index';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

type FormProp = {
    navigation: any;
}

const Form: React.FC<FormProp> = ({ navigation }) => {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: ""
    });
    const { allFormData, setAllFormData } = useContext(FormContext);

    const handleSubmit = (): void => {
        if (formData.name === "" || formData.email === "") {
            alert("Please fill all fields");
            return;
        }
        else {
            setAllFormData([...allFormData, formData]);
            setFormData({
                name: "",
                email: ""
            });
            navigation.navigate("Table")
        }
    }

    return (

        <View style={{ flex: 1 }}>
            <View>
                <Text>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={formData.name}
                    onChangeText={(name: string) => {
                        let data: FormDataType = {
                            ...formData,
                            name: name,
                        };
                        setFormData(data);
                    }}
                />
            </View>
            <View>
                <Text>Email: </Text>
                <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(email: string) => {
                        let data: FormDataType = {
                            ...formData,
                            email: email,
                        };
                        setFormData(data);
                    }}
                />
            </View>
            <Button
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
    )
}
export default Form;