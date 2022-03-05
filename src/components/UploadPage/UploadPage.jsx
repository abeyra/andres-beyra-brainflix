import './UploadPage.scss';
import Bike from '../../assets/images/Upload-video-preview.jpg';
import PublishIcon from '../../assets/icons/publish.svg';

export default function UploadPage () {

    return (
        <>
        <section className="Upload">
            <h1>Upload Video</h1>
            <form action="" className="Upload__form">
                <label className="Upload__form-label" htmlFor="">VIDEO THUMBNAIL</label>
                <img className="Upload__form-image" src={Bike} alt="upload bike" />
                <label className="Upload__form-label" htmlFor="upload-input">TITLE YOUR VIDEO</label>
                <input className="Upload__form-input" type="text" placeholder="Add a title to your video" id="upload-input"/>
                <label className="Upload__form-label" htmlFor="upload-textarea">ADD A VIDEO DESCRIPTION</label>
                <textarea className="Upload__form-textarea" name="" id="upload-textarea" placeholder="Add a description to your video"></textarea>
                <div className="Upload__form-publish-container">
                    <button className="Upload__form-publish-container-button">PUBLISH</button>
                    <img className="Upload__form-publish-container-icon" src={PublishIcon} alt="publish icon" />
                </div>
                <p>CANCEL</p>
            </form>
        </section>
        </>
    )
}