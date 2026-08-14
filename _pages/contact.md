---
layout: page
permalink: /contact/
title: contact
description: For research discussions, collaborations, and software enquiries.
nav: true
nav_order: 4
---

<div class="contact-intro">
  <div class="eyebrow">GET IN TOUCH</div>
  <p>Please use the form below for research discussions, collaborations, or questions about software and data resources.</p>
</div>

<form class="contact-form" action="https://formsubmit.co/wanglei@ccnu.edu.cn" method="POST">
  <input type="hidden" name="_subject" value="New message from Lei Wang's website">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_captcha" value="true">

  <p class="form-honeypot" aria-hidden="true">
    <label>Leave this field empty <input type="text" name="_honey" tabindex="-1" autocomplete="off"></label>
  </p>

  <div class="form-row">
    <label for="contact-name">Name</label>
    <input id="contact-name" name="name" type="text" autocomplete="name" required>
  </div>

  <div class="form-row">
    <label for="contact-email">Email</label>
    <input id="contact-email" name="email" type="email" autocomplete="email" required>
  </div>

  <div class="form-row">
    <label for="contact-subject">Subject</label>
    <input id="contact-subject" name="subject" type="text" required>
  </div>

  <div class="form-row">
    <label for="contact-message">Message</label>
    <textarea id="contact-message" name="message" rows="7" required></textarea>
  </div>

  <button class="button button-primary" type="submit">Send message</button>
</form>

<p class="contact-note">The form uses spam protection and sends messages directly to Lei Wang’s academic mailbox.</p>
