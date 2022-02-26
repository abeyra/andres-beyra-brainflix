import './Comments_form.scss';
import CTA from '../../assets/icons/add_comment.svg';

function Comments_form() {
    return (
        <>
            <section className="Comments_form">
                <h3 className="Comments_form-title">3 Comments</h3>


                <div className="Comments_form-avatar"></div>
                
                <form className='Comments_form-form' action="">
                    <label className="Comments_form-label" htmlFor="">JOIN THE CONVERSATION</label>
                    <textarea className="Comments_form-textarea" name="" id="">Add a new comment</textarea>
                    <div className="Comments_form-cta">
                        <button className="Comments_form-cta-button">COMMENT</button>
                        <img className="Comments_form-cta-icon" src={CTA} alt="call to action icon" />
                    </div>
                </form>





            </section>
        </>
    );
}

export default Comments_form;