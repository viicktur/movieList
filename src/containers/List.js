import React from "react";
import Card from "../components/Card/Card";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  async componentDidMount() {
    const movies = await fetch("../../assets/data.json");
    const moviesJSON = await movies.json();

    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false
      });
    }
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <h2>Loading ....</h2>;
    }
    return (
      <div className="row">
        {data.map(movie => (
          <div class="col-sm-2">
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
