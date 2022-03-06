import Main from '../../components/Main/Main';
import {Component} from 'react';
import axios from 'axios';

const url = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "?api_key=120bcad4-29c9-44b6-9fb0-55962463aa05";

export default class HomePage extends Component {

    state = {
        videos: [],
        currentVideo: [],
        comments: []
  }
  
  componentDidMount() {
    axios.get(url + apiKey)
        .then(response => {
            const videos = response.data;
            this.setState({
                    videos: videos,
                    currentVideo: response.data[0]
                });

        
        axios.get(url + this.state.currentVideo.id + apiKey)
            .then(response => {

                this.setState({
                        currentVideo: response.data,
                        comments: response.data.comments
                    });
                })
            })
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params;
        if (id !== prevProps.match.params.id) {
            axios.get(url + this.props.match.params.id + apiKey)
            .then(response => {
                this.setState({
                    currentVideo: response.data,
                    comments: response.data.comments
                })            
            })
        }
    }

    render() {
        return (
            <>
                <Main 
                    videos={this.state.videos}
                    currentVideo={this.state.currentVideo}
                    comments={this.state.comments}
                />
            </>
        )
    }
}