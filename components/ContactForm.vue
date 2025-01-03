<template>
    <div class="form-container">
      <form @submit.prevent="onSubmit" ref="contactForm">
        <div>
          <input v-model="contactData.name" :class="{
            invalid: (!nameValid && nameTouched) || (!nameValid && formSubmitted),
            valid: nameValid && nameTouched
          }" type="text" id="name" name="name" placeholder="Bitte geben Sie ihren Namen ein..." autocomplete="off"
            required @blur="nameTouched = true" />
          <span v-if="!nameValid && nameTouched">Bitte Namen eingeben !</span>
        </div>
        <div>
          <input v-model="contactData.email" :class="{
            invalid: (!emailValid && emailTouched) || (!emailValid && formSubmitted),
            valid: emailValid && emailTouched
          }" type="email" id="email" name="email" placeholder="Bitte geben Sie ihre Emailadresse ein" autocomplete="off"
            required @blur="emailTouched = true" />
          <span v-if="!emailValid && emailTouched">Email Adresse wird benötigt</span>
        </div>
        <div>
          <textarea v-model="contactData.message" :class="{
            invalid: (!messageValid && messageTouched) || (!messageValid && formSubmitted),
            valid: messageValid && messageTouched
          }" id="message" name="message" cols="30" rows="10" placeholder="Nachricht hinterlassen..." required
            @blur="messageTouched = true"></textarea>
          <span v-if="!messageValid && messageTouched">Sie können keine leere Nachricht versenden</span>
        </div>
        <div class="checkbox">
          <input v-model="checkbox" type="checkbox" name="checkbox" required />
          <span>
            Ich habe die <NuxtLink to="/privacypolicy" activeClass="link-active">Datenschutzerklärung</NuxtLink> gelesen und stimme der Verarbeitung meiner
            Daten zu.
          </span>
        </div>
        <div class="btn-wrapper">
          <input :disabled="!formValid" :class="{ disabled: !formValid }" class="submit-btn submit-change" type="submit"
            value="Send Message !" />
        </div>
      </form>
  
    </div>
  
    <div v-if="isSending" class="modal-loading">
      <div id="spinner"></div>
      <p v-if="sendingComplete" class="animate-msg">Email wurde gesendet !</p>
      <p v-if="sendingFailed" class="animate-msg">Senden ist fehlgeschlagen !</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import emailjs from '@emailjs/browser';
  
  
  const contactData = ref({
    name: '',
    email: '',
    message: ''
  });
  const checkbox = ref(false);
  const nameTouched = ref(false);
  const emailTouched = ref(false);
  const messageTouched = ref(false);
  const formSubmitted = ref(false);
  const isSending = ref(false);
  const sendingComplete = ref(false);
  const sendingFailed = ref(false);
  
  
  const nameValid = computed(() => contactData.value.name.trim() !== '');
  const emailValid = computed(() => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(contactData.value.email);
  });
  const messageValid = computed(() => contactData.value.message.trim() !== '');
  const formValid = computed(() => nameValid.value && emailValid.value && messageValid.value && checkbox.value);
  
  const onSubmit = async () => {
    if (formValid.value) {
      const formData = {
        to_name: "Cathrin",
        name: contactData.value.name,
        email: contactData.value.email,
        message: contactData.value.message
      };
      isSending.value = true;
      try {
        const response = await emailjs.send('service_76x537o', 'template_ynfjset', formData, 'PkIjDvptbNUNsZb5y');
        if (response.status === 200) {
          sendingComplete.value = true
          setTimeout(() => {
            isSending.value = false;
            sendingComplete.value = false;
          }, 2000);
        }
  
        resetForm();
      } catch (error) {
        sendingFailed.value = true;
        setTimeout(() => {
          isSending.value = false;
          sendingFailed.value = false;
        }, 2000);
        console.error('Error:', error);
      }
    }
  };
  
  
  const resetForm = () => {
    contactData.value = { name: "", email: "", message: "" };
    checkbox.value = false;
    nameTouched.value = false;
    emailTouched.value = false;
    messageTouched.value = false;
  };
  
  </script>
  
  <style scoped lang="scss">
  .form-container {
    margin: 1rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  
    >div {
      display: flex;
      flex-direction: column;
  
      input,
      textarea {
        background-color: transparent;
        border: 0.125rem solid var(--secondary-brand-color);
        border-radius: 10px;
        padding: 15px 25px;
        color: var(--text-color);
        cursor: pointer;
        font-size: 16px;
  
        &:hover {
          border-color: var(--border-hover);
        }
  
        &:focus {
          outline: none;
          color: var(--text-color);
          caret-color: var(--text-color);
          border-color: var(--border-active);
        }
  
      }
  
      span {
        font-size: 14px;
        color: #E61C40;
      }
    }
  
    .checkbox {
      flex-direction: row;
      align-items: center;
      gap: 8px;
  
      input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        padding: 0;
        border: none;
        border-radius: 0;
        background-image: url(/assets/images/checkbox.png);
        background-size: contain;
        background-repeat: no-repeat;
  
        &:checked {
          background-image: url(/assets/images/checkbox_checked.png);
        }
  
      }
  
  
      span {
        color: var(--text-color);
  
        a {
          color: red;
  
          &:hover {
            text-decoration: underline;
          }
        }
      }
  
  
      .invalid {
        border: 1px solid red;
      }
  
      .valid {
        border: 1px solid green;
      }
  
  
    }
  }
  
  .btn-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  
    .submit-btn {
      cursor: pointer;
      border-radius: 16px;
      width: fit-content;
      background-size: 200% auto;
      color: rgba(var(--text-color));
      transition: 0.5s;
  
      &:hover {
        border-color: var(--secondary-brand-color);
        background-position: right center;
      }
  
      &:active {
        background-image: linear-gradient(to right, rgb(95 90 73), rgb(82 77 65));
      }
    }
  
    .submit-change {
      background-image: linear-gradient(to right, rgb(137 135 105), rgb(117 113 89));
    }
  }
  
  .disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
  
  .modal-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
  
    p {
      margin-top: 120px;
      font-size: 1.75em;
    }
  
    #spinner {
      position: absolute;
      --c: no-repeat linear-gradient(orange 0 0);
      background:
        var(--c), var(--c), var(--c),
        var(--c), var(--c), var(--c),
        var(--c), var(--c), var(--c);
      background-size: 16px 16px;
      animation:
        l32-1 1s infinite,
        l32-2 1s infinite;
    }
  
    @keyframes l32-1 {
  
      0%,
      100% {
        width: 45px;
        height: 45px
      }
  
      35%,
      65% {
        width: 65px;
        height: 65px
      }
    }
  
    @keyframes l32-2 {
  
      0%,
      40% {
        background-position: 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50%
      }
  
      60%,
      100% {
        background-position: 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50%
      }
  
    }
  }
  
  .d-none {
    display: none;
  }
  </style>
  