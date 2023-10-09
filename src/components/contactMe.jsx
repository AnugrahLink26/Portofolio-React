import "./styles.css"

function ContactMe() {
    return (
        <div className="flex-container">
            <div className="box4">
                <h1 className="details">Get in Touch</h1>
                <p>Whether you have questions, feedback, or are interested in potential collaborations, don't hesitate to get in touch. I value your input and look forward to engaging with you. Feel free to drop us a line and i'll get back to you as soon as possible.</p>
            </div>

            <div className="box5">
                <input type="text" placeholder="Your name.." />
                <input type="text" placeholder="Your email.." />
                <input type="text" id="comment" />
            </div>
        </div>
    )
}

export default ContactMe