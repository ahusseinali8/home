import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Dialog from 'react'

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    industry: '',
    subject: '',
    message: '',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, industry, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'aness.hussein.ali@gmail.com',
      industry: industry,
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'service_h0q75wd',
      'template_6swj4jw',
       templateParams,
      'user_QuG1TIbvzRN8kheqkRwUr'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
          <h1 className="p-heading1">Get in Touch!</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} target="my_iframe" style={{alignitems:"right"}}>
          <ul>
          <li>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted" style={{ textAlign: 'left' }}>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                style={{ alignItems: "right", flex:1, width: '1000%' }}
              />
            </FormGroup>
            </li>
            <li>
<FormGroup controlId="formBasicName">
              <Label className="text-muted" style={{ textAlign: 'left' }}>Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                style={{ alignItems: "right", flex:1 }}
              />
              </FormGroup>
              </li>
              <li>
  <FormGroup controlId="formBasicIndustry">
                <Label className="text-muted" style={{ textAlign: 'left' }}>Industry</Label>
                <Input
                  type="textarea"
                  name="industry"
                  className="text-primary"
                  value={this.state.industry}
                  onChange={this.handleChange.bind(this, 'industry')}
                  placeholder='Industry'
                  style={{ flex: 1, padding: 5, size:1 }}
                />
            </FormGroup>
            </li>
            <li>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted" style={{ textAlign: 'left' }}>Subject</Label>
              <Input
                style={{ flex: 1, padding: 5, alignItems: 'center' }}
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
            </li>
            <li>
<FormGroup controlId="formBasicMessage" style={{ flex: 1 }}>
              <Label className="text-muted" style={{ textAlign: 'left' }}>Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                style={{ flex: 1, alignItems: 'center', padding: 5, width: '20vw'}}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
            </li>
            </ul>
          </Form>
      </>
    )
  }
}
export default ContactForm
