import './Hero.scss'; 

export default function Hero ({currentVideo}) {
    
        return (
            <>
            <div className="hero__container">
                <video className="hero__video" poster={currentVideo} controls></video>
            </div>
            </>
        )    

}
