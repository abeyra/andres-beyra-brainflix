import './Comments_Form.scss';
import CTA from '../../assets/icons/add_comment.svg';

export default function Comments_Form() {
    
    return (
        <>
            <section className="Comments_form">
                <h3 className="Comments_form-title">3 Comments</h3>
                <div className="Comments_form-avatar"></div>
                <div className="Comments_form-wrapper">
                    <form className='Comments_form-form' action="">
                        <label className="Comments_form-label" htmlFor="textarea">JOIN THE CONVERSATION</label>
                        <textarea id="textarea" className="Comments_form-textarea" name="" placeholder="Add a new comment"></textarea>
                        <div className="Comments_form-cta">
                            <button className="Comments_form-cta-button">COMMENT</button>
                            <img className="Comments_form-cta-icon" src={CTA} alt="call to action icon" />
                        </div>
                    </form>                
                </div>
            </section>
        </>
    );
}
