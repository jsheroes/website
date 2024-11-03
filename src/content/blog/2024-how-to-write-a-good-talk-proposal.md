---
author: "jeremias-menichelli"
author_category: "ambassadors"
title: How to write a good talk proposal
published: Nov 4, 2022
summary: Advices on sending a proposal from the JSHeroes ambassadors
tags: ["cfp"]
---

Hi there, I am Jeremias, ambassador of JSHeroes and part of a group of people who every year go through hundreds of talk proposals to choose the ones that will end up in the conference’s agenda.

Selecting only a few talks from a large number of proposals (more than 300 in each edition for several years in a row) is a difficult task. It also means we have reviewed more than one thousand proposals in the last three years.

In this article, I will give you some advice to follow and ensure your proposal covers the basics of what us reviewers expect, increasing your chances of being picked.

## The topic 

The first important decision you will make is to pick a topic. There’s not a lot of advice to give around this step, but I suggest choosing something you are genuinely interested in or you’ve experienced yourself.

When, as a speaker, you cover a theme you don’t care deeply about or isn’t something you went through, it feels impersonal and misses the energy of communicating you care about.

So, my initial recommendation is to *pick something you experienced in your job, a side project, or your personal life—a technology or topic you find interesting or that is important to you*.

## Proposal structure

Submitting a proposal might vary depending on the conference submission form, but in general, you will be asked to provide a talk title, an abstract, and an outline.

### The title

This is something you shouldn’t overthink. Just make sure it’s a clear summary of the content and not too confusing — there’s no need to be super original here.

Avoid falling into clickbaity or clichés to sound original. A funny title won’t make a committee choose your talk if the **abstract** and **outline** don’t hit the mark.

*Quick tip: Look at past conference edition titles to get some inspiration if you need to.*

### The Abstract

The abstract is a short paragraph describing the talk. You will see them along with the talk title in the conference schedules.

It has two goals: first, to provide an overall concept of what the talk will cover, and second, to leave a good cliffhanger so people are interested in attending it.

There isn’t only one correct abstract format, but if you don’t have much experience writing one I’d suggest using a two-paragraph structure.

In the first one, *introduce the problem*, set the stage and context for discussing your topic. In the second, *present the potential solution* and invite people to explore it with you.

### The outline

This section details how your talk will progress from the problem to the solution around your topic, and conclusion.

*The outline will probably have the biggest impact on your talk being selected*. You need to guide the person reading it through a step-by-step summary of your presentation. A good format for it would be a bullet point list of sections of your talk, and what you will cover in each of them.

In addition, provide a short paragraph explaining why you want to talk about this topic and its importance, and what’s your experience with it.

## Examples

Let’s pick an example, for example, the recently introduced [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

As this is a new technology we can emphasize this in the **title**:

*Title: All you need to know about the new View Transitions API*

For the **abstract**, we will follow the two paragraph structure. In the first one we are going to highlight how difficult it was to achieve these transitions before this new spec.

On the second one we will highlight how this new technology solves those issues, inviting people to join us.

*Abstract: Before View Transitions API, achieving good transitions in between pages required intercepting browser navigation or all sorts of hacks messing up with the routing related code of your application. It was necessary to heavily rely on JavaScript and third party packages.*

*With this new technology built in browsers you can now easily get cross-document transitions using CSS, leaving your codebase cleaner. In this talk we will explore how this new API works, and how it doesn’t only work for page navigation but for any document element transition.*

In the **outline** we could begin by creating some sections to talk about the problem and what it takes to achieve transitions, and later walk through how the solution looks like:

*Outline:*  
*This API might be new for most attendees, so I will break it down in parts as it involves all HTML, CSS and JavaScript elements. I will go incrementally from common easy cases to SPA and per-element transitions.*

* *Introduction, short mention about me and my projects*

* *Building view transitions in the past, here I will explore certain third party libraries and the hacks they need under the hood to achieve them. I will also show examples on how you need to heavily re-adapt your code just because of them.*

* *The solution, the new View Transitions API, I will go over the basic parts of it:*

  * *CSS properties introduced and at-rules*

  * *New pseudo-elements and how they are created*

* *Quick example of a static site, how this plus CSS animations already gives us animated transitions on navigation. Simple use case.*

* *What about SPA? This case will let us explain the JavaScript side of this API.*

* *But there’s more\! What about entering and leaving elements, this API also helps us with more dynamic components like deletable items and menus.*

* *Browser support, to wrap up we will detail the availability of it.*

* *Closing notes, here I will just mention how to provide feedback and important links.*

*This API can be used right now, even when not supported, developers can follow a progressive enhancement approach and improve their code as today.*

That’s how an example of all these recommendations could look like on a topic. The length and format of your abstract might vary depending on the one you choose.

**Important note: You don’t have a talk ready when submitting a proposal**. Building a talk is *a lot of work* so it makes sense you start working on it after you’ve been selected, unless it’s a talk you’ve already given in another event. 

## Common mistakes

There’s not a one proposal formula to win all, but if you haven’t written many of them, this article might serve as a good initial framework.

There are though many easy and commonly encountered examples on why a proposal doesn’t get chosen, read through them to avoid these:

* **Not following the event’s theme**. Normally conferences detail in their websites which topics they are interested in. To increase your chances, go through the conference’s page. Apply to events where the content you want to deliver is potentially a good match.

* **A really short outline without detailing the talk**, as reviewers we don’t know what content might be delivered or if the topic is worth a whole talk.

* **A too long outline**, if we see you need way too many steps to actually explain the topic you chose it might be too ambitious and not fit into the time slot. Make sure your outline is well balanced in how much it tries to cover.

* **Your topic is highly tied to a commercial product**, talks that sound a lot like a sales pitch of a product might be disregarded. Double check the tone of your proposal, a product can be part of your talk, but ensure you are bringing new concepts for attendees to explore.

## The selection process

It’s important to mention, writing a well structured abstract doesn’t guarantee you will get selected, but it increases your chances.

Even when you write a good proposal your talk might be dismissed for other reasons:

* Your talk is too similar to one from an invited speaker. I call this *content clashing*, it makes no sense to have two talks of the same topic in one event.

* There was another talk on that same topic which seemed to potentially match the tone of the event better.

* The topic is not a priority for the event on this edition.

* Your proposal was good, but there were other good ones as well. Conferences receive tons, therefore you are competing with a lot of people for just a few available slots.

## My talk wasn’t picked, what to do?

If this happens to you, my first advice would be to **ask for feedback from the organizers**. They can give you a better insight on why it wasn’t selected. You can take their response, and tweak your proposal and try with other events.

*Quick tip: If a proposal gets a lot of rejections try to come up with a new topic.*

**You really like the topic and want to go for it anyway?** That’s more than OK. Search for local meetups around your area. It’s also a great wait to practice your speaking skills\!

## Wrap-up

If you are in a rush, this is the too long didn’t read version of this article:

* *Pick a topic you hold personally close, excites you and that you experienced.*

* *Take inspiration from other conferences’ agenda to see different title formats if you can’t think of one.*

* *Write a two-paragraph abstract, in the first one highlight the problem, in the second one explain your proposed solution.*

* *Write an outline, with an introduction sentence on how you are going to execute your talk, a list of steps and what they will contain, and a last paragraph on the value of covering your topic of choice.*

* *Make sure not to fall on common mistakes, like too short or way too long outlines.*

I hope this article will increase your chances of your talk being picked, here at a JSHeroes call-for-proposals or at any conference out there.