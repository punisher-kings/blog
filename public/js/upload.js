const uploadForm = document.getElementById("upload-form");
console.log(uploadForm);
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageFile = document.getElementById("image").files[0];

  if (!title || !content || !imageFile) {
    alert("Please fill in all files");
    return;
  }

  try {
    // upload the image to firebase storage
    const storageRef = storage.ref("images/" + imageFile.name);

    await storageRef.put(imageFile);
    const imageUrl = await storageRef.getDownloadURL(imageFile);

    // Add a new document with a generated id.
    const id = Math.random() * 747934;
    const docRef = await db.collection("articles").add({
      docId: String(id),
      title,
      content,
      imageUrl,
      createdAt: new Date(),
    });
    window.location.href = "/";
  } catch (error) {
    alert("error uploading content");
    console.log(error);
  }
});

console.log("second");
