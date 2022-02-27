import './Video_list.scss';
import Video_individual from '../Video_individual/Video_individual';

export default function Video_list({id, videos, currentVideo, handleVideoChange}) {

    
        return (
            <>
            <section className="Video-list">
                <h3 className="Video-list__title">NEXT VIDEOS</h3>

                <ul className="Video-list__videos">

                    {videos
                    .filter(video => video.id !== currentVideo.id)

                    .map((video) => {
                        return (
                            <Video_individual 
                                key={video.id}
                                id={video.id}
                                image={video.image}
                                title={video.title}
                                channel={video.channel}
                                handleVideoChange={handleVideoChange}
                            
                            />

                        )


                    })
                }

                </ul>

            </section>
                        
            </>
        )
    }
