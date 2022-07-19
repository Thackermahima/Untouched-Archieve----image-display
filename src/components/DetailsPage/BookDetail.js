import React, { useEffect, useState } from "react";
import { BookContext } from '../../Context/BookContext';
import ModalContribute from '../Contribute/Contribute'

function BookDetail() {

    const bookContext = React.useContext(BookContext);
    const { data, Image } = bookContext;
    console.log(data, "list");  

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

    

    return (
        <div className="container-fluid row">
            <div className="col-12 book-details-tag">
                <h3>Book Details</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-4 particular-book-img">
                       <img className="book-images" src={Image}></img>
                   </div>
            {

                bookData && bookData.map((e) => {
   return   (
                         
           <>

                    <div className="col-4">
                        <p className="particular-book-text" > {e.description}</p>
                    </div>
                    <div className="col-4 view-and-download-btn">
                        <div className="row view-btn-row">
                        <a href={e.website}>  
                            <button className="btn btn-info my-2 viewonline-btn my-sm-0 offset-4" type="submit">View Online</button>
                            </a>
                        </div>

                        <div className="row download-btn-row">
                        <a href={Image} download >
<button className="btn btn-danger my-2 download-btn my-sm-0 offset-3" type="submit">Download</button>
</a>


                        </div>
                    </div>
    
                     <div className="under-line col-12"></div>
                    <div className="col-12">
                        <ModalContribute></ModalContribute>
                    </div>
                </>

            )
                        })
            }
            </div>

            </div>

        </div>
    )

}


export default BookDetail