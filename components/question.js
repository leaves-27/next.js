const Question = (props) => {
  let questions = [];

  for(let i=0;i<props.answers.length;i++){
    questions.push(
      <label style={{ "display":"block" }}>
        <span style={{ "margin-right" : "5px"}}>✦</span>
        <span>{ props.answers[i].desc}</span>
      </label>
    )
  }

  return (
    <div style={{ 
      "background-color" : "#FFF8E1",
      "border" : "1px solid #FFE0B2",
      "max-width" : "580px",
      "padding" : "10px",
      "margin" : "0 0 20px 0"
    }}>
      { questions }
    </div>
  );
}

export default Question

