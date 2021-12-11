const Props = () => {
  const style = {
    border: "10px solid blue",
    padding: "1em",
    color: "steelblue",
    fontWeight: "bold",
  };

  return (
    <div style={style}>
      <Children name="Elina" />
    </div>
  );
};

const Children = ({ style, name }) => {
  return (
    <div className="children-container" style={style}>
      {name}
    </div>
  );
};

export default Props;
