import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createContext, useState } from "react";
import { DataTable } from "react-native-paper";
import { FormContextType, FormDataType } from "../interfaces/interfaces";

import Form from "./form";
import Table from "./table";

const { Row, Cell, Header, Title } = DataTable;

const FormContext = createContext<FormContextType>({
  allFormData: [],
  setAllFormData: () => { },
});

const App = () => {
  const [allFormData, setAllFormData] = useState<FormDataType[]>([]);

  const Stack = createNativeStackNavigator();

  return (
    <FormContext.Provider value={{ allFormData, setAllFormData }}>
      {/* <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={Form}
        />
        <Stack.Screen
          name="Table"
          component={Table}
        />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </FormContext.Provider >
  );
}

export default App;
export { FormContext };
