class Caretaker {
    
    #textEditor;
    #history = [];

    backup() {
        // Saving logic goes here
    }

    revert() {
        console.log('Restoring a snapshot from history.');

        if (this.#history.length == 0) {
            console.log('No snapshots to restore.');
            return;
        }

        // Revert logic goes here
    }

    constructor(textEditor) {
        this.#textEditor = textEditor;
    }
}

module.exports = Caretaker;