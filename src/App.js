import { useState } from 'react'
import Icon from './Components/Icon'
import { Container, Card, CardBody, Row, Col, Button } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Toast } from 'bootstrap';
import './App.css';


const itemArray = new Array(9).fill("empty")
function App() {

  const [isCircle, setIsCircle] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const changeItem = (index) => {
    // 
    console.log(`changeItem() called`);
    if (winMessage) {
      console.log({ winMessage } - toast);
      return toast(winMessage, { type: 'success' })
    }

    if (itemArray[index] === 'empty') {
      itemArray[index] = isCircle ? 'circle' : 'cross';
      setIsCircle(!isCircle);
    } else {
      console.log("No No NO - toast");
      return toast("No No NO", { type: "error" })
    }
    checkIsWinner();
  }
  const checkIsWinner = () => {
    //Rows
    if (itemArray[0] != "empty" && itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2]) {
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (itemArray[4 - 1] !== "empty" && itemArray[4 - 1] === itemArray[5 - 1] && itemArray[4 - 1] === itemArray[6 - 1]) {
      setWinMessage(`${itemArray[4 - 1]} wins`)
    }
    else if (itemArray[7 - 1] !== "empty" && itemArray[7 - 1] === itemArray[8 - 1] && itemArray[7 - 1] === itemArray[9 - 1]) {
      setWinMessage(`${itemArray[7 - 1]} wins`)
    }
    //Columns
    else if (itemArray[1 - 1] !== "empty" && itemArray[1 - 1] === itemArray[4 - 1] && itemArray[1 - 1] === itemArray[7 - 1]) {
      setWinMessage(`${itemArray[1 - 1]} wins`)
    }
    else if (itemArray[2 - 1] !== "empty" && itemArray[2 - 1] === itemArray[5 - 1] && itemArray[2 - 1] === itemArray[8 - 1]) {
      setWinMessage(`${itemArray[2 - 1]} wins`)
    }
    else if (itemArray[3 - 1] !== "empty" && itemArray[3 - 1] === itemArray[6 - 1] && itemArray[3 - 1] === itemArray[9 - 1]) {
      setWinMessage(`${itemArray[3 - 1]} wins`)
    }
    // Diagonals
    else if (itemArray[1 - 1] !== "empty" && itemArray[1 - 1] === itemArray[5 - 1] && itemArray[1 - 1] === itemArray[9 - 1]) {
      setWinMessage(`${itemArray[1 - 1]} wins`)
    }
    else if (itemArray[3 - 1] !== "empty" && itemArray[3 - 1] === itemArray[5 - 1] && itemArray[3 - 1] === itemArray[7 - 1]) {
      setWinMessage(`${itemArray[3 - 1]} wins`)
    }
    else {
      const isDraw = function () {
        for (const a of itemArray) {
          if (a === "empty")
            return false;
        }
        return true;
      };
      if (isDraw())
        setWinMessage(`Draw`)
    }
    // setWinMessage()
  }

  const reset = () => {
    itemArray.fill("empty")
    setIsCircle(false)
    setWinMessage("")
  }

  return (
    <Container className='p-6 mt-5'>
      <Row >
        <Col md={6} className='offset-md-3'>
          {
            winMessage ? (
              <div className='mb-2 mt-2'>
                <h1 className='text-success text-uppercase text-center'>{winMessage}</h1>
                <Button block color='success' onClick={reset}>Reset</Button>
              </div>
            ) : (
              <h1 className='text-center text-warning'>{isCircle ? 'Circle' : 'Cross'}'s turn</h1>
            )
          }

          <div className='grid'>
            {
              itemArray.map((value, index) => (
                <Card onClick={() => changeItem(index)}>
                  <CardBody className='box' > <Icon type={value} /> </CardBody>
                </Card>
              ))
            }
          </div>
        </Col>
      </Row>
      <ToastContainer position='top-right' />
    </Container>
  );

}

export default App;
