async function fetchData() {
    console.log("halkan ayuu kabilaabmaysaa sosaristu");

  
    const response = await fetch('jsonData29.json');
    const data = await response.json(); 
    console.log( response)

    console.log("waatan datadii ", data);
  
}

fetchData();
