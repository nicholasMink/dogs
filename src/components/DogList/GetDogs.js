import { Component } from 'react';
import axios from 'axios';

class GetDogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    
    axios.get(this.props.url)
      .then(result => this.setState({
        data: result.data,
        isLoading: false,
        itemKey: this.itemKey
      }, console.log(result.data)))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    return this.props.children(this.state);
  }
}

export default GetDogs;

// class GetDogs extends Component {
//   state = {
//     dogs: []
//   }
//   componentDidMount() {
//     let itemKey = 0;
//     axios.get(`https://data.austintexas.gov/resource/h8x4-nvyi.json`)
//     .then(res => {
//       const dogs = res.data.map((obj) => { 
//         return({
//           "id": `${itemKey++}`,
//           "owner": `${obj.first_name} ${obj.last_name}`,
//           "address": `${obj.address}`,
//           "dog": `${obj.description_of_dog}`
//         });
//       });
//       console.log(res.data, dogs);
//       this.setState({ dogs });
//     });
//   }
//   render() {
//     return (
//       this.dogs
//     );
//   }
// }
// export default GetDogs