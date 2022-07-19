import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { BookContext } from '../../Context/BookContext';

function BookList() {

    const bookContext = React.useContext(BookContext);
    const { data, Image } = bookContext;
    console.log(data, "list");  
    console.log(Image, "file-bookList")
    const [bookData,setBookData]=useState([]);


    useEffect(()=>{
        var array=[];
        const dd =   data && data.map((e)=>{
          if(e.category == "Book"){ 
            array.push(e); 
          }
      });
      setBookData(array); 
     
    },[data])

    console.log(bookData,"bookData");

    return (
        <>
            <div style={{ backgroundColor: "bisque" }} className="row container-fluid">
                <div className="section-title">
                    <h4>Related posts</h4>
                </div>
                <div className="main-div row container-fluid">
                <div className="card col-3 offset-1">
                                        <div className="row">
                                <img className="book-images" src={Image}></img>
                            </div>
            

                    {
                        bookData && bookData.map((e) => {
                            console.log(e.file,'fileBookList');
                            console.log(e, 'e-booklist')
                          return   (
                              <>
                            <div className="row clickable-chips">
                                <div className="offset-1 clo-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                </div>
                                <div className="offset-1 col-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                </div>
                            </div>
                            <div className="book-title">
                                <h5>{ e.name}</h5>
                            </div>
                            <div className="postedon">
                                <p className="posted-date"><strong>Posted On: </strong>{ new Date().toLocaleString()}</p>
                            </div>
                            <div className="some-text">
                                <p className="some-textofbook">{e.description}</p>
                            </div>
                            <div className=" readmore-book">
                                <Link to='/book-detail'>
                                    <button className="readmore-btn">Read more</button>
                                </Link>  
                            </div>
                            </>

                          )
                        })
                    }
                    </div>

                </div>
            </div>
        </>
    )
}
export default BookList;