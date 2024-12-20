function Multirange() {
    
    let minValue=(event)=>{
        event.preventDefault()
        let value=parseInt(event.target.value)
        console(value)

    }

  return (
    <div>
      <h1>Multirange</h1>
      <input
        className="input-range"
        type="range"
        min={0}
        max={1000}
        onChange={minValue}
      />
      <input className="input-range" type="range" min={0} max={2000} />
    </div>
  );
}

export default Multirange;
