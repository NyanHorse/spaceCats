import React from 'react';
import CatsView from "./catsView";


class TestView extends React.Component {
  constructor(props) {
    super(props); 
    //this states will be stored in the users table
    this.state = {
      q1: "T",
      q2: "T",
      q3: "T",
      q4: "T",
      email: "",
      showCats: false
    }
  }; 

  handleChange (event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  }

  
  submitTest(event){
    event.preventDefault();
    let results = this.state.q1 + this.state.q2 + this.state.q3 + this.state.q4;

    fetch("http://localhost:3000/api/v1/spacecats", {
      method: 'POST',
      body: JSON.stringify({'email': this.state.email, 'results': results}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()) 
    .then(json => { 
      console.log(json);
      this.setState({
        showCats: true,
        id: json.body[0].id
      })
    }) 
    .catch(error => {
      this.setState({
        error: true
      })
    })       
  }


  render() {
  
    let view;
    
    if (!this.state.showCats) {
      view =( 
      <div>
        <h1>Test</h1>

        <p>Question1 - Independent</p>
        <form>
          <select name="q1" value={this.state.q1} onChange={(e) => this.handleChange(e)}>
            <option value="T">Answer1</option>
            <option value="F">Answer2</option>
          </select>
        </form>

            <p>Question2 -Active</p>
        <form>
          <select name="q2" value={this.state.q2} onChange={(e) => this.handleChange(e)}>
            <option value="T">Answer1</option>
            <option value="F">Answer2</option>
          </select>
        </form>

            <p>Question3 - Friendly</p>
        <form>
          <select name="q3" value={this.state.q3} onChange={(e) => this.handleChange(e)}>
            <option value="T">Answer1</option>
            <option value="F">Answer2</option>
          </select>
        </form>

            <p>Question - Lovely</p>
        <form>
          <select name="q4" value={this.state.q4} onChange={(e) => this.handleChange(e)}>
            <option value="T">Answer1</option>
            <option value="F">Answer2</option>
          </select>
        </form>
      
        <br></br>

        <input type="text" name="email" onChange={(e) => this.handleChange(e)}></input>    
        <button onClick={(e)=>this.submitTest(e)} >SUBMIT</button>               
      </div>
      )
    } else {
      view = <CatsView  userId={this.state.id}/>
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}



export default TestView;
