import React, { Component } from 'react';

import FormToggle from './FormToggle'
import { navigate } from 'gatsby-link'

import config from '../../config';
import classes from '../assets/sass/mine.module.scss'

class Form extends Component{

  state = {
            open: false,
            dark: null,
            formVis: "hidden",
            buttonVis: "show"
          }

  toggleFormOpen = () => {
  this.setState({ open: !this.state.open });
  if(this.state.open)
  {
    this.setState({
      dark: "dark",
      formVis: "show",
      buttonVis: "hidden"
    });
  }
  else{
    this.setState({
      dark: null,
      formVis: "hidden",
      buttonVis: "show"
    });
};
}

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


      return(
        <section id="ctaDark" class={"wrapper style4 "+this.state.dark}>
        <div class={"inner " +this.state.buttonVis}>
        <FormToggle clicked ={this.toggleFormOpen}>
          Contact Me
        </FormToggle>

        </div>

          <div class={"inner " +this.state.formVis}>

        <form
          name="contact"
          method="POST"
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
}

export default Form
