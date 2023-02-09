document.querySelector(".person__info").innerHTML = `

  <section>
  <p> <span class="p__element">Fornavn:</span>
  ${person.persondata.navne.fornavn}
  </#p>
  <p> <span class="p__element">Efternavn:</span> 
  ${person.persondata.navne.efternavn}
  </p>

  <br>

  <p> <span class="p__element">Køn:</span> 
  ${person.persondata.extra.køn}
  </p>
  <p> <span class="p__element">CPR-Nummer:</span> 
  ${person.persondata.extra.cpr_nummer}
  </p>
  <p> <span class="p__element">Fødselsdato:</span> 
  ${person.persondata.extra.fødselsdato}
  </p>
  <p> <span class="p__element">Civilstand:</span>  
  ${person.persondata.extra.civilstand}
  </p>
  <p> <span class="p__element">Børn:</span> 
  ${person.persondata.extra.børn}
  </p>

  <br>

  <p> <span class="p__element">Vejnavn:</span>
  ${person.persondata.adresse.vejnavn}
  </p>
  <p> <span class="p__element">Husnummer:</span>
  ${person.persondata.adresse.husnummer}
  </p>
  <p> <span class="p__element">Postnummer:</span>
  ${person.persondata.adresse.postnummer}
  </p>
  <p> <span class="p__element">By:</span> 
  ${person.persondata.adresse.by}
  </p>

  <br>

  <p> <span class="p__element">Telefonnummer:</span> 
  ${person.persondata.kontakt.telefonnummer}
  </p>
  <p> <span class="p__element">Email:</span> 
  ${person.persondata.kontakt.email}
  </p>
  <p> <span class="p__element">Hjemmeside:</span> 
  ${person.persondata.kontakt.hjemmeside}
  </p>
  </section>
`;
