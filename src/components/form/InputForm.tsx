import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";

type InputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    error?: string;
    Placeholder?: string;
};

const InputForm = <TFieldValue extends FieldValues>({
    label,
    name,
    type = "text",
    register,
    error,
    Placeholder,
}: InputProps<TFieldValue>) => {

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                placeholder={Placeholder}
                type={type}
                {...register(name)}
                isInvalid={error ? true : false}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>

        </Form.Group>
    );
};

export default InputForm;