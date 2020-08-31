<template>
  <div>
    <Heading>
      <h1 slot="heading">Contact Us</h1>
    </Heading>
    <b-alert v-model="messageSubmitted" variant="success" dismissible>Your message has been received!</b-alert>
    <b-form>
      <b-row>
        <b-col md="6">
          <b-form-group id="firstName" label="First Name" label-for="firstNameInput">
            <b-form-input
              id="firstNameInput"
              v-model="firstName"
            ></b-form-input>
            <small class="text-secondary">{{firstName}}</small>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="lastName" label="First Name" label-for="lastNameInput">
            <b-form-input
              id="lastNameInput"
              v-model="lastName"
            ></b-form-input>
            <small class="text-secondary">{{lastName}}</small>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group
        id="emailAddress"
        label="Email address"
        label-for="emailAddresInput"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="emailAddresInput"
          v-model="emailAddress"
          type="email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="mainMessage"
        label="Message"
      >
        <small class="text-secondary">What can we help you with today?</small>
        <b-form-textarea
          id="mainMessageInput"
          rows="3"
          v-model="message"
        ></b-form-textarea>
      </b-form-group>
      <b-form-checkbox
        id="newsletter"
        name="checkbox-1"
        value="yes"
        unchecked-value="no"
      >
        Sign me up for a monthly newsletter!
      </b-form-checkbox>
      <b-button @click="messageSubmitted=true" class="mt-3" type="button" variant="dark">Submit</b-button>
      <small id="submitHelp" class="form-text text-muted">You will receive a response within 2 business days.</small>
    </b-form>
    <b-card title="Your Message" sub-title="This is what your message to us looks like" class="mt-5">
      <p>
        <small>
          From: {{firstName}} {{lastName}}<br>
          Email: {{emailAddress}}
        </small>
      </p>
      <p>Message: {{message}}</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      messageSubmitted: false,
      firstName: '',
      lastName: '',
      emailAddress: '',
      message: ''
    }
  }
}
</script>
