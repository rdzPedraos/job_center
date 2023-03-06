import MultiInput from "@/Components/form/MultiInput";
import { useFormData } from "../../Hooks/useFormData";

function utilInput(
    inputTemplates,
    inputsData = {},
    route = null,
    method = null
) {
    const { data, errors, processing, handleChangeInp, handleSubmit, inputs } =
        useFormData(inputTemplates, inputsData, route, method);

    const values = [];
    inputs.forEach((Inp) => {
        const id = Inp.id;
        values[id] = (
            <MultiInput
                key={id}
                input={Inp}
                error={errors[id]}
                value={data[id]}
                onHandleChange={handleChangeInp}
            />
        );
    });

    return {
        processing,
        handleSubmit,
        Inputs: values,
    };
}

export default utilInput;
