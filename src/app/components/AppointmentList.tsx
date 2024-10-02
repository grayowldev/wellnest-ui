import {AppointmentCard} from "@/app/components/AppointmentCard";

export default function AppointmentList({ appointments }) {
  return (
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4">Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
          <div>
              {appointments.map((appointment, index) => (
                  <div key={index} className={`pb-3`}>
                      <AppointmentCard  meetingInfo={appointment} />
                  </div>

              ))}
          </div>

      )}
    </div>
  );
}
