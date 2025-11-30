/**
 * Generovanie random zamestnancov.
 * @param {Object} dtoIn
 * @returns {Array}
 */


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
export function main(dtoIn) {
  const dtoOut = [];
  const count = dtoIn.count;
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < count; i++) {
    const randomAge = Math.floor(Math.random() * (dtoIn.age.max - dtoIn.age.min + 1)) + dtoIn.age.min;
    const birthYear = currentYear - randomAge;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
    const birthdate = `${birthYear}-${month}-${day}T00:00:00.000Z`;
    dtoOut.push({
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      gender: gender[Math.floor(Math.random() * gender.length)],
      workload: workload[Math.floor(Math.random() * workload.length)],
      birthdate: birthdate,
    });
  }
  return dtoOut;
}
console.log(main(dtoIn));
