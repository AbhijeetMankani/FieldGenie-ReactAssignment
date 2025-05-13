import React from "react";

export interface FormDataType {
    name: string;
    email: string;
}


export interface FormContextType {
    allFormData: FormDataType[];
    setAllFormData: React.Dispatch<React.SetStateAction<FormDataType[]>>;
}