import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Calendar from "@/app/components/Calendar";

export const BookingForm = () => {
    return (
        <div className={`w-full`}>
            <form>
                {/*<Card>*/}
                {/*    <CardHeader className={`space-y-1`}>*/}
                {/*        <CardTitle className={`text-3xl font-bold`}> Booking</CardTitle>*/}
                {/*        <CardDescription>*/}
                {/*            Enter your booking details*/}
                {/*        </CardDescription>*/}
                {/*    </CardHeader>*/}
                {/*    <CardContent className={`space-y-4`}>*/}
                {/*        <div className={`space-y-2`}>*/}
                {/*            <Label htmlFor={`name`}> Name</Label>*/}
                {/*            <Input*/}
                {/*                id={`name`}*/}
                {/*                type={`text`}*/}
                {/*                placeholder={`Enter your name`}*/}
                {/*                name={`name`}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={`space-y-2`}>*/}
                {/*            <Label htmlFor={`email`}> Email</Label>*/}
                {/*            <Input*/}
                {/*                id={`email`}*/}
                {/*                type={`email`}*/}
                {/*                placeholder={`Enter your email`}*/}
                {/*                name={`email`}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={`space-y-2`}>*/}
                {/*            <Label htmlFor={`phone`}> Phone</Label>*/}
                {/*            <Input*/}
                {/*                id={`phone`}*/}
                {/*                type={`text`}*/}
                {/*                placeholder={`Enter your phone`}*/}
                {/*                name={`phone`}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={`space-y-2`}>*/}
                {/*            <Label htmlFor={`date`}> Date</Label>*/}
                {/*            <Input*/}
                {/*                id={`date`}*/}
                {/*                type={`date`}*/}
                {/*                placeholder={`Enter your date`}*/}
                {/*                name={`date`}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={`space-y-2`}>*/}
                {/*            <Label htmlFor={`time`}> Time</Label>*/}
                {/*            <Input*/}
                {/*                id={`time`}*/}
                {/*                type={`time`}*/}
                {/*                placeholder={`Enter your time`}*/}
                {/*                name={`time`}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*    <CardFooter>*/}
                {/*        <button type={`submit`}>Submit</button>*/}
                {/*    </CardFooter>*/}
                {/*</Card>*/}
                <div className={`grid grid-cols-2 md:grid-cols-2 gap-4`}>
                    <div className={`border-2 p-2 rounded-2xl mt-3 w-full`}>
                        <Calendar />
                    </div>
                    <div>
                        <div className={`flex border-2 p-5 rounded-2xl mt-3 justify-center`}>
                            7:30 am
                        </div>
                        <div className={`flex border-2 p-5 rounded-2xl mt-3 justify-center`}>
                            8:00 am
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}