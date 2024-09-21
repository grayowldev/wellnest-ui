export default function AppointmentList({ appointments }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4">Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="mb-2">
              {appointment.date} at {appointment.time} - {appointment.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
