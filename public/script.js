const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  removeAllChildNodes(tbody);
  removeAllChildNodes(message);
  if (input.value !== "") {
    getresults(input.value).then((res) => {

      if (res.length > 0) {
        renderTable(res);
      } else {
        message.append("No matches found");
      }
    });
  }
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api/${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  return data;

}

const renderTable = (data) => {

  data.forEach((dataRow, index) => {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    cell.append(`${index}`);
    row.append(cell);
    cell2.append(`${dataRow[0]}`);
    row.append(cell2);
    cell3.append(`${dataRow[1]}`);
    row.append(cell3);
    tbody.append(row);
  })
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
