import "./UploadPage.scss";
import Bike from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
const { v4: uuidv4 } = require('uuid');
const url = "http://localhost:5001/videos/";

export default class UploadPage extends Component {
  state = {
    submitted: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = event.target.videoTitle.value;
    const description = event.target.videoDescription.value;
    let id = uuidv4();
    // let image = '../../assets/images/Upload-video-preview.jpg';
    
    if (title && description) {
        alert("Upload Successful!");
       
        axios.post(url, {title, description, id})
        .then(response => {
            console.log(response);
        })
        this.setState({ submitted: true });
    } else {
      alert("Failed to upload, fill out form!");
    }
  };

  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <section className="Upload">
          <h1 className="Upload__title">Upload Video</h1>
          <form action="" className="Upload__form" onSubmit={this.handleSubmit}>
            <div className="Upload__form-content-container">
              <div className="Upload__form-image-container">
                <label className="Upload__form-label" htmlFor="">
                  VIDEO THUMBNAIL
                </label>
                <img
                  className="Upload__form-image"
                  src={Bike}
                  alt="upload bike"
                />
              </div>
              <div className="Upload__form-inputs-container">
                <label className="Upload__form-label" htmlFor="upload-input">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="Upload__form-input"
                  type="text"
                  placeholder="Add a title to your video"
                  id="upload-input"
                  name="videoTitle"
                />
                <label className="Upload__form-label" htmlFor="upload-textarea">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="Upload__form-textarea"
                  id="upload-textarea"
                  placeholder="Add a description to your video"
                  name="videoDescription"
                ></textarea>
              </div>
            </div>
            <div className="Upload__form-publish-container">
              <button
                type="submit"
                className="Upload__form-publish-container-button"
              >
                PUBLISH
              </button>
              <img
                className="Upload__form-publish-container-icon"
                src={PublishIcon}
                alt="publish icon"
              />
              <button className="Upload__form-publish-container-cancel-button">
                CANCEL
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}
