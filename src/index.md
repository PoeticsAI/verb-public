---
layout: 'layouts/home.html'
title: 'Verb'
meta:
  desc: 'Verb is an AI-powered writing tool built specifically to help novelists plan, write and get feedback on their work.'
---

<div class="opacity-0 transition-all" :class="{ 'opacity-100' : showMenu }" @scroll.window="showMenu = (window.pageYOffset > 350) ? true : false">
    {% include "partials/site-header.html" %}
</div>
<div class="fixed bottom-4 left-1/2 -ml-5 z-50 animate-bounce transition-opacity ease-in-out delay-150" 
       :class="{ 'opacity-0' : showBar }"
       @scroll.window="showBar = (window.pageYOffset > 50) ? true : false">
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="13" fill="#FFC93E" />
        <path d="M8 11L13 16L18 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</div>

<div class="bg-white overflow-x-hidden pb-8 ">
  <div class="pt-0 sm:pt-12 lg:relative lg:py-48">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
            <div class="md:mt-20 mt-0">
                <div class="md:mb-8 mb-12">
                     <a href="{{ '/' | url }}" class="relative">
                        <svg width="89" height="38" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#000" fill-rule="nonzero"><path d="m11.687 38 6.815-20.3h-5.046L9.251 32.026 5.046 17.7H0L6.815 38zM32.794 38v-3.77H25.08v-4.466h7.714v-3.683H25.08v-4.61h7.714V17.7H20.382V38zM52.417 25.037c0-4.263-3.044-7.337-7.279-7.337h-8.642V38h4.698v-5.626h2.465L46.85 38h5.337l-3.568-6.438c2.32-1.16 3.8-3.567 3.8-6.525Zm-8.004-3.509c1.886 0 3.248 1.48 3.248 3.51s-1.363 3.508-3.248 3.508h-3.218v-7.018h3.218ZM66.349 27.618c2.349-.435 3.886-2 3.886-4.64 0-3.277-2.494-5.278-6.525-5.278h-8.352V38h8.67c4.032 0 6.497-2.146 6.497-5.626 0-2.813-1.827-4.524-4.176-4.756Zm-3.683-6.525c1.827 0 2.87.928 2.87 2.465s-1.072 2.465-2.87 2.465h-2.61v-4.93h2.61Zm-2.61 13.34v-5.162h2.929c1.682 0 2.813.986 2.813 2.494 0 1.682-1.073 2.668-2.813 2.668h-2.93Z"/></g><path d="m75.934 17.077-1.442 3.803a.586.586 0 0 1-.22.276.613.613 0 0 1-.687 0 .585.585 0 0 1-.22-.276l-1.442-3.803a.588.588 0 0 0-.36-.35l-3.914-1.402a.599.599 0 0 1-.285-.214.573.573 0 0 1 0-.667.6.6 0 0 1 .285-.214l3.913-1.402a.61.61 0 0 0 .36-.35l1.443-3.803a.586.586 0 0 1 .22-.277.613.613 0 0 1 .687 0c.1.069.177.165.22.277l1.442 3.803a.59.59 0 0 0 .36.35l3.914 1.402a.6.6 0 0 1 .285.214.573.573 0 0 1 0 .667.6.6 0 0 1-.285.214l-3.913 1.401a.613.613 0 0 0-.36.35Z" fill="#72FFA2" fill-rule="nonzero"/><path stroke="#72FFA2" stroke-linecap="round" stroke-linejoin="round" d="M79.173 4.134v4.034M85.178 8.294v4.034M86.012 1v4.034M81.248 6.151h-4.151M87.253 10.31h-4.151M88.087 3.017h-4.151"/></g></svg>
                        <div class="w-[176px] h-[107px] bg-blurYellow absolute -top-4 -left-0 blur-3xl opacity-20"></div>
                    </a>
                </div>
                <div class="mt-6 sm:max-w-xl">
                    <h1 class="text-gray-900 md:max-w-none max-w-[280px]">
                        A novel way to write <span class="underline decoration-greenNeon decoration-[6px] underline-offset-[4px]">your story</span>
                    </h1>
                    <p class="md:mt-6 mt-4 md:w-2/3">
                        Verb uses cutting edge technology to shortcut the novel-writing process. Use it to get your vision into words – with more speed, less pain.
                    </p>
                    <div class="md:mt-12 mt-8">
                      <a href="{{ '/form/' | url }}" class="btn btn-big ">Join our free beta</a> <a href="{{ '/about/' | url }}" class="btn btn-big btn-outline">Our thinking</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <img
                    class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none z-10 relative"
                    src="/media/bad-screenshot.jpg"
                    alt=""
                />
                <!-- <video autoplay loop class="rounded-md w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none z-10 relative" >
                        <source autoplay loop src="/media/describe-long-huge.mp4" type="video/mp4">
                    </video> -->
                <div class="w-[325px] h-[288px] bg-blurGreen absolute -top-8 -left-10 blur-3xl opacity-20"></div>
                <div class="w-[325px] h-[288px] bg-blurPurple absolute -top-8 -right-20 blur-3xl opacity-20"></div>
                <div class="w-[419px] h-[366px] bg-blurBlue absolute -bottom-0 right-8 blur-3xl opacity-20"></div>
                <div class="w-[325px] h-[288px] bg-blurYellow absolute -bottom-10 -left-20 blur-3xl opacity-20"></div>
            </div>
        </div>
    </div>
  </div>
</div>

<section class="container px-6 mx-auto md:mb-32 md:mt-0 my-16 relative">
    <h2 class="font-extralight mb-10 md:text-[63px] md:leading-[60px] text-[34px]">Creatives in every field have software collaborators that contribute meaningfully to their work. Writers are stuck with Word or worse.  <span class="underline decoration-greenNeon decoration-5 underline-offset-[4px]">Verb is here to help.</span>
    </h2>
    <a href="{{ '/about/' | url }}" class="btn btn-big btn-outline">Our thinking</a>
</section>
<section class="container px-6 mx-auto md:my-32 my-16 relative">
    <div class="">
        <div class="md:flex bg-white z-10 relative md:p-16 p-6 rounded-md shadow-md justify-between items-center">
            <div class="md:w-5/12 w-full mb-6 md:mb-0">
                <h4 class="text-pink uppercase ">Novel Planner</h4>
                <h2 class="mb-6">The terror of the blank page is real</h2>
                <p class="md:w-2/3 w-full mb-6">Struggling on that first page? Use Verb’s Novel Planner to scaffold out a plot in ten minutes flat.
                </p>
                <ul class="md:w-2/3 w-full ml-6 list-outside marker:text-pink text-lg marker:text-2xl">
                    <li>Use our custom AI to get automatic plot point suggestions</li>
                    <li>Lay out chapters and scenes in a drag drop interface.</li>
                </ul>
            </div>
            <div class="md:w-7/12 w-full ">
                <div class="bg-white z-20 relative  rounded-md ">
                    <video autoplay muted loop class="rounded-md md:absolute md:left-[15px] md:max-w-[110%]  max-w-100% md:-translate-y-1/2 shadow-home " >
                        <source autoplay muted loop src="/media/plan-fast.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div class="md:w-[795px] h-[388px] w-[250px] bg-blurRed absolute -top-8 -left-10 blur-3xl opacity-20"></div>
        <!-- <div class="w-[325px] h-[288px] bg-blurPurple absolute -top-8 -right-20 blur-3xl opacity-20"></div> -->
        <div class="md:w-[719px] w-[250px] h-[366px] bg-blurBlue absolute -bottom-16 right-10 blur-3xl opacity-20"></div>
        <!-- <div class="w-[325px] h-[288px] bg-blurYellow absolute -bottom-20 -left-20 blur-3xl opacity-20"></div>-->
  </div>
</section>

<section class="container px-6 mx-auto md:my-32 my-16 relative">
    <div class="">
        <div class="md:flex bg-white z-10 relative md:p-16 p-6  rounded-md shadow-md justify-between items-center">
            <div class="md:w-5/12 w-full md:mb-0 mb-6">
                <h4 class="text-orange uppercase ">unblock writer's block</h4>
                <h2 class="mb-6">Can’t quite find the right phrase?</h2>
                <p class="md:w-2/3 w-full mb-6">Tell Verb what you want from a paragraph -- and it'll write one for you. In seconds. In the voice you choose.</p>
                <ul class="md:w-2/3 w-11/12 ml-6 list-outside marker:text-orange text-lg marker:text-2xl">
                    <li>Ditch that constipated feeling – ask Verb to write anything, description, character sketches, even dialogue</li>
                    <!-- <li>Edit, adapt or start over all together the text is up to you. The text is 100% new and yours to craft.</li> -->
                </ul>
            </div>
            <div class="md:w-5/12 w-full ">
                <div class="bg-white z-20 relative">
                    <video autoplay muted loop class="rounded-md  shadow-home" >
                        <source autoplay muted loop src="/media/describe-hemingway.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div class="md:w-[795px] h-[288px] w-[250px] bg-blurYellow absolute -top-8 -left-10 blur-3xl opacity-20"></div>
        <!-- <div class="w-[325px] h-[288px] bg-blurPurple absolute -top-8 -right-20 blur-3xl opacity-20"></div> -->
        <div class="md:w-[719px] w-[250px] h-[366px] bg-blurPurple absolute -bottom-16 right-10 blur-3xl opacity-20"></div>
        <!-- <div class="w-[325px] h-[288px] bg-blurYellow absolute -bottom-20 -left-20 blur-3xl opacity-20"></div>-->
  </div>
</section>

<section class="container px-6 mx-auto md:my-32 my-16 relative">
    <div class="">
        <div class="md:flex bg-white z-10 relative md:p-16 p-8 rounded-md shadow-md justify-between items-center">
            <div class="md:w-5/12 w-full md:mb-0 mb-6">
                <h4 class="text-teal uppercase ">Meaningful, real-time feedback</h4>
                <h2 class="mb-6">Is your writing connecting? Is your work working?</h2>
                <p class="md:w-2/3 w-full mb-6">Verb has publishing-industry feedback built-in. It will score your novel from 1-100 based on how likely it is to be published.</p>
                <ul class="md:w-2/3 w-full ml-6 list-outside marker:text-teal text-lg marker:text-2xl">
                    <li>Scored across a variety of metrics</li>
                    <li>Track your progress as you write and edit, never backslide again</li>
                </ul>
            </div>
            <div class="md:w-5/12 w-full ">
                <div class="bg-white z-20 relative  ">
                    <img src="/media/critic-cropped.jpg" alt="" class="rounded-md shadow-home md:absolute md:-translate-y-1/2" />
                </div>
            </div>
        </div>
        <div class="md:w-[795px] h-[288px] w-[250px] bg-blurBlue absolute -top-8 -left-10 blur-3xl opacity-20"></div>
        <!-- <div class="w-[325px] h-[288px] bg-blurPurple absolute -top-8 -right-20 blur-3xl opacity-20"></div> -->
        <div class="md:w-[719px] w-[250px] h-[366px] bg-blurGreen absolute -bottom-16 right-10 blur-3xl opacity-20"></div>
        <!-- <div class="w-[325px] h-[288px] bg-blurYellow absolute -bottom-20 -left-20 blur-3xl opacity-20"></div>-->
  </div>
</section>

<section class="container px-6 mx-auto md:my-32 my-16 relative">
    <div class="md:flex justify-between">
        <div class="md:w-5/12">
            <h4 class="text-reddish uppercase">Admin does not equal writing</h4>
            <h3 class="mb-6 leading-none">Characters are the lifeblood of your writing. Keeping track of them is crucial but a headache.</h3>
            <p class="md:w-10/12 w-full text-[20px] mb-8">Get a holistic picture of how each of your characters is used with no extra work – Verb automatically extracts and tracks characters as your write so you don't have to. </p>
            <img src="/media/character.png" alt="" class="rounded-[20px] shadow-defined mb-16" />
        </div>
        <div class="md:w-5/12">
            <h4 class="text-reddish uppercase">Research as art</h4>
            <h3 class="mb-6 leading-none">Behind every novel is weeks of research. But it’s hard to organise and harder to remember.</h3>
            <p class="md:w-10/12 w-full text-[20px] mb-8">Upload your research docs, urls and notes direct to Verb. You can even backlink from your writing to your research. And it all helps our AI language generation work better.</p>
            <img src="/media/research.png" alt="" class="rounded-[20px] shadow-defined" />
        </div>
    </div>
</section>

<section class="container px-6 mx-auto md:my-32 my-16 relative">
    <h2 class="font-extralight mb-10">
        There’s even more. Verb is a writing app first of all. So expect a <span class="underline decoration-greenNeon decoration-5 underline-offset-[4px]">beautiful writing experience,</span> paired with nutso technology
    </h2>
    <div class="md:flex gap-4 md:w-3/5 text-xl">
        <ul class="list-disc  marker:text-2xl marker:text-reddish ml-6 md:w-3/5">
            <li>Built from the ground up for long document editing and performance</li>
            <li>Easy, always on navigation</li>
            <li>Beautiful typography</li>
            <li>Focus mode</li>
            <li>Typewriter mode</li>
        </ul>
        <ul class="list-disc marker:text-2xl marker:text-reddish ml-6 md:w-3/5">
            <li>Just the right amount of formatting options</li>
            <li>Markdown support</li>
            <li>Export to word, html and markdown</li>
            <li>Easy scene and chapter segmenting</li>
            <li>Offline capable and auto saving every 2 seconds</li>
        </ul>
    </div>
</section>
