import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./routes";

function App() {
  return <Router />
}

export default App

// const { register, handleSubmit, formState: { errors } } = useForm()
{/* <Form id="test" onSubmit={handleSubmit(onSubmit)}>
        <TextInputField name="username" label="Username" type="text" placeholder="Username" register={register} registerOptions={{ required: "Required" }} />
        <TextInputField name="email" label="Email" type="email" placeholder="Email" register={register} registerOptions={{ required: "Required" }} />
        <TextInputField name="password" label="Password" type="password" placeholder="Password" register={register} registerOptions={{ required: "Required" }} />
        <Button form='test' type="submit">Submit</Button>
      </Form> */}