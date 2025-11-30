const dtoIn = {
  count: 6,
  age: {
    min: 19,
    max: 35,
  },
};

const names = [
  "Jan","Petr","Pavel","Martin","Tomáš","Jakub","Lukáš","Jiří","David","Josef",
  "Adam","Matěj","Filip","Václav","Daniel","Marek","Jaroslav","Štěpán","Ondřej","Karel",
  "Vojtěch","Michal","Roman","Zdeněk","Radek","Oldřich","Robert","Aleš","Milan","Richard",
  "Tereza","Anna","Eliška","Karolína","Adéla","Kristýna","Natálie","Veronika","Markéta","Barbora",
  "Lucie","Klára","Kateřina","Nikola","Monika","Gabriela","Simona","Alena","Iveta","Jana"
];

const surnames = [
  "Novák","Svoboda","Novotný","Dvořák","Černý","Procházka","Kučera","Veselý","Horák","Němec",
  "Mareš","Pospíšil","Hájek","Jelínek","Král","Růžička","Beneš","Fiala","Sedláček","Doležal",
  "Zeman","Urban","Vaněk","Kolář","Štěpánek","Polák","Kříž","Pokorný","Konečný","Malý",
  "Kovář","Bláha","Strnad","Holý","Soukup","Matoušek","Tichý","Hlaváček","Kočí","Bečka",
  "Suchý","Zajíček","Pazdera","Leoš","Staňek","Burda","Mašek","Čížek","Stehlík","Gregor"
];

const gender = ["male", "female"];
const workload = [10, 20, 30, 40];

/**
 * Generovanie random zamestnancov.
 * @param {object} dtoIn - vstupné parametre
 * @returns {Array<object>} - vygenerované osoby
 */
export function main(dtoIn) {
  const dtoOut = [];
  const count = dtoIn.count;

  const today = new Date();

  const maxDate = new Date(today);
  maxDate.setFullYear(maxDate.getFullYear() - dtoIn.age.max);

  const minDate = new Date(today);
  minDate.setFullYear(minDate.getFullYear() - dtoIn.age.min);

  for (let i = 0; i < count; i++) {
    const birthTimestamp =
      minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
    const birthdate = new Date(birthTimestamp).toISOString();

    dtoOut.push({
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      gender: gender[Math.floor(Math.random() * gender.length)],
      workload: workload[Math.floor(Math.random() * workload.length)],
      birthdate,
    });
  }

  return dtoOut;
}

console.log(main(dtoIn));
