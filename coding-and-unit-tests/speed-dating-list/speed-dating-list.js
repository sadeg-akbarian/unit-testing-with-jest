export function speedDatingList(persons) {
  if (persons.length === 0) {
    return [];
  }

  const datingList = [];

  for (let i = 0; i < persons.length - 1; i++) {
    const currentOne = persons[i];
    for (let z = i + 1; z < persons.length; z++) {
      const currentSecond = persons[z];
      const currentDate = [currentOne, currentSecond];
      datingList.push(currentDate);
    }
  }
  return datingList;
}
