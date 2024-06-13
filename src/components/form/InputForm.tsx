import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";

type InputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    error?: string;
    Placeholder?: string;
    onChange?: (e: React.FocusEvent<HTMLInputElement>) => void,
    formText?: string;
    success?: string;
    disabled?: boolean;
};

const InputForm = <TFieldValue extends FieldValues>({
    label,
    name,
    type = "text",
    register,
    error,
    Placeholder,
    onChange,
    formText,
    success,
    disabled,



}: InputProps<TFieldValue>) => {

    const onChangeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onChange) {
            //if there are onblur let my onblur work
            //after that let register work with my my onblur event
            onChange(e);
            register(name).onChange(e)
        } else {
            // if there is no blur let register work with her option blur
            register(name).onChange(e)
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                placeholder={Placeholder}
                type={type}
                {...register(name)}
                onChange={onChangeHandler}
                isInvalid={error ? true : false}
                isValid={success ? true : false}
                disabled={disabled}

            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            {formText && <Form.Text muted>{formText}</Form.Text>}
        </Form.Group>
    );
};

export default InputForm;