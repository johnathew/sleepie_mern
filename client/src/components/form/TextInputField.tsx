import { Form } from "react-bootstrap";
import { FieldError, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
    name: string,
    label: string,
    register: UseFormRegister<FieldValues>,
    registerOptions?: RegisterOptions,
    error?: FieldError,
    [x: string]: unknown,
}
const TextInputField = ({ name, label, register, registerOptions, error, ...props }: TextInputFieldProps) => {
    return (<Form.Group className="mb-3" controlId={name + "-input"}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            {...register(name, registerOptions)}
            {...props}
            isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">
            {error?.message}
        </Form.Control.Feedback>
    </Form.Group>
    );
};

export default TextInputField;
