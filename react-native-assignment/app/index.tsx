import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";

import { FormDataType } from "../interfaces/interfaces";

import FormContext from './context/formContext';
import Form from "./form";
import Table from "./table";



const App = () => {
  const [allFormData, setAllFormData] = useState<FormDataType[]>([]);

  const Stack = createNativeStackNavigator();

  return (
    <FormContext.Provider value={{ allFormData, setAllFormData }}>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Table" component={Table} />
      </Stack.Navigator>
    </FormContext.Provider>
  );
}

export default App;

