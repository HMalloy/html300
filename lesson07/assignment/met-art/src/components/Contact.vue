<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-alert v-model="messageSubmitted" variant="success" dismissible>Your message has been received!</b-alert>
    <b-form>
      <b-row>
        <b-col md="6">
          <b-form-group id="firstName" label="First Name" label-for="firstNameInput">
            <b-form-input
              id="firstNameInput"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="lastName" label="First Name" label-for="lastNameInput">
            <b-form-input
              id="lastNameInput"
            ></b-form-input>
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
          v-model="text"
          rows="3"
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
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact',
      messageSubmitted: false
    }
  }
}
</script>

<style>
</style>
