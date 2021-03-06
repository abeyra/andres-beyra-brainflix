import './Video_comments.scss';

export default function Video_comments({comments}) {

    return (    
                <>
                    <section className="Comments">
                        <ul className="Comments__container">
                            {comments.map((comment) => {
                                return (
                                    <li key={comment.id} className='Comments__post' >
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

