import React from "react";

class CatsView extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        error: false, 
        cats: {}
      }
    }; 

    componentDidMount() {
      fetch(`http://localhost:3000/api/v1/spacecats/results?id=${this.props.userId}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cats: json
        })
      })
      .catch(error => { 
        this.setState({
          error: true
        })        
      })
    }

    render() {

      let gats = this.state.cats;
      let catPhotos = [];
      for(let key in gats) {
      catPhotos.push(<img key={key} className="catPic" src={gats[key].media.photos.photo[3].$t} />) 
      }
    
      return(
        <div>{catPhotos}</div>
      )
    }

}    

export default CatsView;