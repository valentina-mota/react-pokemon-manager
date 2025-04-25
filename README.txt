react-pokemon-app è la root folder

creiamo manualmente i due file:
package.json 
tsconfig.json

ora installiamo le biblioteche che abbiamo indicato in package.json con il comando

npm install
da lanciare sul root folder

questo comando va a installare la cartella node_modules che include tutte le dipendenze necessarie al progetto

// Aggiungiamo il primo componente

creiamo un folder src nella root folder
dentro al folder src creiamo il file App.tsx che conterrà il codice del primo componente

// Poi dobbiamo dire a react come far partire l'applicazione utilizzando il file App.tsx quando la pagina viene caricata, cioè dobbiamo creare un punto d'entrata e collegare il file index.html ad App.tsx.

Creiamo un file index.tsx nel src folder
Applico il metodo render sull'elemento DOM per far partire l'applicazione con il componente App.

// stiamo facendo una SPA, una Single Page Application, cioè una unica pagina HTML con molto codice JS per renderla dinamica: a questo punto andiamo a creare tale pagina HTML  che conterrà il punto d'entrata dell'applicazione in folder chiamato public

// Avviare l'applicazione
aprire il terminale sulla cartella del progetto e scrivere il comando

npm start

//Quindi ora abbiamo distinti file con ruoli differenti: l'avvio dell'applicazione è indipendente dal componente App.tsx che a sua volta non è direttamente legato al file html. A questo scopo abbiamo utilizzato i web component, ECMAScript6 e TypeScript.

//I tipi di componenti
In React esistono due tipi di componenti
componenti dichiarati con una funzione
componenti dichiarati con classi

I componenti dichiarati con classi sono di solito più lunghi da scrivere perché prevedono due funzionalità in più:
- state: consente di salvaguardare dei dati all'interno del componente che sono direttamente sincronizzati con il DOM virtuale scritto in jsx.
- ciclo di vita: usato per implementare un particolare comportamento del componente

React raccomanda di utilizzare il più possibile componenti di funzione.
Questi sono detti puri: per un certo dato entrante, il componente mostra sempre la stessa cosa, in altre parole il suo comportamento è predittibile e non ha dipendenze esterne.

Inoltre, proprio perché puri e con meno funzionalità rispetto ai componenti di classe, i componenti di funzione sono più performanti, cosa lodevole dato che un'applicazione React non è altro che un assemblaggio di più componenti.

Infine, i componenti di funzione sono più concisi e leggibili, un vantaggio quando più sviluppatori intervengono sulla medesima applicazione.

Dunque, finché non abbiamo bisogno di funzionalità avanzate, utilizzeremo i componenti di funzione, come raccomandato da React. Dopodiché, man mano che lo sviluppo continua, e nuove funzionalità devono essere aggiunte, dovremo fare il refactoring di certi componenti di funzione, componendo delle classi per poter aggiungere lo state o la gestione del ciclo di vita.
Il problema è che questa esigenza si ripresenterà regolarmente e, alla lunga, è un po' laboriosa.
RIASSUMENDO:

Componenti di funzione:
- Più performanti.
- Più concisi.
- Non c'è la gestione dello state.
- Non c'è la gestione del ciclo di vita.

Componenti di classe:
- Gestione dello state.
- Gestione del ciclo di vita del componente.
- Meno performanti.
- Più lunghi da scrivere.

In altre occasioni, ma anche in sede di refactoring, potrà capitare che dobbiamo cambiare il componente di funzione in componente di classe: allo scopo, aggiungeremo lo state o la gestione del ciclo di vita.

I componenti di funzione sono chiamati stateless component, mentre i componenti di classe sono chiamati statefull component.

//-----------

//Hooks
Nella versione di React 16.8 sono stati introdotti gli hook: consentono di aggiungere stato e gestione del ciclo di vita in un componente di funzione senza dover scrivere una classe. Si ottiene che i componenti di funzione combinati con gli hooks sono più interessanti dei componenti di classe.

E' dunque consigliabile sviluppare dei componenti di funzione e aggiungere gli hooks quando ce ne sia bisogno.
Inoltre, gli hooks sono retro-compatibili, in caso di refactoring.

La versione più raccomandata è dunque sviluppare componenti di funzione con aggiunta di hook

Gli hook sono opzionali al 100%, è possibile testare uno hook ogni tanto qui e là senza dover modificare interamente il codice.
Gli hook sono retro-compatibili al 100%: la loro aggiunta preserva la compatibilità con le versioni antecedenti di React.

React consiglia dunque di sostituire i componenti di classe con componenti funzionali + hooks

//Presentazione di uno state
Lo state consente di salvaguardare dei dati nel component che sono sincronizzati direttamente con il DOM virtuale scritto in jsx: quando i dati vengono modificati, l'interfaccia dell'app viene automaticamente aggiornata per lo user. 

## Presentazione di uno stato. I componenti.
Prendiamo una costante: essa è una variabile il cui valore non puù cambiare nel tempo, contrariamente a uno state.
Inoltre, lo state è un dato privato del componente, che permette di salvaguardare lo stato dei dati di tale componente e che è un sistema specifico creato da React per gestire questo tipo di problematiche.

## Lo hook di stato. I componenti.
Non è possibile aggiungere uno stato a un componente funzionale a meno di passare per uno hook.
Lo hook che consente di aggiungere uno state a un componente si chiama useState.

Gli hook sono semplixemente funzioni javascript e consentono di dichiarare una variabile di stato. Questo metodo prende come argomento il valore dello stato iniziale del componente (qualunque valore abbia: un numero, una stringa, un oggetto, un array, etc).
Poi, la funzione ritorna un array di due elementi: lo stato attuale e una funzione per modificare la funzione di tale stato iniziale.

Esempio: const[name, setName] = useState("React");

La sintassi delle parentesi è dovuta al destructuring di ECMA6.
Qui di seguito mostro il recupero dei dati senza il destructuring:
var nameStateVariable = useState("React");
var name = nameStateVariable[0];
var setName = nameStateVariable[1];
RIASSUMENDO:
Dichairiamo una variabile di stato chiamata name e la inizializziamo con il valore React. In seguito, React andrà a salvaguardare e aggiornare tale stato.
Se vogliamo modificare il valore di name, chiameremo il metodo setName.

6 Aggiungere un tipo allo stato con TypeScript. I componenti
Integrare TypeScript e hooks è semplice, basta utilizzare il concetto di genericità di TypeScript.
La sintassi di partenza era:
const[name, setName] = useState("React");

a cui andiamo ad aggiungere il tipo di dato contenuto nello state subito dopo lo hook, quindi diventa:
const[name, setName] = useState<String>("React")

Questo permette di tipizzare i dati salvati nello state e verificare il tipo di dato gestito da useState.
In questo caso, indichiamo a React che solo una stringa può essere salvata nello stato "name".

7 Esercizio: Creare uno stato per gestire i Pokemon. I componenti.
Andiamo ad arricchire il componente App.tsx: aggiungiamo uno state che conterrà una lista di pokemon.
Innanzitutto, creiamo una classe per modellizzare un pokemon e un file di dati contenente alcuni pokemon da iniettare nel componente.
In src, creiamo il folder models, e poi il file mock-pokemon.ts, che conterrà i dati di alcuni pokemon.

Esercizio
- Definire una variabile di stato chiamata POKEMONS nel componente App.tsx, inizializzare lo stato con la lista dei pokemon contenuta nella const POKEMONS, tipizzare lo stato Pokemons affinché contenga un array di Pokemon.

- Mostrare il nome dei pokemon presenti nello stato del componente allo user: in altre parole, App.tsx non dovrà più mostrare le parole "Bonjour React", ma dovrà mostrare "Ci sono 12 Pokemon nella vostra applicazione".

UNA VOLTA SVOLTO L'ESERCIZIO, RIASSUMIAMO COSA ABBIAMO FATTO NEL FILE App.tsx:

- tre import: 
1) lo hook useState
2) il file pokemon che è il modello rappresentante un pokemon al fine di poter tipizzare la variabile e di aggiungere la costante pokemons che contiene i dati dei vari pokemon
3) il file con i dati dei vari pokemon
- poi abbiamo dichiato uno useState<Pokemon[]>(POKEMONS), che inizialmente contiene la lista dei pokemon.
- abbiamo tipato i dati del nostro useState indicando che esso deve contenere un array di Pokemon tramite la sintassi <Pokemon[]>
- tutto questo su una sola linea: const [pokemons] = useState<Pokemon[]>(POKEMONS)

Occorre ricordare che in una applicazione reale non avremo noi la lista di pokemon, ma occorrerà inizializzare un componente per fare una richiesta ad un server esterno e recuperare così i dati dei pokemon. 
Per questo dobbiamo ancora aggiungere la gestione del ciclo di vita a tale componente.

9 Il ciclo di vita di un componente. I componenti
Ogni componente ha un ciclo di vita gestito da React stesso: React crea il componente, si occupa di fondere il DOM virtuale con il DOM del browser, verifica se i dati dello stato cambiano e distrugge i componenti del DOM che non sono necessari.
React ci dà anche modo di agire su certi momenti del ciclo di vita del compoenente aggiungendo uno o più metodi chiamati "METODI DEL CICLO DI VITA".
Ciascuno di questi metodi corrisponde ad un momento preciso de"lla vita del compontne.
In particolare, esistono 3 tappe della vita di un componente che ci interessano:
- creazione
- modifica del DOM 
- soppressione di un componente

componentDidMount(): è il metodo chiamato per primo quando si crea un componente, cioè quando lo si inserisce nel DOM. Esso consente di applicare certe istruzioni come, per esempio, il recupero dei dati da un server distante. In termini di React, si parla di montaggio del componente.

componentDidUpdate(prevProps, prevState): ogni vvolta che React rileva che i valori una proprietà del componente sono stati modificati, il componente viene aggiornto. Tale metodo riceve come parametri due oggetti che rappresentano le props e lo state prima dell'aggiornamento. Questo dà la possibilità di lavorare sul DOM, una volta che il componente viene aggiornato. 

componentWillUnmount(): ultimo metodo del ciclo di vita di un componente, chiamato giusto prima che il componente sia distrutto da React. Un componente è distrutto quando viene ritirato dal DOM, per esempio quando lo user sta navigando. Tale metodo consente di sganciarsi da certe dipendenze del componente ed evitare così problemi di performance dell'applicazione. Per esempio, possiamo distaccare i gestori degli eventi o interrompere un timer. In termini di React, questa tappa è chiamata smontaggio.

Questi stati ci serviranno per
inizializzare lo state
affinare gli aggiornamenti del componente, se necessario
porre un termine a dei processi costosi in termini di performance, una volta che il componente è distrutto.

Ricordiamo che un componente funzionale non può gestire il ciclo di vita di un componente, e che per fare questo ci serve uno hook specifico. Altrimenti i metodi del ciclo di vita saranno inutilizzabili.

10 Lo useEffect. I componenti
Il suo ruuolo è consentire l'utilizzo dei metodi del ciclo di vita nel componente funzionale. In altre parole, consente di interagire sui metodi del ciclo di vita visti sopra.

Per la maggior parte delle applicazioni, i tre metodi che abbiamo visto sopra sonno sufficienti a coprire la maggior parte delle necessità che incontreremo.

Per esempio, immaginiamo un componennte che mostra una lista di immagini di frutti: i frutti sono disponibili su un server remoto e quindi, di base, non sonno disponibili nel nostro componente. Occorre in questo caso utilizzare lo hook useEffect per risolvere tale problema.
Vediamo come implementare questo con lo hook useEffect e lo hook useState.

//Cas 1: je veux juste recuperer des donness initiales , et c’est tout, cioè una lista di frutti all'avvio del componente. per questo, si passa un secondo argomento allo useEffectk che è un array vuoto. Questo impedisce l'ulteriore chiamata dello hook dopo il caricamento del componente: questo equivale a chiamare il metodo componentDidMount

useEffect(()=> {
    FruitsAPI, getFruits(currentUserId).then(fruits => setFruits(fruits));
}, []);

// Cas 2: voglio recuperare dei dati inizialmene, e poi voglio continuare ad aggiornare i dati che vengono mostrati. Per evitare di inviare richieste inutili al server e rallentare l'applicazione, passiamo un secondo argomento che è un array con la variabile currentUserId al suo interno: in termini React significa "Ok, mi fai la richiesta al server solo se la variabile currentUserId viene modificata, se non non c'è bisogno di aggiornare il display. In tal modo, il componente è aggiornato e la performance si mantiene ottimale. Questo consente di combinare i metodi componentDidMount + componentDidUpdate.

useEffect(()=> {
    FruitsAPI.getFruits(currentUserId).then(fruits => setFruits(fruits));
}, [currentUserId])

//Cas 3: voglio riprendere il caso 2, ma vorrei effettuare un trattamento supplementare prima che il componente venga smontato. Per questo scopo, aggiungo una funzione return allo hook useEffect: in questo caso specifico vogliamo annullare l'iscrizione alla API perché non abbiamo più bisogno di mantenere la connessione a tale API: questo equivale a combinare i metodi componentDidMount + componentDidUpdate + componentWillUnmount.

useEffect(()=> {
    FruitsAPI.subscribeToFruits(currentUserId, doSomething());
    return ()=> {
        FruitsAPI.unsubscribeFromFruits(currentUserId, doSomething()); //trattamento
    }
}, [currentUserId]) 

11 ESERCIZIO: inizializzare uno stato con lo hook useEffect. I componenti.
Riprendiamo il componente App.tsx e gli aggiungiamo uno hook useEffect. L'obiettivo è inizializzare il componente dei pokemon con un array vuoto e, in un secondo momento, caricare nello state la lista dei pokemon contenuta nella costante const [pokemons]. Vogliamo caricare la lista dei pokemon una sola volta al momento dell'inizializzazione del compoentne.
Riassumendo i compiti:
- inizializzare lo stato con un array vuoto: []
- caricare la lista POKEMONS nello state al momento dell'inizializzazione del componente
- far sì che la lista dei pokemons sia caricata nello stato solo una volta.


12 Correzione: inizializzare uno stato con lo hook useEffect. I componenti
ESERCIZIO SVOLTO :

import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(()=> {
      setPokemons(POKEMONS);
    }, []);

    return (
      <div>
         <h1>Pokédex</h1>
         <p>Il y a {pokemons.length} pokémons dans le pokedex.</p>
      </div>
    )
       
   }

   export default App;



SPIEGAZIONE :
- importo lo hook useEffect dal pacchetto React
- inizializzo lo useState con un array vuoto di default > useState<Pokemon[]>([]);
- impostiamo lo hook useEffect che prende due argomenti : una funzione e un array vuoto. La funzione chiama il metodo dello stato setPokemons (e gli si passa la lista dei pokemon da mostrare). Il secocndo argomento, l’array vuoto, evita di innescare lo hook useEffect a ciascuna modifica del componente.

13. Ulteriori regole sugli hook. I componenti
Nonostante gli hook siano funzioni javascript, occorre rispettare alcune regole.
1) non chiamare un hook all'interno di un ciclo o di una condizione, ma solo all root del componente funzionale.
2) chiamare gli hook solo tramite componenti funzionali. L'unica eccezione è la possibbiltà di chiamare un hook da un altro hook (in effetti è possibile creare degli hook personalizzati)
3) quando utilizzo lo hook useState, si ha un secondo argomento che è un metodo che permette di modificare lo stato del componente: per esempio, setFruits, setNames, setPokemons etc. Quando li utilizziamo, il valore dello stato è direttamente sostituito e non unito (cioè, non viene joined). Quindi,volendo aggiornare uno stato che contiene un array, non è possibile semplicemente aggiungere un nuovo elemento a tale array, ma occorre dichiarare un nuovo array che conterrà tale valore supplementare e push tutto questo nuovo array nello stato del componente.

14 Conclusione
Cose fatte finora:
- impostare un componente in React
- intervenire sulle diverse tappe del suo ciclo di vita e inizializzarlo con dei dati grazie agli hooks.

Ci manca di associare un codice jsx più avanzato per migliorare l'interfaccia user.

Il DOM virtuale con jsx
1 Visualizzare i dati (display data)
il modo più semplice per visualizzare dei valori nell'interfaccia user è utilizzare un'espressione JS nel codice jsx che utilizza le parentesi graffe, come nell'espressione che segue:
{pokemons.length} 

tale espressione permette l'accesso ai valori del componente, agli stati del componente e alle props del componente.
[illustrazione]

2 Gestire le interazioni dello user
Quando lo user clicca su un link, premendo un pulsante o su un testo, vogliamo esserne informati nel nostro componente.
Queste azioni sollevano avvenimenti nel DOM con cui andiamo a interagire.

Impareremo a collegare un evento del DOM a un metodo del componente utilizando la sintassi di collegamnto degli eventi di React

CREARE UN COLLEGAMENTO AGLI EVENTI DEL DOM
[immagine]
La sintassi per ascoltare un evento è semplice: si usa il nome dell'evento del DOM adattandolo a React utilizzando la sintassi camel case - onClick, per esempio (in javascript era onclick).
Dopodiché, si usa un metodo del componente per determinare come trattare tale evento.

CASO PARTICOLARE : passare dei parametri agli eventi
Spesso accade che un evento debba tenere conto di uno o più parametri per adeguare il suo comportamento.
[immagine]

Per esempio, immaginiamo di voler mostrare il nome del pokemon su cui lo user clicca. Occorrerà aggiungere un parametro supplementare nel gestore eventi al fine di passargli il parametro a partire dal template.

Esiste poi il caso in cui abbiamo bisogno di passare l'evento del DOM direttamente nel componente: il caso più frequente è quando lo user preme un tasto sulla tastiera. Come sapere di quale tasto si tratta? Oppure come sapere se lo user ha effettuato click destro o sinistro sul mouse? 
[immagine]

Dobbiamo sapere come recuperare l'evento nativo del DOM: è sufficiente passare come ultimo parametro del metodo la "e" che indica l'evento nativo. Dopodiché non rimane altro che interagire con tale evento nativo in modo da implementare il comportamento desiderato. 

3 Condizionare un display
Per esempio, vogliamo mostrare un messaggio solo se lo user è > 18 anni, per esempio dicendo "Super! Puoi entrare".
In JS utilizzeremmo if, in jsx non si può. Il jsx accetta le espressioni js ma non le istruzioni js. quindi in jsx non si possono utiizzare le parole chiave if, for e neanche dichiarare una variabile. dobbiamo fare tutto questo lato componente. Si usano dunque gli operatori logici e l'operatore ternario. 
[immagine]
Tramite gli operatori logici è possibile simulare una condizione in jsx. A tale fine occorre combinare tre cose:

- una condizione
- un operatore logico
- la porzione di jsx da mostrare se la condizione è rispettata.
Come rendere l'equivalente di else nel codice jsx?
con l'operatore ternario.
[immagine]

4 Visualizzare una lista
Come si fa se una delle proprietà è un array? Come mostrarla nel modello?
[immagine]

In JS utilizzeremmo for, ma in jsx non possiamo : al suo posto dobbiamo utilizzare il metodo nativo js map. Tale metodo si utilizza su un array e consente di applicare un certo trattamento a ogni elemento dell'array. Qui la sintassi è abbastanza intuitiva: prendiamo la lista generale pokemons e applichiamo map a ciascun elemento:
pokemons.map(pokemon).

Guardiamo la proprietà key alla riga 3 dell'immagine: se la omettiamo otteniamo un messaggio che ci avvisa che una proprietà key deve essere usata per ciascun elemento. E' un attributo speciale e necessario, perché indica a React su quale elemento stiamo agendo.

Il modo migliore per scegliere una key è utilizzare un valore unico come index o il nome dell'elemento. 
[immagine]

Potrebbe verificarsi l'ipotesi di non poter assegnare un index univoco, per esempio quando due elementi dell'array sono identici. In casi simili, si utilizza l'identificativo dell'array come key al posto dell'identificativo dell'elemento (boh, non ho capito)

5 ESERCIZIO. mostrare la lista dei pokemon
Implementiamo App.tsx al fine di mostrare tutti i pokemon contenuti nello state: a tal fine utilizzeremo il metodo js map.

(vado a copiare il suo codice e poi continuo con la spiegazione)
Avremo una griglia con tre pokemon per riga.

Alla riga 17 di App.tsx usiamo il metodo JS map al fine di creare un nuovo blocco jsx per ciascun pokemon.
[immagine]

7 Conclusioni
Qui abbiamo imparato a 
- condizionare il display, cio che viene mostrato
- trattare i cicli
- gestire gli eventi dello user

LE PROPS
1 L’importanza des props
è possibile passare dati a un componente via le props. Esse sono facoltative, nel senso che un componente funziona bene anche senza. La sintassi delle props somiglia agli attributi HTML.
[immagine]

Come si passa una prop a un componente?














 