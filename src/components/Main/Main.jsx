import './Main.scss';
import Hero from '../Hero/Hero';
import VIDEO_DETAILS from '../Video_details/Video_details';
import COMMENTS_FORM from '../Comments_form/Comments_form';
import VIDEO_COMMENTS from '../Video_comments/Video_comments';
import VIDEO_LIST from '../Video_list/Video_list';

export default function Main({videos, currentVideo, comments}) {

        return (
            <>
                <Hero 
                    currentVideo={currentVideo}
                />
                <section className="Main__container">
                <div className="Main__container-left">
                    <VIDEO_DETAILS 
                        currentVideo={currentVideo}
                    />
                    <COMMENTS_FORM />
                    <VIDEO_COMMENTS 
                        comments={comments}
                    />
                </div>
                <div className="Main__container-right"> 
                    <VIDEO_LIST 
                        videos={videos}
                        currentVideo={currentVideo}
                    />
                </div>
                </section>
            </>
        )
    }
