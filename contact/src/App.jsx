import React from "react";
import Contacts from "./contacts";
import Card from "./people";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name={Contacts[0].name}
        img={Contacts[0].image}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].image}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].image}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
