const events = [
    { title: "AZUL +5", start: getDate("YEAR-MONTH-02") },
    { title: "AZUL +5", start: getDate("YEAR-MONTH-03") },
    {
      title: "VERDE +10",
      start: getDate("YEAR-MONTH-06"),
      backgroundColor: "green"
    },
    { title: "AMARILLO -5", start: getDate("YEAR-MONTH-07") },
    { title: "AZUL +5", start: getDate("YEAR-MONTH-08") },
    {
      title: "AMARILLO -5",
      start: getDate("YEAR-MONTH-09"),
      backgroundColor: "yellow",
      textColor: "black"
    },
    {
      title: "LECTURA +20",
      start: getDate("YEAR-MONTH-09"),
      backgroundColor: "purple"
    },
  
    { title: "AZUL +5", start: getDate("YEAR-MONTH-28") },
    {
      title: "AZUL +5",
      start: getDate("YEAR-MONTH-22"),
      backgroundColor: "red",
      textColor: "black"
    },
    {
      start: getDate("YEAR-MONTH-23"),
      end: getDate("YEAR-MONTH-24"),
      allDay: true
    }
  ];
  
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  export default events;