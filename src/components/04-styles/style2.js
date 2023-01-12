import React from "react";

const Style2 = () => {
  
  const styleTitle = {
    fontSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam
        inventore similique accusantium placeat cupiditate voluptatibus suscipit
        nihil illum neque. Exercitationem dolor tempora, laborum facere nihil
        iure autem corporis accusamus!
      </p>
      <h2 style={{ ...styleTitle, color: "blue" }}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        omnis, nostrum quae accusamus, sint eaque incidunt ipsam cupiditate
        blanditiis molestiae atque illum a impedit deserunt nobis eum voluptates
        labore ipsa.
      </p>
    </div>
  );
};

export default Style2;
