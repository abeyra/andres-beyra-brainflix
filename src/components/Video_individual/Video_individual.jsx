import './Video_individual.scss';

export default function Video_individual({id, image, title, channel, handleVideoChange}) {

    return (
        <a className="Video-list__link" onClick={() => handleVideoChange(id) }  href="#root">
            <li className="Video-list__video">
                <div className="Video-list__video-image-container">
                    <img className="Video-list__video-image" src={image} alt="video image" />
                </div>
                <div className="Video-list__video-content">
                    <p className="Video-list__video-content-title">{title}</p>
                    <p className="Video-list__video-content-channel">{channel}</p>
                </div>
            </li>
        </a>
    )
}