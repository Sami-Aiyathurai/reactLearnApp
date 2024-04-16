import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;

/*
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
        <Alert>
        Hello <span>World</span>
      </Alert>
      ></ListGroup>
    </div>
    */
