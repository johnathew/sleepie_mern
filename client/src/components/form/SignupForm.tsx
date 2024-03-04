import { schema } from "./formSchema"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { z } from "zod";
import { User } from "@/models/users"
import * as CharmsApi from "@/network/charms_api"
import { SignUpCredentials } from "@/network/charms_api"
import { useState } from "react"
import { ConflictError } from "../errors/http_errors"
import { Alert } from "react-bootstrap"

export interface SignUpFormProps {
    onSignUpSuccessful: (user: User) => void;
}

const SignupForm = ({ onSignUpSuccessful }: SignUpFormProps) => {

    const [errorText, setErrorText] = useState<string | null>(null)

    const form = useForm<z.output<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        criteriaMode: "all",
    });

    async function onSubmit(credentials: SignUpCredentials) {
        try {
            const user = await CharmsApi.signUp(credentials);
            onSignUpSuccessful(user);
        } catch (error) {
            if (error instanceof ConflictError) {
                setErrorText(error.message)
            } else {
                setErrorText((error as Error).message)
            }
            console.error(error)
        }
    }

    return (
        <Form {...form}>
            <form className="space-y-8 text-pink-500 p-4" onSubmit={form.handleSubmit(onSubmit)}>
                <h1>Sign up</h1>
                {errorText && <Alert variant="danger">{errorText}</Alert>}

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-1/2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                We'll never share your email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex gap-2">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Must be at least 6 characters long.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    Sign up
                </Button>
                {form.formState.isSubmitting && <div>Submitting...</div>}
            </form>
        </Form>
    )
};

export default SignupForm;
