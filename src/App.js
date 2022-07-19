import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UploadForm from './components/UploadForm';
import BookList from './components/ListingPage/BookList';
import DocumentList from './components/ListingPage/DocumentList';
import NewspaperList from './components/ListingPage/NewspaperList'
import Header from './components/Header';
import Footer from './components/Footer';
import WebsiteList from './components/ListingPage/WebsitesList';
import BookDetail from './components/DetailsPage/BookDetail';
import DocumentDetail from './components/DetailsPage/DocumentDetail';
import NewsDetail from './components/DetailsPage/NewsDetail';
import WebsiteDetail from './components/DetailsPage/WebsiteDetail';
function App() {
  return (
    <div className="App">
<Header />
<Routes>
<Route path="/" element= {<Home />}/>
  <Route path ="/upload-form" element = {<UploadForm />}/>
  <Route path ="/book-list" element = { <BookList />} />
  <Route path="/book-detail" element = { <BookDetail /> } />
  <Route path="/doc-detail" element = { <DocumentDetail /> } />
  <Route path="/news-detail" element = { <NewsDetail /> } />
  <Route path="/web-detail" element = { <WebsiteDetail /> } />
<Route path="/documents-list" element = {<DocumentList />} />
<Route path = "/newspapers-list" element = { <NewspaperList /> } />
<Route path = "/websites-list" element = { <WebsiteList /> } />
</Routes>
<Footer />
      {/* <BookList></BookList> */}
      {/* <BookDetail></BookDetail> */}
    </div>
  );
}

export default App;
