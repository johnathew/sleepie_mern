import SignupForm, { SignUpFormProps } from "@/components/form/SignupForm";
const Signup = ({ onSignUpSuccessful }: SignUpFormProps) => {
    return (
        <SignupForm onSignUpSuccessful={onSignUpSuccessful} />
    );
};

export default Signup;
