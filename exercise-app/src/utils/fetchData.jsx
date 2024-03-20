export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "2313977fc1msha753b05f963ce76p1ca65ajsn39b95f242141",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json;

  return data;
};
