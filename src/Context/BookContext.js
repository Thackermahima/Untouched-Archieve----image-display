import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useMoralis } from "react-moralis";
import { v4 as uuidv4 } from "uuid";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const { Moralis } = useMoralis();
  const [data, setData] = useState([]);
  const [Image, setImage] = useState('');

  const API_Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
  const client = new Web3Storage({ token: API_Token });
  const untouchedA = Moralis.Object.extend("UntouchedArchieve");
  const UntoucheDdata = new untouchedA();

  function addData(Item) {
    alert(Item, "Item");
    console.log(Item, "Item");
    const blob = new Blob([JSON.stringify(Item)], { type: "application/json" });
    const files = [new File([blob], "data.json")];
    console.log(files);
    return files;
  }
  async function storeFiles(Item) {
    
    var array = [];
    let files = addData(Item);
    const cid = await client.put(files);
    UntoucheDdata.set("CID", cid);
    UntoucheDdata.save();
    console.log("stored files with cid", cid);
    axios
      .get(`https://${cid}.ipfs.infura-ipfs.io/data.json`)
      .then(function (response) {
        array.push(response.data);
        setData(array);
      })
      .catch(function (error) {
        console.log(error);
      });

    return cid;
  }
  console.log(data);
  async function storeFile(file) {
    console.log(file.name, "StoreFiles");
       const ext = file.name.split('.').pop();

     const fileName = `${uuidv4()}.${ext}`;
     const newFile = new File([file], fileName, {type: file.type});
     const cid = await client.put([newFile], {
         name: fileName,
     });
     console.log(cid,"cid from storeFile")
     const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
     console.log(imageURI, "imageURI from storeFiles");
     const blob = new Blob([JSON.stringify({file:imageURI})], { type: "application/json" });
     const files = [new File([blob], "file.json")];
     setImage(imageURI)
     console.log(files);

     return imageURI,files;
  
 }
 console.log(Image,'file from bookContext')
//   async function storeFile(file) {
//     console.log(file.name, "StoreFiles");
//        const ext = file.name.split('.').pop();

//      const fileName = `${uuidv4()}.${ext}`;
//      const newFile = new File([file], fileName, {type: file.type});
//      const cid = await client.put([newFile], {
//          name: fileName,
//      });
//      console.log(cid,"cid from storeFile")
//      const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
//      console.log(imageURI, "imageURI from storeFiles");
//      return imageURI;
//  }

  return (
    <BookContext.Provider
      value={{
        addData,
        storeFiles,
        storeFile,
        data,
        Image
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
