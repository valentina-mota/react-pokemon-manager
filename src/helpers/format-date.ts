/*
Questo è il codice rimasto valido fino al momento in cui nel tutoria si inizia a usare il db.json:
const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  export default formatDate;*/

  //Questo codice che segue dalla creazioe del file db.json in poi: nella funzione, se non passiamo alcun valore, verrà calcolata la data corrente "new Date": ci consente di non scrivere date hardcodate nel file db.json
  const formatDate = (date: Date = new Date()): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  export default formatDate;