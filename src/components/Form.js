import React, { Component } from 'react';

import FormToggle from './FormToggle'
import { navigate } from 'gatsby-link'

import config from '../../config';

class Form extends Component{

  state = {open: false,}

  toggleFormOpen = () => {
  this.setState({ open: !this.state.open });
};

encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

handleChange = (e) => {
  this.setState({ ...this.state, [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault()
  const form = e.target
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: this.encode({
      'form-name': form.getAttribute('name'),
      ...this.state,
    }),
  })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
}


  render(){

    if(this.state.open){
      return(
        <section id="ctaDark" className="wrapper style4 darken">
          <div className="inner">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" onChange={this.handleChange}/>
              </div>
            <div class="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.handleChange}/>
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4" onChange={this.handleChange}></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send Message" class="primary" /></li>
            <li><input type="reset" value="Reset" onClick={this.toggleFormOpen} /></li>
          </ul>
        </form>
        </div>
      </section>
        );
      }
    else{
    return(
      <section id="cta" className="wrapper style4">
        <div className="inner">
      <FormToggle clicked ={this.toggleFormOpen}>
        Contact Me
      </FormToggle>
      </div>
    </section>

  );
  }
  }
}

export default Form
