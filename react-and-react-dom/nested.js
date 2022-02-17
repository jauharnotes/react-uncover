const myMenu = React.createElement("ul", {}, [
  React.createElement("li", { key: 1 }, [
    React.createElement(
      "a",
      { href: "https://id.wikipedia.org/wiki/Espreso", key: 'a' },
      "Expresso"
    ),
  ]),
  React.createElement("li", { key: 2 }, [
    React.createElement(
      "a",
      { href: "https://id.wikipedia.org/wiki/Cappucino", key: 'b' },
      "Cappuccino"
    ),
  ]),
  React.createElement("li", { key: 3 }, [
    React.createElement(
      "a",
      { href: "https://id.wikipedia.org/wiki/Moka", key: 'c' },
      "Moccacino"
    ),
  ]),
]);

ReactDOM.render(myMenu, document.getElementById("root"));
