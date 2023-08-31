import { persons } from "../bd.js";
export class PersonService {
  async add(person) {
    await persons.add({ ...person });
  }
  getAll() {
    return persons.get();
  }
  remove(index) {
    persons.doc(index).delete();
  }
}
