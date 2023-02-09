document.querySelector(".person__info").innerHTML = `

  <section>
  <p> Fornavn:
  ${person.persondata.navne.fornavn}
  </p>
  <p> Efternavn:
  ${person.persondata.navne.efternavn}
  </p>


  <p> Køn: 
  ${person.persondata.extra.køn}
  </p>
  <p> CPR-Nummer:
  ${person.persondata.extra.cpr_nummer}
  </p>
  <p> Fødselsdato: 
  ${person.persondata.extra.fødselsdato}
  </p>
  <p> Civilstand: 
  ${person.persondata.extra.civilstand}
  </p>
  <p> Børn:
  ${person.persondata.extra.børn}
  </p>


  <p> Vejnavn:
  ${person.persondata.adresse.vejnavn}
  </p>
  <p> Husnummer:
  ${person.persondata.adresse.husnummer}
  </p>
  <p> Postnummer:
  ${person.persondata.adresse.postnummer}
  </p>
  <p> By:
  ${person.persondata.adresse.by}
  </p>

  
  <p> Telefonnummer:
  ${person.persondata.kontakt.telefonnummer}
  </p>
  <p> Email:
  ${person.persondata.kontakt.email}
  </p>
  <p> Hjemmeside:
  ${person.persondata.kontakt.hjemmeside}
  </p>
  </section>
`;
