---
layout: 'layouts/plain.html'
title: 'Verb'
meta:
  desc:
    '11st-Starter-Kit is a minimal starting point for building static websites
    with 11ty, powered by Vite with Tailwind CSS and Alpine.js.'
---

<div>
  <h1 class="italic">
    Write your book.<br/>
    With a little help.
  </h1>
  
<div  x-bind:class="! modal ? 'hidden' : ''" 
      x-on:click="modal = false"
      class="z-0 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm" ></div>
<div  x-bind:class="! modal ? 'hidden' : ''"
      class="z-20 fixed p-12 bg-white top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2  rounded-lg shadow-lg">
    <form action="https://formsubmit.co/e580d484c1b6fc937da48f7792dc6791" method="POST" >
      <div class="mb-4">
        <h3>Join our beta today.</h3>
        <p>Fill in the form below and we will be in touch.</p>
      </div>
      <div class="input mb-4">
        <input type="text" id="fname" placeholder="Name" class="w-full" />
        <label for="fname">First Name</label>
      </div>
      <div class="input mb-4">
        <input type="text" id="lname" placeholder="Name" class="w-full" />
        <label for="lname">Last Name</label>
      </div>
      <div class="input mb-4">
        <input type="email" id="email" name="Email" placeholder="Email" required="" class="w-full"
        />
        <label for="email">Email</label>
      </div>
      <div class="input mb-4">
        <textarea
          id="message"
          name="Message"
          placeholder="Message"
          required=""
          class="w-full"
        ></textarea>
        <label for="message">Why are you signing up?</label>
      </div>
      <button type="submit" class="btn btn-long">Send</button>
      <input
        type="hidden"
        name="_autoresponse"
        value="Got it, thanks will be in touch."
      />
      <input
        type="hidden"
        name="_next"
        value="https://elated-cori-24a9ee.netlify.app/thanks/"
      />
    </form>
  </div>
</div>
