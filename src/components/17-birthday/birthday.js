import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import PersonCard from "./person-card";

const Birthday = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    const arr = people.filter((item) => item.id !== id);
    setPeople(arr);
  };

  return (
    <Container>
      <h1>Bugün Doğanlar</h1>
      <p>Bugün Doğan {people.length} kişi bulundu</p>

      {people.map((item) => (
        <PersonCard {...item} key={item.id} deletePerson={deletePerson} />
      ))}
      <Button variant="danger" onClick={() => setPeople([])}>
        Remove All
      </Button>
      <Button variant="success" onClick={() => setPeople(data)}>
        Reload Data
      </Button>
    </Container>
  );
};

export default Birthday;
