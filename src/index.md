---
layout: 'layouts/plain.html'
title: 'Verb'
meta:
  desc: 'Verb is an AI-powered writing tool built specifically to help novelists plan, write and get feedback on their work.'
---

<div class="container">
  <section class="md:flex justify-center ">
    <div class="md:flex md:order-2 pb-8 md:pb-0 w-full md:w-half">
      <div class="relative">
        <video class="rounded-[20px] relative z-10 shadow-yellow-50 shadow-lg " autoplay loop >
            <source src="/media/describe.webm"
                    type="video/webm">
            <source src="/media/describe.mp4"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="w-[325px] h-[288px] bg-blurGreen absolute -top-8 -left-10 blur-3xl opacity-20"></div>
        <div class="w-[325px] h-[288px] bg-blurPurple absolute -top-8 -right-20 blur-3xl opacity-20"></div>
        <div class="w-[419px] h-[366px] bg-blurBlue absolute -bottom-10 right-8 blur-3xl opacity-20"></div> 
        <div class="w-[325px] h-[288px] bg-blurYellow absolute -bottom-20 -left-20 blur-3xl opacity-20"></div>
      </div>
    </div>
    <div class="md:flex md:order-1 w-full md:items-center md:justify-center md:w-half md:mr-20 lg:mr-0">
      <div class="lg:max-w-lg">
        <h1 class="mb-5">Write <span class="underline decoration-greenNeon decoration-5 underline-offset-[4px]">the book</span> you always knew you could</h1>
        <p class="mb-12 max-w-sm">Verb is an AI-powered writing tool built specifically to help novelists plan, write and get feedback on their work.</p>
        <a x-on:click="modal = ! modal" class="btn btn-big">Start Writing</a>
      </div>
    </div>

  </section>
</div>

<div  x-bind:class="! modal ? 'hidden' : ''" 
      x-on:click="modal = false"
      class="z-0 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm" ></div>
<div  x-bind:class="! modal ? 'hidden' : ''"
      class="z-20 fixed md:p-12 p-4 w-[88%] bg-white top-1/2 -translate-x-1/2 ml-[-1%] left-1/2 md:left-[1/2] -translate-y-1/2  rounded-lg shadow-lg">
    <form action="https://formsubmit.co/e580d484c1b6fc937da48f7792dc6791" method="POST" >
      <div class="mb-4">
        <h3>Join our beta today.</h3>
        <p>Fill in the form below and we will be in touch.</p>
      </div>
      <div class="flex gap-4 mb-4">
        <div class="input">
          <input type="text" id="fname" placeholder="Name" class="w-full" />
          <label for="fname">First Name</label>
        </div>
        <div class="input">
          <input type="text" id="lname" placeholder="Name" class="w-full" />
          <label for="lname">Last Name</label>
        </div>
      </div>
      <div class="input mb-4">
        <input type="email" id="email" name="Email" placeholder="Email" required="" class="w-full"
        />
        <label for="email">Email</label>
      </div>
      <div class="input mb-4">
        <textarea
          id="unique"
          name="Unique"
          placeholder="Unique"
          required=""
          class="w-full"
        ></textarea>
        <label for="unique">What makes Verb unique?</label>
      </div>
      <div class="input mb-4">
        <textarea
          id="use"
          name="Use"
          placeholder="Use"
          required=""
          class="w-full"
        ></textarea>
        <label for="use">Name the top 3 reasons someone would use Verb</label>
      </div>
      <div class="input mb-4">
        <textarea
          id="doubt"
          name="Doubt"
          placeholder="Doubt"
          required=""
          class="w-full"
        ></textarea>
        <label for="doubt">Name the top 3 doubts a user might have</label>
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
