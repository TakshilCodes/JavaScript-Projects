const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function addNote(content = "") {

    if (notesContainer.childElementCount >= 2) {
        alert("You can only create up to 2 notes.");
        return;
    }

    let inputBox = document.createElement("textarea");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.placeholder = "Type your note here...";
    inputBox.value = content;
    img.src = "image/delete.png";
    img.className = "delete-icon";

    let noteWrapper = document.createElement("div");
    noteWrapper.className = "note-wrapper";

    noteWrapper.appendChild(inputBox);
    noteWrapper.appendChild(img);
    notesContainer.appendChild(noteWrapper);

    img.addEventListener("click", () => {
        notesContainer.removeChild(noteWrapper);
        saveNotes();
    });

    inputBox.addEventListener("input", saveNotes);
}

function saveNotes() {
    const notes = document.querySelectorAll(".input-box");
    const notesData = Array.from(notes).map(note => note.value);
    localStorage.setItem("notes", JSON.stringify(notesData));
}

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteContent => {
        addNote(noteContent);
    });
}


createBtn.addEventListener("click", () => {
    addNote();
});

loadNotes();