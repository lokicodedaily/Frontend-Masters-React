const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockteil",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Cat",
      breed: "Persian",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
