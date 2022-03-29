import Col from "./col";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="col1">
        <div className="pic"></div>
        <h1 className="name">John Doe</h1>
      </div>

      <Col
        title="Summary"
        content1="Lorem ipsum dolor sit amet.  quas ex obcaecati cupiditate. Eum repellendus galisum aut maiores voluptatum et natus voluptatibus ut consequatur sapiente est aperiam excepturi."
        content2="Lorem ipsum dolor sit amet. quas ex obcaecati cupiditate. Eum repellendus galisum aut maiores voluptatum et natus voluptatibus ut consequatur sapiente est aperiam excepturi."
      />
      <Col
        title="Experience"
        content1="Lorem ipsum dolor sit amet. quas ex obcaecati cupiditate. Eum repellendus galisum aut maiores voluptatum et natus voluptatibus ut consequatur sapiente est aperiam excepturi."
        content2="Lorem ipsum dolor sit amet.  quas ex obcaecati cupiditate. Eum repellendus galisum aut maiores voluptatum et natus voluptatibus ut consequatur sapiente est aperiam excepturi."
      />
      <Col
        title="Contact"
        content1="Lorem ipsum dolor sit amet. quas ex obcaecati cupiditate. Eum repellendus galisum aut maiores voluptatum et natus voluptatibus ut consequatur sapiente est aperiam excepturi."
      />
    </div>
  );
}

export default App;
