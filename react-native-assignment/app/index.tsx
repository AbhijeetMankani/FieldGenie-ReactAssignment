import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { DataTable } from "react-native-paper";
import { FormDataType } from "../interfaces/interfaces";

const { Row, Cell, Header, Title } = DataTable;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default function Form() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: ""
  });
  const [allFormData, setAllFormData] = useState<FormDataType[]>([]);

  const handleSubmit = () => {
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
    }
  }

  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 1 }}>
        <View>
          <Text>Name:</Text>
          <TextInput style={styles.input} value={formData.name} onChangeText={(name) => {
            let data = {
              ...formData,
              name: name,
            };
            setFormData(data);
          }} />
        </View>
        <View>
          <Text>Email: </Text>
          <TextInput style={styles.input} value={formData.email} onChangeText={(email) => {
            let data = {
              ...formData,
              email: email,
            };
            setFormData(data);
          }} />
        </View>
        <Button
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
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
    </View>
  );
}

