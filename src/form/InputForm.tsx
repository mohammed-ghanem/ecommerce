import { Form } from "react-bootstrap"
import { Path, FieldValues, UseFormRegister } from "react-hook-form"


type TinputProps<TFieldValue extends FieldValues> = {
    name: Path<TFieldValue>;
    label: string;
    type?: any;
    register: UseFormRegister<TFieldValue>;
    errors: string;

}

const InputForm = <TFieldValue extends FieldValues>(
    { label, type = "text", register, errors, name }: TinputProps<FieldValues>) => {
    return (
        <Form.Group className='mb-3'>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" placeholder="first name"
                {...register(name)}
                isInvalid={errors ? true : false} />
            <Form.Control.Feedback type={type}>
                {errors}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default InputForm