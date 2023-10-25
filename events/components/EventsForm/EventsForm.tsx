import { Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../FormInputText/FormInputText";
import { FormInputMultiCheckbox } from "../FormInputMultiCheckbox/FormInputMultiCheckbox";
import { FormInputDate } from "../FormInputDate/FormInputDate";
import { postEvent } from "events/lib/data";

interface IFormInput {
  name: string;
  description: string;
  location: string;
  organizer: string;
  ticketTypes: string[];
  date: Date;
}

const defaultValues = {
  name: "",
  description: "",
  location: "",
  organizer: "",
  ticketTypes: [],
  date: new Date(),
};

const tickets = [
  {
    label: "General Admission",
    value: "General Admission",
  },
  {
    label: "VIP",
    value: "VIP",
  },
  {
    label: "Standard",
    value: "Standard",
  },
  {
    label: "Premium",
    value: "Premium",
  },
  {
    label: "Regular",
    value: "Regular",
  },
];

export function EventsForm() {
  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: IFormInput) => {

    const res = await postEvent(data)
    console.log('res', res)
  };

  return (
    <Box
      style={{
        display: "grid",
        gridRowGap: "20px",
        marginTop: "20px",
        width: '100%'
      }}
    >
      <FormInputText name="name" control={control} label="Event Name" />
      <FormInputText name="description" control={control} label="Description" />
      <FormInputText name="location" control={control} label="Location" />
      <FormInputText name="organizer" control={control} label="Organizer" />

      <FormInputDate name="date" control={control} label="Date" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"ticketTypes"}
        label={"Ticket Types"}
        options={...tickets}
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </Box>
  );
};

export default EventsForm;