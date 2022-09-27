const db = require("./db");
const axios = require("axios");

async function getAll() {
  const query = "SELECT * FROM acronym";
  return await db.query(query);
}

async function getAcronym(acronym) {
  const acronymData = await searchAcronym(acronym);
  const query = `INSERT INTO acronym (name,description) VALUES ('${acronym}','${acronymData}')`;
  await db.query(query);
  return acronymData;
}

async function searchAcronym(acronym) {
  try {
    const url = `http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=${acronym}`;
    const response = await axios.get(url);
    const data = response.data[0]
      ? response.data[0].lfs.map((val) => {
          return val.lf;
        })
      : ["No acronyms found"];

    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAll,
  getAcronym,
};
