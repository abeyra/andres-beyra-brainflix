import './Video_comments.scss';
// import Details from '../../data/video-details.json';

export default function Video_comments({videos, currentVideo, handleVideoChange}) {


        return (
            <>
                <section className="Comments">
                <ul className="Comments__container">

                    {videos.comments.map((comment) => {
                        
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

                    }
                )

                    
                }
                  </ul>
                </section>
            </>
        )
    }

