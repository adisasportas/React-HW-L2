
 class ApiHw {
   static fetchGamesByYear(year) {
    const url = new URL('http://fs1.co.il/bus/xbox1.php');
    if (year) {
      url.searchParams.append('year', year);
    }

    return fetch(url.toString())
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error("Failed to fetch games:", error);
        throw error;
      });
  }
  
}

export default ApiHw;
