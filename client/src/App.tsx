import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, John wants to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App

// const { register, handleSubmit, formState: { errors } } = useForm()
{/* <Form id="test" onSubmit={handleSubmit(onSubmit)}>
        <TextInputField name="username" label="Username" type="text" placeholder="Username" register={register} registerOptions={{ required: "Required" }} />
        <TextInputField name="email" label="Email" type="email" placeholder="Email" register={register} registerOptions={{ required: "Required" }} />
        <TextInputField name="password" label="Password" type="password" placeholder="Password" register={register} registerOptions={{ required: "Required" }} />
        <Button form='test' type="submit">Submit</Button>
      </Form> */}