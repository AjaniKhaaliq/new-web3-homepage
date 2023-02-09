function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date} on our calendar.</h2>
    </div>
  );
}

function Tick() {
    setInterval(()=>{
        return(<Clock date={new Date().getDate()} />);
    }, 1000);
}

export default Tick;
