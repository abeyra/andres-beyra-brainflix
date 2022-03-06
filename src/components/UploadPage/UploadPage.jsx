import './UploadPage.scss';
import Bike from '../../assets/images/Upload-video-preview.jpg';
import PublishIcon from '../../assets/icons/publish.svg';
import {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class UploadPage extends Component {

    state = {
        submitted: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target; 
        const title = form.videoTitle.value;
        const description = form.videoDescription.value;
        if(title && description){
          alert("Upload Successful!");
          this.setState({submitted: true})
        } else {
          alert("Failed to upload, fill out form!");
        }
    }

    render() {

        if(this.state.submitted){
            return <Redirect to="/" />
        }

        return (
            <>
            <section className="Upload">
                <h1 className="Upload__title">Upload Video</h1>
                <form action="" className="Upload__form" onSubmit={this.handleSubmit}>
                    <label className="Upload__form-label" htmlFor="">VIDEO THUMBNAIL</label>
                    <img className="Upload__form-image" src={Bike} alt="upload bike" />
                    <label className="Upload__form-label" htmlFor="upload-input">TITLE YOUR VIDEO</label>
                    <input className="Upload__form-input" type="text" placeholder="Add a title to your video" id="upload-input" name="videoTitle"/>
                    <label className="Upload__form-label" htmlFor="upload-textarea">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="Upload__form-textarea" name="" id="upload-textarea" placeholder="Add a description to your video" name="videoDescription"></textarea>
                    <div className="Upload__form-publish-container">
                        <button type='submit' className="Upload__form-publish-container-button">PUBLISH</button>
                        <img className="Upload__form-publish-container-icon" src={PublishIcon} alt="publish icon" />
                    </div>
                    <button className="Upload__cancel-button">CANCEL</button>
                </form>
            </section>
            </>
        )
    }
}