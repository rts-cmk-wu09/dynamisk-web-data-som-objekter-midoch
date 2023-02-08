let person__navn = document.querySelector("#person .person__navn");

person__navn.textContent = `${person.persondata.navne.fornavn} ${person.persondata.navne.efternavn}`;

let person__info = document.querySelector("#person .person__info");
person.persondata.extra.forEach((element) => {
  person__info.innerHTML += `<li>${element}</li>`;
});

person__info.textContent = `${person.persondata.extra.cpr_nummer} ${person.persondata.extra.fødselsdato} ${person.persondata.extra.køn} ${person.persondata.extra.civilstand} ${person.persondata.extra.børn}`;
