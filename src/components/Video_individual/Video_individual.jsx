import './Video_individual.scss';
import {Link, Route, BrowserRouter} from 'react-router-dom'; 

export default function Video_individual({id, image, title, channel, handleVideoChange}) {

    return (
    <BrowserRouter>
    <Route>
        <Link to={id} onClick={() => handleVideoChange(id) }>
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
    </Route>
    </BrowserRouter>
    )
}