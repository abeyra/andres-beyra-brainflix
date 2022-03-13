import './Main.scss';
import Hero from '../Hero/Hero';
import Video_details from '../Video_details/Video_details';
import Comments_form from '../Comments_form/Comments_form';
import Video_comments from '../Video_comments/Video_comments';
import Video_list from '../Video_list/Video_list';

export default function Main({videos, currentVideo, comments}) {
    
    return (
        <>
            <Hero 
                currentVideo={currentVideo}
            />
            <section className="Main__container">
                <div className="Main__container-left">
                    <Video_details 
                        currentVideo={currentVideo}
                    />
                    <Comments_form />
                    <Video_comments 
                        comments={comments}
                    />
                </div>
                <div className="Main__container-right"> 
                    <Video_list 
                        videos={videos}
                        currentVideo={currentVideo}
                    />
                </div>
            </section>
        </>
    )
}
