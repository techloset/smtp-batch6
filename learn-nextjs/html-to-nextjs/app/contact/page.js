import Button from "../(components)/button/button";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";

export default function Contact() {
  return (
    <>
      <Header title="Contact" />
      <section  className="loacation">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
          width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </section>


      <section className="contact-us">
        <div className="row">
          <div className="content-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>NH9 Road, ABC Building</h5>
                <p>Ghaziabad, Uttar Pradesh, IN</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+91 7445546525</h5>
                <p>Monday To Saturday, 9AM To 6PM</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <span>
                <h5>xyz@email.com</h5>
                <p>Email Us Yor Query</p>
              </span>
            </div>
          </div>
          <div className="content-col">
            <form>
              <Input type="text" place="Enter Name" />
              <Input type="email" place="Enter Email" />
              <Input type="text" place="Enter Subject"/>
              <textarea rows="8" placeholder="Message" required></textarea>

              <Button text="Send Message" />
              {/* <button type="submit" className="hero_btn btn">Send Message</button> */}
            </form>
          </div>
        </div>
      </section>

    </>
  )
}
