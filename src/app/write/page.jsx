"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
// import plus from './plus.png'
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { status} = useSession()
  const router = useRouter()
console.log( status)
if(status === 'loading'){
  return <div>Loading....</div>
}
if(status === 'authenticated'){
  router.push('/')
}



  return (
    <div className = "px-10">
    <div className={styles.container} >
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        // onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
     
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
            //   onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
    </div>
  );
};

export default WritePage;
