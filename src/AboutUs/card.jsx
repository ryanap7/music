import React from "react";
import "./styles.css";

class ContactCard extends React.Component {
  render() {
    const { name, jurusan, email, phone, imgURL } = this.props.contact;
    return (
      <div className="parents">
        <div className="contact-card">
          <div className="card">
            <div className="list">
              <h2>{name}</h2>
            </div>
            <div className="imgWraper">
              <img className="imgURL" src={imgURL} alt="Profile" />
            </div>
            <div className="list1">
              <p>{jurusan}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Co extends React.Component {
  render() {
    const contactsList = contacts.map((contact) => (
      <ContactCard key={contact.id} contact={contact} />
    ));
    return (
      <div className="judul">
        {" "}
        <div className="judul1">ABOUT US</div>
        {contactsList}
      </div>
    );
  }
}
export default ContactCard;
