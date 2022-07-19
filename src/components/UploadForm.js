import React, { useContext, useState } from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { useMoralis } from "react-moralis";
import { BookContext } from "../Context/BookContext";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function UploadForm() {


    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState(null);
    const [file, setFile] = useState("");
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [checkbox, setCheckbox] = useState();
    const [object, setObject] = useState("");
    const nameEvent = (e) => {
        setName(e.target.value)
    }
    

    const subjectEvent = (e) => {
        setSubject(e.target.value || null)
    }
     

    const websiteEvent = (e) => {
        setWebsite(e.target.value)
    }
   

    const descriptionEvent = (e) => {
        setDescription(e.target.value)
    }
    
     async function fileEvent(e){
          const file = e.target.files[0];
        //  const obj = await makeFileObjects(file, file.name)
         await storeFile(file);

        // const res = await client.get(rootCid);
        // const files = await res.files();

        // const url =  URL.createObjectURL(files[0]);
        // console.log(url)
        // setFile(url)
    }

    // function makeFileObjects(data, name) {
    //     // You can create File objects from a Blob of binary data
    //     // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    //     // Here we're just storing a JSON object, but you can store images,
    //     // audio, or whatever you want!
    //     const obj = data;
    //     const blob = new Blob([JSON.stringify(obj)], { type: data.type });
    
    //     const files = [new File([blob], name)];
    //     return files;
    //   }
    
    // async function storeFile(file) {
    //    console.log(file.name, "StoreFiles");
    //       const ext = file.name.split('.').pop();

    //     const fileName = `${uuidv4()}.${ext}`;
    //     const newFile = new File([file], fileName, {type: file.type});
    //     const cid = await client.put([newFile], {
    //         name: fileName,
    //     });
    //     console.log(cid,"cid from storeFile")
    //     const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
    //     console.log(imageURI, "imageURI from storeFiles");
    //     const blob = new Blob([JSON.stringify({file:imageURI})], { type: "application/json" });
    //     const files = [new File([blob], "file.json")];

    //     console.log(files);

    //     return imageURI,files;
     
    // }
   

    const checkboxEvent = (e) => {
        setCheckbox(e.target.checked)
    }
   

    let Item = {
        name: name,
        subject: subject,
        category: category,
        file: file,
        website: website,
        description: description,
        checkbox: checkbox
    }
  
    
    function onFormSubmit(e) {
        e.preventDefault() 
        addData();
        storeFiles(Item)
        setName('');
        setSubject('');
        setCategory('');
        setFile(null);
        setWebsite('')
        setDescription('');
        setCheckbox(null);
       
       
    }
   
// Web3Storage
const { Moralis } = useMoralis();
const bookContext = React.useContext(BookContext);
const {addData, storeFiles, storeFile} = bookContext;

const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
const client = new Web3Storage({ token: API_Token})
const untouchedA = Moralis.Object.extend("UntouchedArchieve");
const UntoucheDdata  = new untouchedA();


// function addData(){
//     const blob = new Blob(
//         [
//             JSON.stringify(Item),
//         ],
//         { type: "application/json"}
//     );
//   const files = [
//       new File([blob], "data.json"),
//   ];
//   console.log(files);
//   return files;

// }
// async function storeFiles(){
//     let files = addData()
//     const cid = await client.put(files);
//     UntoucheDdata.set("CID", cid);
//     UntoucheDdata.save();
//     console.log("stored files with cid", cid);
//     axios.get( `https://${cid}.ipfs.infura-ipfs.io/data.json`)
//     .then(function (response) {
//    setData(response.data)

//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       }) 
    
//     return cid;
// }
// console.log(data);
    return (
        <div style={{ backgroundColor: "aliceblue" }} className="col">
            <div className="form-style-2 offset-4 row-8">
                <div className="form-style-2-heading">Upload any files from here</div>
                <form action="" method="" onSubmit={onFormSubmit}>
                    <label for="field1"><span>Name <span className="required">*</span></span><input value={name} onChange={nameEvent} placeholder="Your name" type="text" class="input-field" name="field1" /></label>

                    <label for="field2"><span>Subject <span className="required">*</span></span><input value={subject} placeholder="Subject" onChange={subjectEvent} type="text" class="input-field" name="field2" /></label>

                    <label for="field4"><span>Category</span><select value={category} name="field4" onChange={(e)=>setCategory(e.target.value)} className="select-field">
                        <option defaultChecked defaultValue="Book" value="Book">Book</option>
                        <option value="Documents">Documents</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Website">Website / Snapshot</option>
                    </select></label>

                    
                    <label for="field6"><span></span><input className="file-input" onChange={(e) =>fileEvent(e)} type="file" id="input"></input>  </label>

                    <label for="field7"><span>Add website</span><input value={website} className="add-url" placeholder="add URL" onChange={websiteEvent} type="url"></input></label>

                    <label for="field5"><span>Description</span><textarea value={description} onChange={descriptionEvent} name="field5" className="textarea-field"></textarea></label>

                    <label><input className="terms-checkbox" value={checkbox} onChange={checkboxEvent} type="checkbox"></input>I agree to terms and conditions.</label>

                    <label><span> </span><input type="submit" value="Submit" /></label>
                </form>
            </div>
        </div>

    )
}


export default UploadForm;