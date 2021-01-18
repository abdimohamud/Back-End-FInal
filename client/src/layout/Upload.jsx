import React, { useState } from "react";
import axios from 'axios';

export default function Upload() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    var uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('name', name);
    uploadData.append('id', '1');

    axios({
      method: 'post',
      url: '/users/uploadSong',
      data: uploadData,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
      //handle success

    })
    .catch(function (response) {
      //handle error

    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="file"
          name="file"
          onChange={e => setFile(e.target.files[0])}
        />
      </div>
      <div>
        <label>Song name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
