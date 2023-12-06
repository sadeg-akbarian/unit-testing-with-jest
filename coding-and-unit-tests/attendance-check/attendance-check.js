export function attendanceCheck(meetings, requiredAttendees) {
  const meetingsArray = [];
  for (let entry of meetings) {
    meetingsArray.push(entry);
  }

  const requiredAttendeesArray = [];
  for (let entry of requiredAttendees) {
    requiredAttendeesArray.push(entry);
  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const personNotPresent = {
    attendee: "",
    missedMeetings: [],
  };

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const personsWhoWereNotPresent = [];

  for (let entry of requiredAttendeesArray) {
    const currentPerson = structuredClone(personNotPresent);
    currentPerson.attendee = entry;
    for (let i = 0; i < meetingsArray.length; i++) {
      const currentAttendeearray = meetings[i].attendees;
      const isEntryIncluded = currentAttendeearray.includes(entry);
      if (!isEntryIncluded) {
        currentPerson.missedMeetings.push(meetings[i].meetingName);
      }
    }
    personsWhoWereNotPresent.push(currentPerson);
  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const finalAttendeeArray = [];

  personsWhoWereNotPresent.forEach((person) => {
    if (person.missedMeetings.length > 0) {
      finalAttendeeArray.push(person);
    }
  });

  return finalAttendeeArray;
}
