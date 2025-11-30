export function main(dtoIn) {
  const dtoOut = [];
  const count = dtoIn.count;
  const currentYear = new Date().getFullYear();

  const usedDates = new Set(); // kvôli unikátnosti dátumov

  for (let i = 0; i < count; i++) {

    // vek
    const randomAge = Math.floor(Math.random() * (dtoIn.age.max - dtoIn.age.min + 1)) + dtoIn.age.min;
    const birthYear = currentYear - randomAge;

    let birthdate;

    // unikátne dátumy
    do {
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
      birthdate = `${birthYear}-${month}-${day}T00:00:00.000Z`;
    } while (usedDates.has(birthdate));

    usedDates.add(birthdate);

    dtoOut.push({
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      gender: gender[Math.floor(Math.random() * gender.length)],
      workload: workload[Math.floor(Math.random() * workload.length)],
      birthdate
    });
  }

  return dtoOut;
}
