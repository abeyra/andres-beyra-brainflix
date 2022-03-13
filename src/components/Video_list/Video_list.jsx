import './Video_List.scss';
import VIDEO_INDIVIDUAL from '../Video_Individual/Video_Individual';

export default function Video_List ({videos, currentVideo})  {

    return (
        <>
            <section className="Video-list">
                <h3 className="Video-list__title">NEXT VIDEOS</h3>
                <ul className="Video-list__videos">
                    {videos
                    .filter(video => video.id !== currentVideo.id)
                        .map((video) => {
                            return (
                                <VIDEO_INDIVIDUAL 
                                    key={video.id}
                                    id={video.id}
                                    image={video.image}
                                    title={video.title}
                                    channel={video.channel}                       
                                />
                            )
                        })
                    }
                </ul>
            </section>                    
        </>
    )
}
