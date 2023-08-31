import { Person } from "./Person.js";
import { PersonService } from "./PersonService.js";

document.querySelector("#frm").addEventListener("submit", addPerson);
document.querySelector("#rowTable").addEventListener("click", removePerson);

const personService = new PersonService();
async function addPerson(event) {
  event.preventDefault();
  const person = new Person();
  person.name = document.querySelector("#iptName").value;
  person.description = document.querySelector("#iptDescription").value;
  person.price = document.querySelector("#iptPrice").value;
  await personService.add(person);
  renderTable();
  document.querySelector("#frm").reset();
}

renderTable();
async function renderTable() {
  const persons = await personService.getAll();
  console.log(persons);
  document.querySelector("#rowTable").innerHTML = "";
  persons.forEach(function (person) {
    document.querySelector("#rowTable").innerHTML += `<tr>
    <td>${person.data().name}</td>
    <td>${person.data().description}</td>
    <td>${person.data().price}</td>
    <td><a href="#" index=${person.id}> 🗑️ </a> </td>
  </tr>`;
  });
}

function removePerson(event) {
  let index = event.target.getAttribute("index");
  personService.remove(index);
  renderTable();
}
