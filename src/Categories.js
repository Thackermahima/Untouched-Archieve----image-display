import React from 'react'
// import './Feature.css'
import { icons } from 'react-icons'
import { BsBookHalf } from "react-icons/bs"
import { FcDocument } from "react-icons/all"
import { GiNewspaper } from "react-icons/all"
import { CgWebsite } from "react-icons/all"
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <><div style={{marginTop:"70px"}}>
            <h1 style={{ color: "rgb(54 54 58)", fontSize: "40px", fontWeight: "bold", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", textAlign: "center", marginTop: "-40px" }}>
                Explore
            </h1>

            <div className="grid-container container-fluid">
                <div style={{ justifyContent: "space-evenly" }} className='row'>
                    <div className="grid-item  col-4" >

                        <div className='cardsfeture' >
                            <div className="buttons" >
                            <Link to="book-list">

                                <a className="" href=""><BsBookHalf />

                                </a>
                                </Link>
                                <Link to="book-list">
                                <p className='icon-name'>  {"    "} Books</p>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="grid-item col-4" >

                        <div className='cardsfeture' >
                            <div className="buttons" >
                            <Link to="documents-list">
                                <a className="" href=""><FcDocument />
                                </a>
                            </Link>
                                <Link to="documents-list">
                                <p className='icon-name'>Documents</p>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>

             
                <div style={{ justifyContent: "space-evenly" }} className='row'>


                <div className="grid-item col-4" >

                    <div className='cardsfeture' >
                        <div className="buttons" >
                        <Link to="/newspapers-list">
                            <a className="" href=""><GiNewspaper />
                            </a>
                        </Link>
                            <Link to="/newspapers-list">
                            <p className='icon-name'>Newspapers</p>
                            </Link>

                        </div>

                    </div>
                </div>

                <div className="grid-item col-4" >

                    <div className='cardsfeture' >
                        <div className="buttons" >
                        <Link to="websites-list">
                            <a className="" href=""><CgWebsite/>
                            </a>
                        </Link>
                            <Link to="websites-list">
                            <p className='icon-name'>Websites</p>
                            </Link>

                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}