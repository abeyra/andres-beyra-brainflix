import './Video_Comments.scss';
const { v4: uuidv4 } = require('uuid');

export default function Video_Comments({comments}) {

    return (    
                <>
                    <section className="Comments">
                        <ul className="Comments__container">
                            {comments.map((comment) => {
                                return (
                                    <li key={uuidv4()} className='Comments__post' >
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

