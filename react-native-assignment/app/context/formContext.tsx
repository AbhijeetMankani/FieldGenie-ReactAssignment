import { FormContextType } from "@/interfaces/interfaces";
import { createContext } from 'react';
const FormContext = createContext<FormContextType>({
    allFormData: [],
    setAllFormData: () => { },
});

export default FormContext;
