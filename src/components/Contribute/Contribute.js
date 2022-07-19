import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col} from 'react-bootstrap';
import { ModalBody } from "react-bootstrap";
import { useMoralis } from "react-moralis";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { FaGift } from 'react-icons/fa';
import { useWeb3Transfer } from 'react-moralis';


export default function ModalContribute() {


  const { Moralis } = useMoralis();
  const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
  const client = new Web3Storage({ token: API_Token })

  const untouchedReview = Moralis.Object.extend("UntouchedArchieve");
  const reviewUntouched = new untouchedReview();

  const [gift, setGift] = useState('');
  const [ETHbalance, setETHbalance] = useState('');
  const [review, setReview] = useState('');
  const [userAddress, setUserAddress] = useState('');

  let user = {
    name:userAddress,
    gift:gift,
    review:review,
    ETHbalance:ETHbalance
  }
  console.log(user,'user obj');

  const handleGift = (e) => {
    setGift(e.target.value)
  }
  const handleReview = (e) => {
    setReview(e.target.value)
  }
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function onAddClick(e) {
    e.preventDefault();
    console.log('review ok');

    // addReview();
    storeFiles();
}

function addReview() {
  const blob = new Blob(
      [
          JSON.stringify(user)
      ],
      { type: "application/json" }
  );
  const files = [
      new File([blob], "data.json"),
  ];
  console.log(files);
  return files;
}

async function TransferEth(){
  const web3 = await Moralis.enableWeb3();
await Moralis.transfer({type:"native",receiver:"0xE9B4b5985fa998516A58D9449Fe53048f0Dd33aB",
  amount:Moralis.Units.ETH("0.00001")
})
console.log('transferd success');

}

async function storeFiles() {
  let files = addReview()
  console.log(files);
  const cid = await client.put(files);
  reviewUntouched.set("CID", cid);
  reviewUntouched.save();
  TransferEth(); 
  console.log("files with cid ==>", ` https://dweb.link/ipfs/${cid}`);
  // setReview('');
  return cid;
 
}
  return (
    <div>
      <Button variant="contained" className='gift-btn' onClick={handleClickOpen}>
        Gift
      </Button>

      {/* After contributed----- */}
      
      <div className="App">
        <Container className='p-4'>
          <Row>
            {[
           
              'Light',
            ].map((variant, idx) => (
              <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: "49%", height:"100px" }}
                className=" offset-3"
              >
                {/* <Card.Header>Card Header</Card.Header> */}
                <Card.Body>
                  <Card.Title> 123456 </Card.Title>
                  {/* <FaGift></FaGift> */}<span style={{display:"flex"}}><FaGift className='gift-icon'></FaGift><span><h4> {gift}ETH</h4></span></span>
                  <div className="gift-under-line col-12"></div>

                  <Card.Text>
                    {/* Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs */}
                    {review}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
     
            



      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Gifts</DialogTitle>
        <div className='dialogUnderline'></div>
        <DialogContent>
          <h3>
            ETH Balance :
          </h3>
          <TextField
            autoFocus
            value={gift}
            margin="dense"
            onChange={handleGift}
            className="ETH-amount"
            label="Enter Amount"
            type="number"
            fullWidth
          />
          <TextField
            fullWidth
            value={review}
            onChange={handleReview}
            className='message-review'
            label="Message / Review"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onAddClick}> Gift ETH </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}