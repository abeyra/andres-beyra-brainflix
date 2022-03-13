import './Video_Individual.scss';
import {Link} from 'react-router-dom'; 

export default function Video_Individual({id, image, title, channel}) {

    return (
        <Link to={`/videos/${id}`} className="Video-list__link">
            <li className="Video-list__video">
                <div className="Video-list__video-image-container">
                    <img className="Video-list__video-image" src={image} alt="video" />
                </div>
                <div className="Video-list__video-content">
                    <p className="Video-list__video-content-title">{title}</p>
                    <p className="Video-list__video-content-channel">{channel}</p>
                </div>
            </li>
        </Link>
    )
}