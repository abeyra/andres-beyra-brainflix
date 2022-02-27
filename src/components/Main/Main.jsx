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
        <Video_details 
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />
        <Comments_form />
        <Video_comments 
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />

        <Video_list 
            videos={videos}
            currentVideo={currentVideo}
            handleVideoChange={handleVideoChange}
        />

        </>
    )

}