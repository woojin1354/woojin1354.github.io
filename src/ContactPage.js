import "./ContactPage.css"
import ProfileImage from "./assets/images/ProfileImage.png"
function ContactPage() {
    return (
        <div className="contact-section">
            <div className="profile">
                <img
                className="image"
                alt="Profile"
                src={ProfileImage}
                />
            </div>

            <div className="container">
                <div className="div">
                <div className="text-wrapper">연락처</div>
                </div>

                <div className="div">
                    <p className="p">
                        <span className="span">궁금한 점이 있으시거나 함께 일하고 싶으시다면 언제든지 연락주세요 !</span>
                    </p>
                </div>

                <div className="contact-info">
                <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-text"><a href="mailto:woojin1354@gmail.com">woojin1354@gmail.com</a></div>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">🌐</div>
                    <div className="contact-text"><a href="https://github.com/woojin1354">github.com/woojin1354</a></div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;