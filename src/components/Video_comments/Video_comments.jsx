import './Video_comments.scss';
import Details from '../../data/video-details.json';
import React from 'react';

class Video_comments extends React.Component {

    state = {
        details: Details
    }

    render() {
        return (
            <>
            <section className="Comments">
            <ul className="Comments__container">

                {this.state.details[0].comments.map((comment) => {
                    return (
                        <li className='Comments__post'>
                            <div className="Comments__post-circle"></div>
                            <div className="Comments__post-content">
                                <h3 className="Comments__post-content-author">{comment.name}</h3>
                                <p className="Comments__post-content-date">{new Date (comment.timestamp).toLocaleDateString()}</p>
                                <p className="Comments__post-content-message">{comment.comment}</p>
                            </div>
                        </li>
                    )

                })}

                
            </ul>
            </section>
            </>
        )
    }
}

export default Video_comments;