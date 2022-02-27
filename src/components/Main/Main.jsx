import './Main.scss';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Video_details from '../Video_details/Video_details';
import Comments_form from '../Comments_form/Comments_form';
import Video_comments from '../Video_comments/Video_comments';
import Video_list from '../Video_list/Video_list';

export default function Main({videos, currentVideo, handleVideoChange}) {

    return (
        <>
        <Header />
        <Hero 
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />
        <section className="Main__container">
        <div className="Main__container-left">
        <Video_details 
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />
        <Comments_form />
        <Video_comments 
            key={currentVideo.id}
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />
        </div>
        <div className="Main__container-right"> 
        <Video_list 
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />
        </div>
        </section>
        </>
    )
}