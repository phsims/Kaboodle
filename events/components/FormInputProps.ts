
export interface OptionsProps {
    label: string;
    value: string;
}

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    options?: Array<OptionsProps>;
}