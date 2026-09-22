---
publishDate: 2026-09-22T00:00:00Z
author: Nas
title: "How to Start Using JEV - TypeSafe's New Model: A Step-by-Step Tutorial"
excerpt: A complete walkthrough of getting started with Jev - signing up, running your first questions in the Playground, copying the skill prompt, getting your API keys, and handing the whole thing to your AI agent to build something real.
image: ~/assets/images/How_to_use_JEV.png
category: Technology
tags:
  - AI
  - automation
  - tutorials
metadata:
  canonical: https://www.sellingwithnas.com/how-to-start-using-jev-step-by-step
  title: "How to Start Using JEV (TypeSafe AI): Step-by-Step Tutorial for Beginners 2026"
  description: "A step-by-step JEV tutorial: sign up for TypeSafe AI, run your first questions in the Playground using the State section, copy the Quickstart skill prompt, get your API keys, and install the skill in Claude Code to build your first Jev demo."
  keywords: "JEV tutorial, how to start using JEV, TypeSafe AI tutorial, JEV playground, TypeSafe playground, JEV API key, TypeSafe skill prompt, JEV Claude Code, System One model tutorial, noul choice score, TypeSafe agent skill, Jev step by step"
---


# How to Start Using JEV: A Step-by-Step Tutorial

I wrote about [what Jev is and why it matters](/how-to-use-jev-typesafe-ai) last week - the 70-500ms responses, the $0.042 per million input tokens, the free output. The response I got back, more than anything else, was some version of: *fine, but how do I actually start?*

Fair. So this is the hands-on version. No theory, no benchmarks. By the end of this post you'll have run your first Jev questions in the browser, have an API key, and have a working demo running on your own machine that your AI agent built for you.

It takes about twenty minutes, and you don't need to write a single line of code yourself.

Here's the path:

1. [Step 1: Sign Up and Get Into the Console](#step-1-sign-up-and-get-into-the-console)
2. [Step 2: Run Your First Questions in the Playground](#step-2-run-your-first-questions-in-the-playground)
3. [Step 3: Copy the Skill Prompt from Quickstart](#step-3-copy-the-skill-prompt-from-quickstart)
4. [Step 4: Get Your API Keys](#step-4-get-your-api-keys)
5. [Step 5: Give the Skill to Your AI Agent](#step-5-give-the-skill-to-your-ai-agent)
6. [Step 6: Build Your First Real Thing](#step-6-build-your-first-real-thing)
7. [What to Do Once It Works](#what-to-do-once-it-works)
8. [Frequently Asked Questions](#frequently-asked-questions)

A quick note before we start: every prompt in this post has a **Copy** button next to it. Use them. Half the friction in tutorials like this is retyping things and getting a comma wrong.


## Step 1: Sign Up and Get Into the Console

Go to <a href="https://typesafe.ai" target="_blank" rel="noopener noreferrer">typesafe.ai</a> and hit **Sign in** in the top right. That takes you to <a href="https://console.typesafe.ai" target="_blank" rel="noopener noreferrer">console.typesafe.ai</a>, which is where everything actually lives - the Playground, your keys, your usage.

Sign up with an email or a Google account. Jev is still in early access, so depending on when you read this you may land on a waitlist rather than straight into the console. If you do, it's worth signing up anyway and coming back to this post when you're through.

Once you're in, you'll land on the console homepage. Two things matter on it:

- **Playground** - in the navigation. This is where you test questions in the browser with no code at all.
- **Quickstart** - a panel on the right-hand side of the homepage. This is where the skill prompt lives, and we'll come back to it in Step 3.

Start with the Playground. Getting a feel for how Jev answers is far more useful than reading another explanation of what a System One model is.


## Step 2: Run Your First Questions in the Playground

Open <a href="https://console.typesafe.ai/playground" target="_blank" rel="noopener noreferrer">console.typesafe.ai/playground</a>.

The Playground has two halves, and understanding the split is the whole game:

- **State** - the raw, unstructured thing you want judged. A customer email, a support ticket, a product description, a chunk of JSON from your app. Anything.
- **Questions** - what you want to know about that state, written as typed questions in JSON.

You put the scenario in **State**, the questions in **Questions**, and hit run. That's it.

### First, put a scenario in the State section

This is the bit people get wrong on their first try - they paste the questions and leave State empty, then wonder why nothing useful comes back. **The State section is where your customer message goes.** The questions are just the lens you look at it through.

![The State section in the TypeSafe Playground - this is where your customer message or scenario goes](~/assets/images/JEV_playground_State.png)

That's the box circled above. Everything you want judged goes in there; everything you want to know about it goes in Questions below.

Here's a message to paste into **State** to follow along:

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Paste into State</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.88rem;line-height:1.65;overflow-x:auto;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">I've been charged twice for the same order and nobody has replied to my last two emails. This is the third time this has happened this year. I want my money back and I want it today, or I'm cancelling my account and telling everyone I know not to bother with you.</pre>
</div>

Now the questions. Jev gives you three types, and honestly that's the entire concept you need to learn. Let's do one of each, against that same message.

### Question type 1: Noul (a yes/no with a probability)

A **noul** answers a true/false question and returns a number between 0 and 1 - how confident it is that the statement is true. Paste this into the **Questions** section:

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Question 1 · Noul</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.86rem;line-height:1.6;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">{
  "refund_request": {
    "type": "noul",
    "instructions": "Is the customer asking for a refund?",
    "criteria": {
      "true": "The customer is asking for their money back.",
      "false": "The customer is not asking for their money back."
    }
  }
}</pre>
</div>

Run it. You'll get back something close to `0.99`. Not the word "yes" - a number you can put straight into an if-statement.

Notice the `criteria` block. You don't strictly need it on a noul, but spelling out what "true" and "false" actually mean is the single cheapest way to make your answers more reliable. Vague question in, vague judgment out.

### Question type 2: Choice (pick one from a list)

A **choice** picks one option from a set you define, and hands back the full probability distribution across all of them. This is your router.

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Question 2 · Choice</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.86rem;line-height:1.6;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">{
  "customer_intent": {
    "type": "choice",
    "instructions": "What is the customer's main reason for contacting support?",
    "criteria": {
      "refund": "The customer wants a refund for a purchase.",
      "technical_issue": "The customer is reporting a technical problem or something that is not working.",
      "billing": "The customer has a question or problem related to a charge, payment, or invoice.",
      "other": "The customer's main reason does not fit the other categories."
    }
  }
}</pre>
</div>

![The Questions section of the TypeSafe Playground with a choice question, and the typed answer with its probability distribution on the right](~/assets/images/JEV_playground_questions.png)

Paste it into the **Questions** panel, hit **Run**, and the answer appears on the right: the chosen category, the probability for every option you defined, and a confidence figure - along with the latency, which is the bit worth watching.

The important property here: Jev **cannot** return a category you didn't define. There is no fifth option for it to invent. That's the no-hallucination guarantee in practice - it's structural, not a promise about behaviour.

Try running this one against a few different messages. A billing complaint that's *also* angry is a genuinely interesting test, because you'll see the probability split between `refund` and `billing` rather than getting a confident single answer. That split is information, not a failure.

### Question type 3: Score (rate it on a rubric)

A **score** rates the state along an ordered scale you write yourself. Each level gets its own description.

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Question 3 · Score</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.86rem;line-height:1.6;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">{
  "customer_frustration": {
    "type": "score",
    "instructions": "How frustrated is the customer based on their message?",
    "criteria": [
      "1 - The customer is calm and shows no meaningful frustration.",
      "2 - The customer shows mild frustration.",
      "3 - The customer is noticeably frustrated.",
      "4 - The customer is very frustrated or angry.",
      "5 - The customer is extremely frustrated, angry, or threatening to leave."
    ]
  }
}</pre>
</div>

Against the message above you should land somewhere near a 5. The returned score isn't a clean integer, by the way - it's probability-weighted across the levels, so a 4.6 means it's sitting between "very frustrated" and "threatening to leave". Which is more honest than forcing it to pick one.

### Now do the thing that actually clicks

Put all three questions in at once. Jev evaluates them together against the same state in a single call, and you get back all three typed answers. Here's the full set:

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">All three questions at once</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.86rem;line-height:1.6;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">{
  "refund_request": {
    "type": "noul",
    "instructions": "Is the customer asking for a refund?",
    "criteria": {
      "true": "The customer is asking for their money back.",
      "false": "The customer is not asking for their money back."
    }
  },
  "customer_intent": {
    "type": "choice",
    "instructions": "What is the customer's main reason for contacting support?",
    "criteria": {
      "refund": "The customer wants a refund for a purchase.",
      "technical_issue": "The customer is reporting a technical problem or something that is not working.",
      "billing": "The customer has a question or problem related to a charge, payment, or invoice.",
      "other": "The customer's main reason does not fit the other categories."
    }
  },
  "customer_frustration": {
    "type": "score",
    "instructions": "How frustrated is the customer based on their message?",
    "criteria": [
      "1 - The customer is calm and shows no meaningful frustration.",
      "2 - The customer shows mild frustration.",
      "3 - The customer is noticeably frustrated.",
      "4 - The customer is very frustrated or angry.",
      "5 - The customer is extremely frustrated, angry, or threatening to leave."
    ]
  }
}</pre>
</div>

Three judgments, one request, back in under half a second. Now swap the State for a polite question about a delivery date and run it again. Then a spam email. Then something from your own inbox.

That's the exercise, and it's worth spending ten minutes on. You're not testing whether Jev is smart - it is. You're building an instinct for what a good `instructions` line looks like and how much your `criteria` wording changes the answer. That instinct is the only skill here, and the Playground is a much faster place to learn it than your codebase.


<div style="
  background: #FDF6F1;
  border: 2px solid #E8CDBD;
  border-radius: 22px;
  padding: 44px 40px;
  margin: 44px 0;
  text-align: center;
  box-shadow: 0 10px 40px rgba(199,91,58,0.12);
">
  <p style="font-size: 0.74rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C75B3A; margin: 0 0 14px;">Something to plug it into</p>
  <h3 style="font-size: 2rem; line-height: 1.15; font-weight: 900; color: #1C1917; margin: 0 0 16px; letter-spacing: -0.03em;">Build your beautiful website today</h3>
  <p style="font-size: 1.05rem; color: #57534E; line-height: 1.7; max-width: 520px; margin: 0 auto 28px;">
    A model this fast only matters once you have something real running. My complete step-by-step pack takes you from a blank screen to a live website on your own domain - plus a private 1-on-1 call with me.
  </p>
  <a href="https://www.sellingwithnas.com/ai-masterclass-with-nas" style="
    display: inline-block;
    padding: 18px 44px;
    border-radius: 14px;
    font-size: 1.1rem;
    font-weight: 800;
    text-decoration: none;
    background: #DA7756;
    color: #ffffff;
    box-shadow: 0 6px 22px rgba(218,119,86,0.35);
    letter-spacing: -0.01em;
  ">
    Build My Website With Claude →
  </a>
  <p style="font-size: 0.8rem; color: #A8A29E; margin: 18px 0 0;">Lifetime access · Beginner friendly · No code needed</p>
</div>


## Step 3: Copy the Skill Prompt from Quickstart

Back to the console homepage.

On the right-hand side there's a **Quickstart** panel. Inside it is a short prompt designed to be copied and pasted straight into your AI coding agent - Claude Code, Cursor, Codex, whichever you use. It tells your agent to install the official TypeSafe skill.

![The Quickstart panel on the right of the TypeSafe console homepage, with the Copy Agent Prompt button](~/assets/images/JEV_quick_start_instructions.png)

Hit **Copy Agent Prompt** at the bottom of that box and it's on your clipboard. There's also an **Agent setup** link in the top right of the panel if you want the longer installation guide, and a **SKILL.md** link underneath if you'd rather read what you're about to install first.

Here it is too, so you don't have to go hunting:

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">The skill prompt</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.86rem;line-height:1.65;overflow-x:auto;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">Install the TypeSafe skill. If you're in Claude Code, run `claude plugin marketplace add typesafe-ai/skills`, then `claude plugin install typesafe@typesafe-ai`. If you're in another agent, run `npx skills add typesafe-ai/skills --skill typesafe-ai` and select your agent. Use one installation method. You can read the skill directly at https://github.com/typesafe-ai/skills/blob/main/skills/typesafe-ai/SKILL.md (raw: https://raw.githubusercontent.com/typesafe-ai/skills/main/skills/typesafe-ai/SKILL.md). Then use the TypeSafe skill when working on this project.</pre>
</div>

**What is this skill, and why does it matter?** A skill is a package of instructions and reference material that teaches your agent how to do something properly. Without it, your agent writes Jev code from whatever it half-remembers about a model that launched a week ago - which is to say, badly. With it, the agent knows the exact request shape, the three question types, the confidence patterns, and where the live docs are. It's the difference between an integration that works and an afternoon of debugging invented API parameters.

If skills are new to you entirely, I've written a [beginner's guide to downloading and using skills](/how-to-download-and-use-a-skill-with-claude) that covers the concept properly.

Don't paste it yet. Get your keys first, then do both in one go.


## Step 4: Get Your API Keys

In the console, go to **API Keys**, or straight to <a href="https://console.typesafe.ai/keys" target="_blank" rel="noopener noreferrer">console.typesafe.ai/keys</a>.

Click **Create key**, give it a name you'll recognise later (`local-dev` is fine), and copy it the moment it appears. Like most API keys, you get exactly one look at it - close the dialog without copying and you'll be generating a new one.

Now set it as an environment variable. On Mac or Linux, in your terminal:

```bash
export TYPESAFE_API_KEY="your-key-here"
```

On Windows PowerShell:

```powershell
$env:TYPESAFE_API_KEY="your-key-here"
```

The Python and JavaScript SDKs both read `TYPESAFE_API_KEY` from the environment automatically, so once it's set you never type the key into a file.

**Three rules, and I mean these.** Never paste an API key directly into your code. Never commit one to GitHub. If you're putting the project in a repo, make sure `.env` is in your `.gitignore` before your first commit, not after. Leaked keys get scraped off public repos within minutes by bots that do nothing else all day.

While you're in the console, have a look at the usage page too. At $0.042 per million input tokens with free output you're unlikely to hurt yourself, but knowing where the number lives is a good habit.


## Step 5: Give the Skill to Your AI Agent

Open your project folder in Claude Code - or Cursor, or whatever you're using. If Claude Code itself is new to you, start with my [full Claude Code tutorial for beginners](/how-to-use-claude-code-for-beginners) and come back.

Paste the skill prompt from Step 3 into the chat and hit enter.

Your agent will run the install commands, pull down the TypeSafe skill, and confirm it's available. In Claude Code you'll see it register as a plugin skill, and you can invoke it explicitly with `/typesafe:typesafe-ai` any time you want to force the issue.

Two things worth doing right after:

**Check the key is visible to the agent.** Ask it: *"Can you confirm TYPESAFE_API_KEY is set in this environment?"* Terminal environment variables don't always follow you into every tool, and finding out now saves a confusing ten minutes later.

**Tell it what you're building in your project file.** If you keep a [CLAUDE.md file](/how-to-write-a-claude_md-file) - and you should - add a line noting that this project uses TypeSafe for structured decisions. It saves re-explaining yourself in every new session.


## Step 6: Build Your First Real Thing

Here's where it stops being a tutorial and starts being useful.

The mistake almost everyone makes at this point is going too big - wiring Jev into their live inbox or real CRM on day one, then losing a weekend to debugging something they never got to see working. So the prompt below does the opposite. It builds a small, contained demo on fake data, on your own machine, that touches nothing real.

Paste this into your agent:

<div style="border-radius:16px;overflow:hidden;border:1px solid #2A2724;background:#1C1917;margin:28px 0;box-shadow:0 8px 30px rgba(0,0,0,0.14);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#292524;border-bottom:1px solid #3A3532;">
    <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Paste into your agent</span>
    <button type="button" onclick="var p=this.parentElement.parentElement.querySelector('pre');navigator.clipboard.writeText(p.innerText);var b=this;b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);" style="flex:none;padding:6px 16px;border-radius:8px;border:1px solid #57534E;background:#DA7756;color:#fff;font-size:0.78rem;font-weight:800;cursor:pointer;letter-spacing:0.01em;">Copy</button>
  </div>
  <pre style="margin:0;padding:18px 16px;background:#1C1917;color:#F5F5F4;font-size:0.86rem;line-height:1.6;overflow-x:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">I want a small, isolated demo of Jev running in this project — nothing
connects to real email or real data yet.&#10;
Build this:&#10;
1. Generate ~25 synthetic sample emails as fake test data (a JSON or
   .txt file), covering a realistic mix: sales inquiries, spam,
   support requests, newsletter replies, and partnership pitches.
   Make up the content — don't pull from anywhere real.&#10;
2. Use Jev to process each email with two calls:
   - a "choice" call that classifies it into one of the categories
     above
   - a "noul" (yes/no) call that answers "is this worth a sales
     follow-up?" with a probability
   Show me the exact Jev request/response shape you're using before
   wiring it into a loop.&#10;
3. Run this as a small local web app on localhost (pick Node/Express
   or Python/Flask, whichever is simpler here) that:
   - shows all 25 emails in a table with their category, follow-up
     probability, and latency per call
   - shows a summary at the top: total emails processed, total time,
     total cost, and what that extrapolates to at 1,000 and 10,000
     emails
   - has no write access to anything outside this project folder&#10;
4. Keep the API key read from an environment variable, never hardcoded
   or committed.&#10;
Don't build anything beyond this demo yet — no persistence, no real
inbox connection, no lead-scoring logic tied to my actual CRM. Once I've
seen it work on the fake emails, we'll talk about whether to point a
similar setup at real (anonymized) lead data next.</pre>
</div>

A few things about that prompt are deliberate, and they're worth stealing for your own work:

**It asks to see the request shape before the loop.** That one line - *"show me the exact Jev request/response shape you're using before wiring it into a loop"* - is the highest-value sentence in the whole prompt. You get a checkpoint before your agent runs the same possibly-wrong call twenty-five times.

**It measures latency and cost per call.** Reading "70 to 500 milliseconds" in a blog post does nothing. Watching twenty-five emails get classified in the time it takes to blink, with a cost figure that rounds to zero, is what makes it land. The extrapolation to 1,000 and 10,000 emails is where you'll actually start having ideas.

**It fences the scope, twice.** No writes outside the project folder, no real data, no persistence, and an explicit "don't build anything beyond this." Agents are enthusiastic. Left unbounded, you asked for a demo and got a half-finished CRM integration.

**It ends with what comes next.** Telling the agent what the *next* step might be, while clearly deferring it, stops it from either forgetting the direction or building it prematurely.

Give it a few minutes. When it's done, open the localhost URL it gives you and look at the table.


## What to Do Once It Works

That demo is a toy, but it's a toy in the exact shape of something real. The obvious next moves, roughly in order of how much they'll teach you:

**Break it on purpose.** Add three or four emails that genuinely don't fit any of your categories - a calendar invite, a newsletter, something in another language. Watch what the probabilities do. Confident wrong answers are the failure mode that matters, and you want to meet it on fake data.

**Add a confidence gate.** Pick a threshold - 0.85 is a reasonable starting point - and have the demo split its output into "acted on automatically" and "needs a human". This is confidence-gated routing, and it's the pattern that turns a classifier into an actual automation. It's the single most useful thing in the TypeSafe docs.

**Swap the domain.** Same code, different data. Run it over product reviews, job applications, form submissions, support tickets. The plumbing doesn't change at all, which is rather the point.

**Then, and only then, point it at something real.** Anonymised first. If you've built automations with tools like Zapier before - [here's how I approach that](/how-to-automate-shopify-orders-with-zapier) - Jev slots into the judgment step those workflows always had to fudge.

And if you want the bigger picture on where this fits alongside agents and MCPs, [start here](/what-are-mcps-ai-agents-beginner-guide).


<div style="
  background: #FDF6F1;
  border: 2px solid #E8CDBD;
  border-radius: 22px;
  padding: 44px 40px;
  margin: 44px 0;
  text-align: center;
  box-shadow: 0 10px 40px rgba(199,91,58,0.12);
">
  <p style="font-size: 0.74rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C75B3A; margin: 0 0 14px;">Your turn to build</p>
  <h3 style="font-size: 2rem; line-height: 1.15; font-weight: 900; color: #1C1917; margin: 0 0 16px; letter-spacing: -0.03em;">Build your beautiful website today</h3>
  <p style="font-size: 1.05rem; color: #57534E; line-height: 1.7; max-width: 520px; margin: 0 auto 28px;">
    Tools change every month. Having something of your own that's actually live doesn't. My complete step-by-step pack takes you from a blank screen to a real website on your own domain - with a private 1-on-1 call with me included.
  </p>
  <a href="https://www.sellingwithnas.com/ai-masterclass-with-nas" style="
    display: inline-block;
    padding: 18px 44px;
    border-radius: 14px;
    font-size: 1.1rem;
    font-weight: 800;
    text-decoration: none;
    background: #DA7756;
    color: #ffffff;
    box-shadow: 0 6px 22px rgba(218,119,86,0.35);
    letter-spacing: -0.01em;
  ">
    Build My Website With Claude →
  </a>
  <p style="font-size: 0.8rem; color: #A8A29E; margin: 18px 0 0;">Lifetime access · Beginner friendly · No code needed</p>
  <p style="font-size: 0.85rem; color: #78716C; line-height: 1.6; margin: 20px 0 0; padding-top: 18px; border-top: 1px solid #EADDD3;">
    Want to build it together, live? <a href="/ai-intensive-mentorship" style="color: #C75B3A; font-weight: 700; text-decoration: underline;">Apply for the 1-month mentorship →</a> &nbsp;·&nbsp; Prefer it done for you? <a href="/contact" style="color: #C75B3A; font-weight: 700; text-decoration: underline;">Get in touch →</a>
  </p>
</div>


## Frequently Asked Questions

**Do I need to know how to code to use JEV?**

Not for the Playground. Signing up, pasting a customer message into the State section, and running the three question types takes ten minutes and involves no code whatsoever. Past that point you need code to call the API - but as this tutorial shows, your AI agent can write all of it if you install the TypeSafe skill first and describe what you want clearly.

**What is the State section in the JEV Playground?**

State is the unstructured input you want Jev to judge - a customer message, an email, a support ticket, a chunk of JSON from your application. It's separate from Questions, which is where you define what you want to know about that state. The most common beginner mistake is leaving State empty and wondering why the answers are meaningless: the questions are only the lens, State is the thing being looked at.

**What's the difference between noul, choice, and score?**

A **noul** answers a true/false question and returns a probability between 0 and 1. A **choice** picks exactly one option from a list you define and returns the full probability distribution across your options. A **score** rates the input along an ordered rubric you write, returning a probability-weighted value. All three come back with confidence attached, and all three can only return values from the space you defined in advance.

**Where do I get my TypeSafe API key?**

From the console at console.typesafe.ai/keys. Click Create key, name it, and copy it immediately - you only get one look. Then set it as the `TYPESAFE_API_KEY` environment variable, which both the Python and JavaScript SDKs read automatically. Never hardcode it in a file or commit it to a repository.

**What is the TypeSafe skill prompt and do I need it?**

It's a short prompt in the Quickstart panel of the console homepage that tells your AI agent to install TypeSafe's official agent skill. You don't technically need it, but you want it. Jev launched in September 2026, so most agents have little or no reliable knowledge of its API. The skill gives your agent the current request shapes, the question types, the confidence patterns, and links to the live documentation - which is the difference between working code and a debugging session over invented parameters.

**Can I use JEV with Cursor or Codex instead of Claude Code?**

Yes. The skill installs into Claude Code as a plugin via `claude plugin install typesafe@typesafe-ai`, and into other agents with `npx skills add typesafe-ai/skills --skill typesafe-ai`, which prompts you to select your agent. The skill prompt in the Quickstart panel covers both paths, so you can paste the same thing into any of them.

**Is JEV free to try?**

Jev is in early access, so availability depends on getting through the sign-up. On cost, it's $0.042 per million input tokens with free output tokens, which means a tutorial like this one - a few dozen Playground runs and a twenty-five-email demo - costs a rounding error. Check the usage page in the console if you want to see the actual figure.

**Can I replace Claude or GPT with JEV?**

No, and you wouldn't want to. Jev doesn't generate text, write code, or hold a conversation - it returns typed judgments. The pattern that works is using both: Jev makes the fast, cheap decision about whether and where to act, and your LLM does the expensive generative work only when Jev's confidence says it's warranted. I go into that split in more detail in [my first post on Jev](/how-to-use-jev-typesafe-ai).


## Nas' Note

The part of this that surprised me wasn't the speed. It was how quickly the Playground changes how you think.

You spend ten minutes writing questions against real messages and you start noticing decision points everywhere - places in your own work where you've been either guessing, using a brittle rule, or paying a frontier model three seconds and real money to do something a calibrated number would have settled instantly.

That's the actual value of Step 2, and it's why I'd push back on skipping straight to the code. The API is easy. Knowing what to ask it is the skill, and you build that faster in a browser tab than in a codebase.

So: sign up, put a real message in the State box, run the three questions, and pay attention to what you start wanting to build. Then hand the prompt in Step 6 to your agent and go make a cup of tea.

Twenty minutes, and you'll know whether this belongs in your stack.


---

**Liked what you just saw?** Follow me on <a href="https://www.youtube.com/@sellingwithnas" target="_blank" rel="noopener noreferrer">Youtube</a> or connect on <a href="https://www.linkedin.com/in/nasser-mansurali-659145102/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more insights on building with AI.
