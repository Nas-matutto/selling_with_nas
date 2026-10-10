---
publishDate: 2026-10-09T00:00:00Z
author: Nas
title: "How to Build Free AI Videos with Claude (Using HyperFrames)"
excerpt: Make product demos, explainers and promo videos with Claude Code and HyperFrames, the open-source video framework that's free to use. Setup, the two mistakes to avoid, and 3 copy-paste prompts.
image: ~/assets/images/Hyperframes_with-claude.png
category: Technology
tags:
  - AI
  - Claude Code
  - video
metadata:
  canonical: https://www.sellingwithnas.com/how-to-build-free-ai-videos-with-claude-hyperframes
  title: "How to Build Free AI Videos with Claude and HyperFrames (2026)"
  description: "Build AI videos for free with Claude Code and HyperFrames, the open-source video framework. Exact install commands, the 2 setup mistakes to avoid, and 3 copy-paste prompts."
  keywords: "free AI videos with Claude, HyperFrames, HyperFrames Claude Code, HeyGen HyperFrames open source, Claude Code plugin marketplace, AI product demo video, free AI video generator, Claude Code video, claude plugin install hyperframes"
---


# How to Build Free AI Videos with Claude

### We use HyperFrames, which is open-source and free to use

<!-- VIDEO: add the finished HyperFrames result here as the intro (e.g. the Talk to Me Data announcement). -->

Every video you see in this post was made by Claude, from a text prompt, using <a href="https://github.com/heygen-com/hyperframes" target="_blank" rel="noopener noreferrer">HyperFrames</a>. No editing software, no subscription to a video tool, and no pay-per-render fees.

HyperFrames is an open-source video framework built by HeyGen. Claude writes the video as code, then renders it into a normal MP4 you can post anywhere. Because it's open source, **you pay nothing for the tool itself**. The only thing you need is the Claude plan you probably already have.

But there's a catch: most people set it up the wrong way. Below are the two mistakes I see most, the exact commands that work, and three prompts you can copy and paste today.


## The Two Mistakes Almost Everyone Makes

### Mistake 1: Trying to install it in the Claude chat

The most popular mistake is opening a normal Claude chat and asking it to install HyperFrames. It won't work. **HyperFrames only works in Claude Code**, because it needs to run commands on your computer and render files locally.

If you've never used Claude Code, start with my [beginner's guide to Claude Code](/how-to-use-claude-code-for-beginners) and come back.

### Mistake 2: Connecting it through a plugin under "Customize"

The second mistake is going to **Customize** in Claude and adding HyperFrames as a connector or plugin from there. It looks like the obvious route, but it sends you to sign up for **HeyGen**, the company behind HyperFrames. From there you may be prompted to pay based on usage, which is exactly what we're trying to avoid.

We want the open-source route: build AI videos for **free**, with Claude. That means installing it directly inside Claude Code, as shown next.


## How to Install HyperFrames in Claude Code (Free)

Open **Claude Code** (in the terminal, or in the Code tab of the Claude desktop app) and run these two commands, one after the other.

**1. Add the HyperFrames marketplace:**

<div style="margin:24px 0 36px;border-radius:14px;overflow:hidden;border:1px solid #E8CDBD;background:#1C1917;box-shadow:0 8px 28px rgba(28,25,23,0.18);">
<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:#292524;border-bottom:1px solid #44403C;">
<span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Terminal</span>
<button type="button" onclick="var b=this,t=document.getElementById('hf-cmd-1').innerText;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy command'},2000)}).catch(function(){var r=document.createRange();r.selectNodeContents(document.getElementById('hf-cmd-1'));var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Press Cmd/Ctrl+C'})" style="cursor:pointer;border:0;border-radius:8px;padding:7px 14px;font-size:0.8rem;font-weight:700;background:#DA7756;color:#fff;">Copy command</button>
</div>
<pre id="hf-cmd-1" style="margin:0;padding:18px 20px;white-space:pre-wrap;word-break:break-word;font-size:0.92rem;line-height:1.65;color:#F5F5F4;background:#1C1917;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-radius:0;">claude plugin marketplace add heygen-com/hyperframes</pre>
</div>

**2. Install the plugin:**

<div style="margin:24px 0 36px;border-radius:14px;overflow:hidden;border:1px solid #E8CDBD;background:#1C1917;box-shadow:0 8px 28px rgba(28,25,23,0.18);">
<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:#292524;border-bottom:1px solid #44403C;">
<span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Terminal</span>
<button type="button" onclick="var b=this,t=document.getElementById('hf-cmd-2').innerText;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy command'},2000)}).catch(function(){var r=document.createRange();r.selectNodeContents(document.getElementById('hf-cmd-2'));var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Press Cmd/Ctrl+C'})" style="cursor:pointer;border:0;border-radius:8px;padding:7px 14px;font-size:0.8rem;font-weight:700;background:#DA7756;color:#fff;">Copy command</button>
</div>
<pre id="hf-cmd-2" style="margin:0;padding:18px 20px;white-space:pre-wrap;word-break:break-word;font-size:0.92rem;line-height:1.65;color:#F5F5F4;background:#1C1917;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-radius:0;">claude plugin install hyperframes@hyperframes</pre>
</div>

**3. Open a new tab.** Re-open Claude Code in a fresh tab so the plugin becomes active. If you skip this, Claude won't see HyperFrames yet.

Now for the fun part: building your first video.

### Set up a project folder first

I recommend opening a dedicated folder inside Claude Code before you start. This is where you'll put all your assets (logos, screenshots, mascots), and where Claude will later save the videos it produces. One folder per project keeps everything tidy and lets you point Claude at files by name, like "use the screenshots in the Product Shots folder."


## What Does It Cost? (About 9% of a Session)

A 10-15 second video on **Claude Opus 5.5**, on the **$20/month Claude Pro plan**, used about **9% of my session usage**. That's not a lot, and nothing came out of my pocket on top of the subscription.

I'd still recommend keeping videos short, **30 seconds or less**. Longer videos mean more scenes, more code, and more of your usage limit. If you're hitting limits often, my guide on [how to reduce Claude token usage](/how-to-reduce-claude-tokens-and-avoid-usage-limits) will help.


## Which Claude Model Should You Use for Better Videos?

The model you pick matters more than you'd think. A video is a lot of moving parts: timing, layout, animation, and following your brief closely. Stronger models handle those details better, so you spend less time fixing the first draft.

Here's how I'd choose:

- **Claude Opus 5.5 (my recommendation).** This is what I used for every video in this post. It follows detailed prompts closely, handles multi-scene timing well, and tends to need fewer rounds of edits. If you want the best result, start here.
- **Claude Fable 5.1.** Worth trying if it's available on your plan, especially for longer or more complex videos with many scenes. Keep an eye on your usage, since the most capable models use your limit faster.
- **Claude Sonnet 5.5.** A solid, lighter option. It's great for simple videos like a 10-second title card or a quick text animation, and for small tweaks to a video you've already built, and it stretches your usage further.
- **Claude Haiku 4.5.** The fastest and lightest. I'd only use it for tiny edits, like changing a line of text or a color. For building a video from scratch, I'd move up a model.

**My workflow:** build the video with Opus 5.5, then switch to Sonnet 5.5 for small follow-up changes to save usage. You can change models any time in Claude Code with the `/model` command.

Whichever model you use, a clear prompt matters just as much. State the length, the format, the assets to use and the exact call to action, like in the three prompts below.


## 3 Videos I Built (With the Exact Prompts)

For these examples I used my startup, <a href="https://talktomedata.com/" target="_blank" rel="noopener noreferrer">Talk to Me Data</a>, which builds AI agents for businesses. Swap in your own product, links and screenshots. Each prompt has a copy button.

### 1. A simple product demo video

The easiest place to start: a 10-second product demo. Put screenshots of your product in your project folder, tell Claude where they are, and describe what the video should promote.

<!-- VIDEO: add the Prompt 1 result here. -->

<div style="margin:24px 0 36px;border-radius:14px;overflow:hidden;border:1px solid #E8CDBD;background:#1C1917;box-shadow:0 8px 28px rgba(28,25,23,0.18);">
<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:#292524;border-bottom:1px solid #44403C;">
<span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Prompt 1 · Product demo</span>
<button type="button" onclick="var b=this,t=document.getElementById('hf-prompt-1').innerText;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy prompt'},2000)}).catch(function(){var r=document.createRange();r.selectNodeContents(document.getElementById('hf-prompt-1'));var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Press Cmd/Ctrl+C'})" style="cursor:pointer;border:0;border-radius:8px;padding:7px 14px;font-size:0.8rem;font-weight:700;background:#DA7756;color:#fff;">Copy prompt</button>
</div>
<pre id="hf-prompt-1" style="margin:0;padding:18px 20px;white-space:pre-wrap;word-break:break-word;font-size:0.92rem;line-height:1.65;color:#F5F5F4;background:#1C1917;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-radius:0;">I want you to build me a 10-second product demo video to promote my startup - https://talktomedata.com/ - which focuses on building AI Agents for businesses. In this particular video I want you to showcase The Social Media AI Agent, which extracts data directly from your social accounts, identifies winning post topics and trends, and proposes winning post combinations. The AI Agent is data driven and it helps creators reduce their workload while maximizing their social media results.
&#10;
You can find more information about this agent here: https://talktomedata.com/agents/social-media and in the folder of this project called "Product Shots", you can find screenshots of the product you can use in the video.</pre>
</div>

### 2. A video inspired by another video, with an animated mascot

This one is my favorite. I found a video I loved, asked Claude to work out **what makes it so good**, and then had it recreate that style for a Talk to Me Data announcement. I also dropped a static ambassador image into the folder and asked Claude to animate it as the personification of the agent.

<!-- VIDEO: add the Prompt 2 result here (the Talk to Me Data announcement). -->

<div style="margin:24px 0 36px;border-radius:14px;overflow:hidden;border:1px solid #E8CDBD;background:#1C1917;box-shadow:0 8px 28px rgba(28,25,23,0.18);">
<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:#292524;border-bottom:1px solid #44403C;">
<span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Prompt 2 · Video inspired by another video</span>
<button type="button" onclick="var b=this,t=document.getElementById('hf-prompt-2').innerText;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy prompt'},2000)}).catch(function(){var r=document.createRange();r.selectNodeContents(document.getElementById('hf-prompt-2'));var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Press Cmd/Ctrl+C'})" style="cursor:pointer;border:0;border-radius:8px;padding:7px 14px;font-size:0.8rem;font-weight:700;background:#DA7756;color:#fff;">Copy prompt</button>
</div>
<pre id="hf-prompt-2" style="margin:0;padding:18px 20px;white-space:pre-wrap;word-break:break-word;font-size:0.92rem;line-height:1.65;color:#F5F5F4;background:#1C1917;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-radius:0;">Figure out what makes the video in this link so good: https://www.threads.com/@ahmedshawki_ai/post/DeNKVigABop?xmt=AQG0ej6GRNmpjSATzc9gwOlmGmIul70hJZJBJBLHZiFbZQ
I want us to create a promotional video for Talk to Me Data along the lines of that video, in which we introduce the concept of using an AI Agent to manage our Social Media Channels.
&#10;
Use the ambassador (TTMD_agent_v3) in the folder and animate it as the personification of the Agent.</pre>
</div>

### 3. A fast, feature-packed explainer

The third video is shorter (15-20 seconds) but packed with information. It's built around many website screenshots and ends with a clear call to action, which makes it a good template for an explainer-style promo.

<!-- VIDEO: add the Prompt 3 result here (the explainer-style video). -->

<div style="margin:24px 0 36px;border-radius:14px;overflow:hidden;border:1px solid #E8CDBD;background:#1C1917;box-shadow:0 8px 28px rgba(28,25,23,0.18);">
<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:#292524;border-bottom:1px solid #44403C;">
<span style="font-size:0.72rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#E8CDBD;">Prompt 3 · Feature-packed promo</span>
<button type="button" onclick="var b=this,t=document.getElementById('hf-prompt-3').innerText;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy prompt'},2000)}).catch(function(){var r=document.createRange();r.selectNodeContents(document.getElementById('hf-prompt-3'));var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Press Cmd/Ctrl+C'})" style="cursor:pointer;border:0;border-radius:8px;padding:7px 14px;font-size:0.8rem;font-weight:700;background:#DA7756;color:#fff;">Copy prompt</button>
</div>
<pre id="hf-prompt-3" style="margin:0;padding:18px 20px;white-space:pre-wrap;word-break:break-word;font-size:0.92rem;line-height:1.65;color:#F5F5F4;background:#1C1917;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-radius:0;">I now want you to draw inspiration from this video: https://x.com/code_kartik/status/2107195332098699425
&#10;
Make the video shorter - about 15 to 20 seconds, but really highlight how the social media AI agent can perform many tasks, from pulling data, analyzing it, identifying winners, tracking competitors, and more. Use many screenshots of the website (https://talktomedata.com/). Make the CTA "Sign up for Free at Talk to me Data".</pre>
</div>


## Tips for Better Videos

- **Give Claude a reference.** "Figure out what makes this video good" works far better than describing a style from scratch.
- **Add real assets.** Screenshots, logos and mascots in your folder make videos feel like your brand, not a template.
- **Be specific about length, format and call to action.** Say 10 seconds or 20, and write the exact CTA text you want.
- **Expect a round or two of edits.** Tell Claude what to change, such as "slow down the transitions" or "make the headline bigger", the same way you'd brief an editor.
- **Keep it under 30 seconds.** Shorter videos are cheaper on usage and perform better on social.

If you've tried the Remotion route, you may like HyperFrames even more. Compare it with my guide on [creating AI videos with Claude and Remotion](/how-to-use-claude-remotion-to-create-ai-videos).


<div style="
  background: #FDF6F1;
  border: 2px solid #E8CDBD;
  border-radius: 22px;
  padding: 44px 40px;
  margin: 44px 0;
  text-align: center;
  box-shadow: 0 10px 40px rgba(199,91,58,0.12);
">
  <p style="font-size: 0.74rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C75B3A; margin: 0 0 14px;">Somewhere to put the video</p>
  <h3 style="font-size: 2rem; line-height: 1.15; font-weight: 900; color: #1C1917; margin: 0 0 16px; letter-spacing: -0.03em;">Build your beautiful website today</h3>
  <p style="font-size: 1.05rem; color: #57534E; line-height: 1.7; max-width: 520px; margin: 0 auto 28px;">
    Great video, no website to host it on? Let's fix that. My complete step-by-step pack takes you from a blank screen to a real website, live on your own domain - plus a private 1-on-1 call with me.
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


## Nas' Note: Free Video Is Now a Real Option

A short, polished video used to cost real money or hours in an editor. Now it costs a small slice of a $20 plan and a few minutes. The one thing to get right is the setup: install HyperFrames inside **Claude Code**, with the two commands above, and skip the plugin sign-up that leads to usage-based billing.

Start with the 10-second product demo, then iterate. Once you've made one, the rest come fast. And once you're posting videos regularly, a good [Claude workflow for marketing](/how-to-use-claude-for-marketing) will help you keep up.


---

**Liked what you just saw?** Follow me on <a href="https://www.youtube.com/@sellingwithnas" target="_blank" rel="noopener noreferrer">Youtube</a> or connect on <a href="https://www.linkedin.com/in/nasser-mansurali-659145102/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more insights on growing your business online.
