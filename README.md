# Norges Bondelag – Amedia Parallax Annonse

Dette prosjektet er en digital annonse utviklet for bruk i Amedia sine nettaviser. Annonsematerialet benytter en **fullskjerms iframe-løsning** og er optimalisert for ytelse og lav filstørrelse i henhold til mediehusets krav.

---

## Formål

Prosjektets hensikt var å lage en digital annonse som formidler at den norske bonden er mye mer enn bare matproduksjon, de er en viktig del av vårt kulturgrunnlag, nasjonale beredskap og en drivkraft for innovasjon i hele landet. 

Annonsen ble utviklet i jobbsammenheng som digital designer, og kombinerer visuelt design med koding.


---

## Teknologi og innhold

- **HTML / CSS** – Struktur og design
- **JavaScript** – Dynamisk innlasting via `<script>`
- **Iframe-basert leveranse** – For enkel integrasjon på tredjeparts nettsider
- **Responsiv og optimalisert** – Fungerer på alle skjermstørrelser
- **Adobe Fonts (Typekit)** – Tilpasset typografi

---

## Filoversikt

| Fil/Mappe        | Beskrivelse                                      |
|------------------|--------------------------------------------------|
| `custom.html`    | Selve annonsen som vises i iframe                |
| `script.js`      | Script som laster inn `custom.html` i en iframe  |
| `examples/`      | Innhold i annonsen, inkludert bilder og grafikk  |
| `package.json`   | Brukt ved lokal utvikling og verktøy             |

---

## Hvordan bruke annonsen

Du kan bruke denne annonsen ved å legge inn følgende script-tagg på en nettside:

```html
<script src="https://bompilez.github.io/Norges-bondelag/script.js?clickUrlParam=%%CLICK_URL_ESC%%"></script>
```

---

## For testvisning uten script
```html
https://bompilez.github.io/Norges-bondelag/custom.html?click=https://www.bondelaget.no/merennmat/
```
---

## Lisens

Alt innhold i dette prosjektet er utviklet av Eggedosis AS på vegne av oppdragsgiver.

Kildekode, design, tekst, bilder og øvrig materiell er beskyttet etter opphavsrettsloven og eies av **Eggedosis AS**.

Ingen deler av dette prosjektet kan gjenbrukes, distribueres, kopieres eller modifiseres uten skriftlig tillatelse fra Eggedosis AS.

