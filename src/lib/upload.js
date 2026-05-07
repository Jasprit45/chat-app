import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";

const upload = async (file) => {
  return new Promise((resolve, reject) => {  // ← wrap in Promise
    const storageRef = ref(storage, `images/${Date.now() + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error("Upload failed:", error);
        reject(error);  // ← reject on error
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);  // ← now resolve is defined
      }
    );
  });
};

export default upload;