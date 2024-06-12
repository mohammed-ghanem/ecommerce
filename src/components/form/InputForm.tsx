import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";

type InputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    error?: string;
    Placeholder?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
};

const InputForm = <TFieldValue extends FieldValues>({
    label,
    name,
    type = "text",
    register,
    error,
    Placeholder,
    onBlur


}: InputProps<TFieldValue>) => {

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
            //if there are onblur let my onblur work
            //after that let register work with my my onblur event
            onBlur(e);
            register(name).onBlur(e)
        } else {
            // if there is no blur let register work with her option blur
            register(name).onBlur(e)
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                placeholder={Placeholder}
                type={type}
                {...register(name)}
                isInvalid={error ? true : false}
                onBlur={blurHandler}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>

        </Form.Group>
    );
};

export default InputForm;