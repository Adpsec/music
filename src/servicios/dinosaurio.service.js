import firebase from "../firebase/firebase";

const db = firebase.collection("/musicos");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(starts,musico) {
    return db.doc(musico).set(starts);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TutorialDataService();