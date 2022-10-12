import React from "react";
import axios from "axios";
import Search from "./components/Search";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };
  onSeachSubmit = async (term) => {
    const response = await axios.get(
      "https://api.spacexdata.com/v5/launches/latest",
      {
        params: { query: term },
      }
    );
    this.setState({ images: response.data.links });
    this.setState({ images: response.data.flight_number });
    this.setState({ images: response.data.name });
    this.setState({ images: response.data.date_local });

    console.log(response.data.links.patch);
    console.log(response.data.flight_number);
    console.log(response.data.name);
    console.log(response.data.date_local);
  };

  render() {
    return (
      <div>
        <Search onSubmit={this.onSeachSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
