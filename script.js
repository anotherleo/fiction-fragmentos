function showNotes() {
    var showNote = document.getElementByClass("authorNotes");
    if (showNote.style.display === "block") {
        showNote.style.display = "none";
    } else {
        showNote.style.display = "block";
    }
  }
