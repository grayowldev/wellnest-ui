'use client'

export const AppointmentCard = ({meetingInfo}) => {
    return (
        <div className={`w-full h-28 border-2 rounded-2xl p-4 grid grid-cols-[1fr_5fr]`}>
            <div className={`grid grid-cols-2 gap-4 border-r-2 pr-8`}>
                <h4 className={``}>Start</h4>
                <h4>End</h4>
                <p>{meetingInfo.start_time}</p>
                <p className={``}>{meetingInfo.end_time}</p>
                {/*<div>*/}
                {/*    <h4></h4>*/}
                {/*    <p></p>*/}
                {/*</div>*/}
            </div>
            <div className={` ml-12 pl-4`}>
                <div>
                    <h3>{meetingInfo.name}</h3>
                    <h3 className={`font-bold text-2xl`}>{meetingInfo.subject}</h3>
                    <p>30 minutes</p>
                </div>
                {/*<div>*/}
                {/*    <h6>Location</h6>*/}
                {/*    <p className={`font-bold text-lg`}>Zoom Link</p>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h6>Doctor</h6>*/}
                {/*    <p>Dr. Doc Doc</p>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h6>Notes</h6>*/}
                {/*    <p className={`font-bold text-lg`}>sample notes</p>*/}
                {/*</div>*/}

                {/*<p>Date created</p>*/}
                {/*<div>*/}
                {/*    <button>Reschedule</button>*/}
                {/*    <button>Cancel</button>*/}
                {/*    <button>Join Meeting</button>*/}
                {/*</div>*/}


            </div>
        </div>
    )
}