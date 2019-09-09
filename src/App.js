import React, {Component} from 'react'
import SearchBar from "./components/SearchBar";
import UnSplash from "./api/Unsplash";
import ImageList from "./components/ImageList";

class App extends Component {

    state = {
        images: []
    };

    componentDidMount() {
        this.onSearchSubmit('lamborghini')
    }

    onSearchSubmit = async (term) => {
        const response = await
            UnSplash.get('/search/photos', {
            params: { query: term },

        });

        this.setState({images: response.data.results });
    };

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App
