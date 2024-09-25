import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export const SigninForm = () => {
    return (
        <div className={`w-full max-w-md`}>
            <form>
                <Card>
                    <CardHeader className={`space-y-1`}>
                        <CardTitle className={`text-3xl font-bold`}> Sign In</CardTitle>
                        <CardDescription>
                            Enter your details to sign in
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={`space-y-4`}>
                        <div className={`space-y-2`}>
                            <Label htmlFor={`email`}> Email</Label>
                            <Input
                                id={`email`}
                                type={`email`}
                                placeholder={`Enter your email`}
                                name={`email`}
                            />
                        </div>
                        <div className={`space-y-2`}>
                            <Label htmlFor={`password`}> Password</Label>
                            <Input
                                id={`password`}
                                name={`password`}
                                placeholder={`Enter your password`}
                                type={`password`}/>
                        </div>
                    </CardContent>
                    <CardFooter className={`flex flex-col`}>
                        <button className={`w-full`}> Sign In</button>
                    </CardFooter>
                </Card>
                <div className={`mt-4 text-center text-sm`}>
                    Dont have an account?
                    <Link href={`signup`} className={`underline ml-2`}>
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    )
}