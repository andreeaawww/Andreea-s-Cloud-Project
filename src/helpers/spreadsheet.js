import config from '../config'

export default function load(mappingFunction) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Foaie3!A1:O398"
      })
      .then(response => {
        mappingFunction(response)
        },
        response => {
            console.log("Eroare!")
            return mappingFunction(false)
        }
      );
  });
}