import React from 'react'
import '../styles/pages/_terms.scss'
import { useTranslation } from 'react-i18next'
import LeftArrowIcon from '../images/svg/leftArrow'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className='terms-page'>
      <div className='container'>
        <div className='go-back'>
          <Link to={'/'} className='btn'>
            <LeftArrowIcon />
            <span className='text'>{t('Go back')}</span>
          </Link>
        </div>
        <h1>Betingelser og vilkår</h1>
        <hr style={{ opacity: '0.2' }} />
        <h2>1. Avtalen</h2>
        <p>
          Avtalen består av disse salgsbetingelsene, opplysninger gitt i
          bestillingsløsningen og eventuelt særskilt avtalte vilkår. Ved
          eventuell motstrid mellom opplysningene, går det som særskilt er
          avtalt mellom partene foran, så fremt det ikke strider mot ufravikelig
          lovgivning.
        </p>
        <p>
          Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser som
          regulerer kjøp av varer mellom næringsdrivende og forbrukere.
        </p>
        <h2>2. Partene</h2>
        <p>
          Selger er Varme og Kjølesystemer AS, Borgeskogen 37 3160 Stokke,
          post@vksys.no , telefonnummer 971 80 900, org.nr 996947238 og betegnes
          i det følgende som selger/selgeren.
        </p>
        <p>
          Kjøper er den forbrukeren som foretar bestillingen, og betegnes i det
          følgende som kjøper/kjøperen.
        </p>
        <h2>3. Pris</h2>
        <p>
          Den oppgitte prisen for varen og tjenester er den totale prisen kjøper
          skal betale med de reservasjoner som fremkommer i ordrebekreftelsen.
          Denne prisen inkluderer alle avgifter. Ytterligere kostnader som
          selger før kjøpet ikke har informert om, skal kjøper ikke bære.
        </p>
        <h2>4. Avtaleinngåelse</h2>
        <p>
          Avtalen er bindende for begge parter når kjøperen har sendt sin
          bestilling til selgeren.
        </p>
        <p>
          Avtalen er likevel ikke bindende hvis det har forekommet skrive- eller
          tastefeil i tilbudet fra selgeren i bestillingsløsningen i
          nettbutikken eller i kjøperens bestilling, og den annen part innså
          eller burde ha innsett at det forelå en slik feil.
        </p>
        <h2>5. Betalingen</h2>
        <p>
          Selgeren kan kreve betaling for varen fra det tidspunkt den blir sendt
          fra selgeren til kjøperen.
        </p>
        <p>
          Dersom kjøperen bruker kredittkort eller debetkort ved betaling
          belastes kortet samme dag som varen/tjenesten bestilles.
        </p>
        <p>
          Ved betaling med faktura, blir fakturaen til kjøperen utstedt ved
          forsendelse av varen. Betalingsfristen fremgår av fakturaen og er på
          minimum 14 dager fra mottak.
        </p>
        <p>Kjøpere under 18 år kan ikke betale med etterfølgende faktura.</p>
        <h2>6. Levering</h2>
        <p>
          Levering er skjedd når kjøperen, eller hans representant, har overtatt
          varen/tjenesten.
        </p>
        <p>
          Hvis ikke leveringstidspunkt fremgår av bestillingsløsningen, skal
          selgeren levere varen til kjøper uten unødig opphold og senest 30
          dager etter bestillingen fra kunden. Varen skal leveres hos kjøperen
          med mindre annet er særskilt avtalt mellom partene.
        </p>
        <h2>7. Risikoen for varen</h2>
        Risikoen for varen går over på kjøper når han, eller hans representant,
        har fått varene levert i tråd med punkt 6.
        <h2>8. Angrerett</h2>
        <p>
          Med mindre avtalen er unntatt fra angrerett, kan kjøperen angre kjøpet
          av varen i henhold til angrerettloven.
        </p>
        <p>
          Kjøperen må gi selger melding om bruk av angreretten innen 14 dager
          fra fristen begynner å løpe. I fristen inkluderes alle kalenderdager.
          Dersom fristen ender på en lørdag, helligdag eller høytidsdag
          forlenges fristen til nærmeste virkedag.
        </p>
        <p>
          Angrefristen anses overholdt dersom melding er sendt før utløpet av
          fristen. Kjøper har bevisbyrden for at angreretten er blitt gjort
          gjeldende, og meldingen bør derfor skje skriftlig (angrerettskjema,
          e-post eller brev).
        </p>
        <p>Angrefristen begynner å løpe fra bestillingsdato.</p>
        <p>
          Ved bruk av angreretten må selger uten unødig opphold varsle selger
          ved bruk av angrerettskjema.
        </p>
        <p>
          Når varen er montert bortfaller angreretten og normale
          garantibetingelser gjelder. Dersom varen/leveransen ikke inkluderer
          montasje skal varen snarest og uten opphold returneres til selger.
          Kunde er ansvarlig for forsvarlig pakking. Eventuelle skader på varen
          vil resultere i avkortet returbeløp. Kjøper dekker de direkte
          kostnadene ved å returnere varen, med mindre annet er avtalt eller
          selger har unnlatt å opplyse om at kjøper skal dekke returkostnadene.
          Selgeren kan ikke fastsette gebyr for kjøperens bruk av angreretten.
        </p>
        <p>
          For varer/leveranser som ikke inkluderer montasje kan kunde prøve
          eller teste varen på en forsvarlig måte for å fastslå varens art,
          egenskaper og funksjon, uten at angreretten faller bort. Dersom
          prøving eller test av varen går utover hva som er forsvarlig og
          nødvendig, kan kjøperen bli ansvarlig for eventuell redusert verdi på
          varen.
        </p>
        <p>
          Selgeren er forpliktet til å tilbakebetale kjøpesummen til kjøperen
          uten unødig opphold, og senest 14 dager fra selgeren fikk melding om
          kjøperens beslutning om å benytte angreretten. Selger har rett til å
          holde tilbake betalingen til han har mottatt varene fra kjøperen,
          eller til kjøper har lagt frem dokumentasjon for at varene er sendt
          tilbake. Eventuelle skader på varen vil resultere i avkortet returnert
          beløp.
        </p>
        <h2>
          9. Forsinkelse og manglende levering - kjøpernes rettigheter og frist
          for å melde krav
        </h2>
        <p>
          Dersom selgeren ikke leverer varen eller leverer den for sent i
          henhold til avtalen mellom partene, og dette ikke skyldes kjøperen
          eller forhold på kjøperens side, kan kjøperen i henhold til reglene i
          forbrukerkjøpslovens kapittel 5 etter omstendighetene holde
          kjøpesummen tilbake, kreve oppfyllelse, heve avtalen og/eller
          kreve erstatning fra selgeren.
        </p>
        <p>
          Ved krav om misligholdsbeføyelser bør meldingen av bevishensyn være
          skriftlig (for eksempel e-post).
        </p>
        <h4>Oppfyllelse</h4>
        <p>
          Kjøper kan fastholde kjøpet og kreve oppfyllelse fra selger. Kjøper
          kan imidlertid ikke kreve oppfyllelse dersom det foreligger en
          hindring som selgeren ikke kan overvinne, eller dersom oppfyllelse vil
          medføre en så stor ulempe eller kostnad for selger at det står i
          vesentlig misforhold til kjøperens interesse i at selgeren oppfyller.
          Skulle vanskene falle bort innen rimelig tid, kan kjøper likevel kreve
          oppfyllelse.
        </p>
        <p>
          Kjøperen taper sin rett til å kreve oppfyllelse om han eller hun
          venter urimelig lenge med å fremme kravet.
        </p>
        <h4>Heving</h4>
        <p>
          Dersom selgeren ikke leverer varen på leveringstidspunktet, skal
          kjøperen oppfordre selger til å levere innen en rimelig tilleggsfrist
          for oppfyllelse. Dersom selger ikke leverer varen innen
          tilleggsfristen, kan kjøperen heve kjøpet.
        </p>
        <p>
          Kjøper kan imidlertid heve kjøpet umiddelbart hvis selger nekter å
          levere varen. Tilsvarende gjelder dersom levering til avtalt tid var
          avgjørende for inngåelsen av avtalen, eller dersom kjøperen har
          underrettet selger om at leveringstidspunktet er avgjørende.
        </p>
        <p>
          Leveres tingen etter tilleggsfristen forbrukeren har satt eller etter
          leveringstidspunktet som var avgjørende for inngåelsen av avtalen, må
          krav om heving gjøres gjeldende innen rimelig tid etter at kjøperen
          fikk vite om leveringen.
        </p>
        <h4>Erstatning</h4>
        <p>
          Kjøperen kan kreve erstatning for lidt tap som følge av forsinkelsen.
          Dette gjelder imidlertid ikke dersom selgeren godtgjør at forsinkelsen
          skyldes hindring utenfor selgers kontroll som ikke med rimelighet
          kunne blitt tatt i betraktning på avtaletiden, unngått, eller
          overvunnet følgene av.
        </p>
        <h2>
          10. Mangel ved varen - kjøperens rettigheter og reklamasjonsfrist
        </h2>
        <p>
          Hvis det foreligger en mangel ved varen må kjøper innen rimelig tid
          etter at den ble oppdaget eller burde ha blitt oppdaget, gi selger
          melding om at han eller hun vil påberope seg mangelen. Kjøper har
          alltid reklamert tidsnok dersom det skjer innen 2 mnd. fra mangelen
          ble oppdaget eller burde blitt oppdaget. Reklamasjon kan skje senest
          to år etter at kjøper overtok varen. Dersom varen eller deler av den
          er ment å vare vesentlig lenger enn to år, er reklamasjonsfristen fem
          år.
        </p>
        <p>
          Dersom varen har en mangel og dette ikke skyldes kjøperen eller
          forhold på kjøperens side, kan kjøperen i henhold til reglene i
          forbrukerkjøpsloven kapittel 6 etter omstendighetene holde kjøpesummen
          tilbake, velge mellom retting og omlevering, kreve prisavslag, kreve
          avtalen hevet og/eller kreve erstatning  fra selgeren.
        </p>
        <p>Reklamasjon til selgeren bør skje skriftlig.</p>
        <h4>Retting eller omlevering</h4>
        <p>
          Kjøperen kan velge mellom å kreve mangelen rettet eller levering av
          tilsvarende ting. Selger kan likevel motsette seg kjøperens krav
          dersom gjennomføringen av kravet er umulig eller volder selgeren
          urimelige kostnader. Retting eller omlevering skal foretas innen
          rimelig tid. Selger har i utgangspunktet ikke rett til å foreta mer
          enn to avhjelpsforsøk for samme mangel.
        </p>
        <h4>Prisavslag</h4>
        <p>
          Kjøper kan kreve et passende prisavslag dersom varen ikke blir rettet
          eller omlevert. Dette innebærer at forholdet mellom nedsatt og avtalt
          pris svarer til forholdet mellom tingens verdi i mangelfull og
          kontraktsmessig stand. Dersom særlige grunner taler for det, kan
          prisavslaget i stedet settes lik mangelens betydning for kjøperen.
        </p>
        <h4>Heving</h4>
        <p>
          Dersom varen ikke er rettet eller omlevert, kan kjøperen også heve
          kjøpet når mangelen ikke er uvesentlig.
        </p>
        <h2>11. Selgerens rettigheter ved kjøperens mislighold</h2>
        <p>
          Dersom kjøperen ikke betaler eller oppfyller de øvrige pliktene etter
          avtalen eller loven, og dette ikke skyldes selgeren eller forhold på
          selgerens side, kan selgeren i henhold til reglene i
          forbrukerkjøpsloven kapittel 9 etter omstendighetene holde varen
          tilbake, kreve oppfyllelse av avtalen, kreve avtalen hevet samt
          kreve erstatning fra kjøperen. Selgeren vil også etter omstendighetene
          kunne kreve renter ved forsinket betaling, inkassogebyr og et
          rimelig gebyr ved uavhentede varer.
        </p>
        <h4>Oppfyllelse</h4>
        <p>
          Selger kan fastholde kjøpet og kreve at kjøperen betaler kjøpesummen.
          Er varen ikke levert, taper selgeren sin rett dersom han venter
          urimelig lenge med å fremme kravet.
        </p>
        <h4>Heving</h4>
        <p>
          Selger kan heve avtalen dersom det foreligger vesentlig
          betalingsmislighold eller annet vesentlig mislighold fra kjøperens
          side. Selger kan likevel ikke heve dersom hele kjøpesummen er betalt.
          Fastsetter selger en rimelig tilleggsfrist for oppfyllelse og kjøperen
          ikke betaler innen denne fristen, kan selger heve kjøpet.
        </p>
        <h4>Renter ved forsinket betaling/inkassogebyr</h4>
        <p>
          Dersom kjøperen ikke betaler kjøpesummen i henhold til avtalen, kan
          selger kreve renter av kjøpesummen etter forsinkelsesrenteloven. Ved
          manglende betaling kan kravet, etter forutgående varsel, bli sendt til
          Kjøper kan da bli holdt ansvarlig for gebyr etter inkassoloven.
        </p>
        <h4>Gebyr ved uavhentede ikke-forskuddsbetalte varer</h4>
        <p>
          Dersom kjøperen unnlater å hente ubetalte varer, kan selger belaste
          kjøper med et gebyr. Gebyret skal maksimalt dekke selgerens faktiske
          utlegg for å levere varen til kjøperen. Et slikt gebyr kan ikke
          belastes kjøpere under 18  år.
        </p>
        <h2>12. Garanti</h2>
        <p>
          Garanti som gis av selgeren eller produsenten, gir kjøperen
          rettigheter i tillegg til de kjøperen allerede har etter ufravikelig
          lovgivning. En garanti innebærer dermed ingen begrensninger i
          kjøperens rett til reklamasjon og krav ved forsinkelse eller mangler
          etter punkt 9 og 10.
        </p>
        <h2>13. Personopplysninger</h2>
        <p>
          Behandlingsansvarlig for innsamlede personopplysninger er selger. Med
          mindre kjøperen samtykker til noe annet, kan selgeren, i tråd med
          personopplysningsloven, kun innhente og lagre de personopplysninger
          som er nødvendig for at selgeren skal kunne gjennomføre forpliktelsene
          etter avtalen. Kjøperens personopplysninger vil kun bli utlevert til
          andre hvis det er nødvendig for at selger skal få gjennomført avtalen
          med kjøperen, eller i lovbestemte tilfelle.
        </p>
        <h2>14. Konfliktløsning</h2>
        <p>
          Klager rettes til selger innen rimelig tid, jf. punkt 9 og 10. Partene
          skal forsøke å løse eventuelle tvister i minnelighet. Dersom dette
          ikke lykkes, kan kjøperen ta kontakt med Forbrukerrådet for mekling.
          Forbrukerrådet er tilgjengelig  på  telefon 23  400  500
          eller www.forbrukerradet.no.
        </p>
      </div>
    </div>
  )
}
