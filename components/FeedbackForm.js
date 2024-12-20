import React, { Component } from "react";

export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.submitForm} action="https://formspree.io/f/xnqoojkn" method="POST" className="form-wrapper">
        <input type="text" name="Full Name" placeholder="Full name" required />
        <input type="email" name="Email" placeholder="Email" required />
        <textarea name="Message" rows="10" placeholder="Message" required />
        {status === "SUCCESS" ? <p>Thank you for your feedback!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
