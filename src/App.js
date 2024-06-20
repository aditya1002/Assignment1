import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function App() {
  const pages = ['page1', 'page2', 'page3', 'page4'];
  const [allchecked, setChecked] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const displayer = () => {
    if (allchecked.length > 0) {
      window.alert("Selected " + " " + String(allchecked));
    }
    else {
      window.alert("No Page selected");
    }
  }
  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setChecked(pages.map(li => li));
    if (isCheckAll) {
      setChecked([]);
    }
  };
  const handler = (e) => {
    if (e.target.checked) {
      setChecked([...allchecked, e.target.value]);
    }
    else {
      setChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }
  console.log(allchecked);
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ width: '390px', height: '326px', boxShadow: "1px 05px 05px 05px lightgrey" }}>


          <div>
            <Row style={{ marginTop: "12px" }}>
              <Col>
                <p style={{ marginLeft: "20px" }}>All Pages</p>
              </Col>
              <Col>
                <input type='checkbox' onChange={handleSelectAll}
                  isChecked={isCheckAll} style={{ float: "right", marginRight: "20px", transform: "scale(1.5)", marginTop: "10px" }}></input>
              </Col>
            </Row>

            <hr
              style={{ borderTop: "2px solid grey", marginLeft: "10px", width: "95%" }}
            ></hr>
            <div style={{ marginTop: "10px" }}>
              {pages.map((i) =>
                <>
                  <Row>
                    <Col >
                      <p style={{ marginLeft: "20px" }}>{i}</p>
                    </Col>
                    <Col>
                      <input type='checkbox' value={i} checked={allchecked.includes(i)} onChange={handler} style={{ float: "right", marginRight: "20px", transform: "scale(1.5)" }}></input>
                    </Col>
                  </Row>
                </>

              )}
            </div>
            <hr
              style={{ borderTop: "2px solid grey", marginLeft: "10px", width: "95%" }}
            ></hr>

            <Button style={{ width: "340px", height: "40px", marginLeft: "20px", marginBottom: "20px" }} className="But" variant="warning" onClick={displayer}>Done</Button>
          </div>
        </Card>

      </header>
    </div>
  );
}

export default App;
