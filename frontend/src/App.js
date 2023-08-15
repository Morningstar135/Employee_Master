import AddItem from './AddItem';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import ListItems from './ListItems';
import Search from './Search';
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState([])
  const [val, setVal] = useState('')
  const [match, setMatch] = useState(true)
  useEffect(() => {
    const get = async () => {
      const response = await axios.get("http://localhost:8080/todo")
      if (val === '')
        setList(response.data)
      setIsLoading(false)
    }
    get()
  }, [val])

  return (
    <Container>
      <div className="Container">
        <div className='row justify-content-center'>
          <Row >
            <Header />
          </Row>
          <Row>
            <AddItem
              setList={setList}
              list={list}
            />
          </Row>
          <Row>
            <Search
              val={val}
              setVal={setVal}
              setList={setList}
              list={list}
              setMatch={setMatch}
            />
          </Row>
          <Row>
            <ListItems
              list={list}
              setList={setList}
              isLoading={isLoading}
              match={match} />
          </Row>
        </div>

      </div>
    </Container>
  );
}

export default App;
