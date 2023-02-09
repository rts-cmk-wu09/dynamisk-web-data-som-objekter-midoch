person.forEach((item) => {
  document.querySelector(".person__info").innerHTML += `

    <section>
    <p> <span class="p__element">Fornavn:</span>
    ${item.persondata.navne.fornavn}
    </#p>
    <p> <span class="p__element">Efternavn:</span> 
    ${item.persondata.navne.efternavn}
    </p>

    <br>

    <p> <span class="p__element">Køn:</span> 
    ${item.persondata.extra.køn}
    </p>
    <p> <span class="p__element">CPR-Nummer:</span> 
    ${item.persondata.extra.cpr_nummer}
    </p>
    <p> <span class="p__element">Fødselsdato:</span> 
    ${item.persondata.extra.fødselsdato}
    </p>
    <p> <span class="p__element">Civilstand:</span>  
    ${item.persondata.extra.civilstand}
    </p>
    <p> <span class="p__element">Børn:</span> 
    ${item.persondata.extra.børn}
    </p>

    <br>

    <p> <span class="p__element">Vejnavn:</span>
    ${item.persondata.adresse.vejnavn}
    </p>
    <p> <span class="p__element">Husnummer:</span>
    ${item.persondata.adresse.husnummer}
    </p>
    <p> <span class="p__element">Postnummer:</span>
    ${item.persondata.adresse.postnummer}
    </p>
    <p> <span class="p__element">By:</span> 
    ${item.persondata.adresse.by}
    </p>

    <br>

    <p> <span class="p__element">Telefonnummer:</span> 
    ${item.persondata.kontakt.telefonnummer}
    </p>
    <p> <span class="p__element">Email:</span> 
    ${item.persondata.kontakt.email}
    </p>
    <p> <span class="p__element">Hjemmeside:</span> 
    ${item.persondata.kontakt.hjemmeside}
    </p>
    </section>
  `;
});
