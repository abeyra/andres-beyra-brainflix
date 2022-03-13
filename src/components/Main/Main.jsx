import './Main.scss';
import Hero from '../Hero/Hero';
import Video_Details from '../Video_Details/Video_Details';
import Comments_Form from '../Comments_Form/Comments_Form';
import Video_Comments from '../Video_Comments/Video_Comments';
import Video_List from '../Video_List/Video_List';

export default function Main({videos, currentVideo, comments}) {
    
    return (
        <>
            <Hero 
                currentVideo={currentVideo}
            />
            <section className="Main__container">
                <div className="Main__container-left">
                    <Video_Details 
                        currentVideo={currentVideo}
                    />
                    <Comments_Form />
                    <Video_Comments 
                        comments={comments}
                    />
                </div>
                <div className="Main__container-right"> 
                    <Video_List 
                        videos={videos}
                        currentVideo={currentVideo}
                    />
                </div>
            </section>
        </>
    )
}
