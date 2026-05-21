---
publishDate: 2026-05-16T00:00:00Z
author: Nas
title: "What are MCPs? AI Agents Beginner Guide"
excerpt: MCPs (Model Context Protocols) are the universal translator that lets Claude talk to Gmail, Google Drive, Notion, Figma, and hundreds of other tools, without you having to build any custom integration. Here's how they work and how to set them up in minutes.
image: ~/assets/images/MCP_Explained.png
category: Technology
tags:
  - AI
  - Claude
  - MCP
  - AI Agents
  - productivity
metadata:
  canonical: https://www.sellingwithnas.com/what-are-mcps-ai-agents-beginner-guide
  title: "What are MCPs? AI Agents Beginner Guide (2026)"
  description: "MCPs (Model Context Protocols) let Claude connect to Gmail, Notion, Google Drive, Figma, and more without custom infrastructure. Learn what MCPs are, how they work, and how to add connectors in the Claude app."
  keywords: "what are MCPs, Model Context Protocol, Claude MCP, AI agents beginner guide, Claude connectors, MCP explained, Claude integrations, how to use MCP with Claude, Claude tools, AI workflow automation, Claude app connectors"
---


# What are MCPs? AI Agents Beginner Guide

<div style="
  background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(168,85,247,0.08));
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 14px;
  padding: 22px 26px;
  margin: 0 0 36px 0;
">
  <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #f97316; margin-bottom: 10px;">Quick Summary</strong>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
    <li><strong>MCP</strong> stands for <strong>Model Context Protocol</strong> - a universal standard that lets Claude communicate with external tools and services.</li>
    <li>Think of MCPs as a <strong>translator layer</strong>: instead of building a custom integration for every app, one protocol handles them all.</li>
    <li>Claude currently supports connectors for Gmail, Google Drive, Google Calendar, Notion, Figma, Canva, Microsoft 365, and a lot more.</li>
    <li>You can add connectors in under 2 minutes: <strong>Claude app → Customize → Connectors</strong>.</li>
    <li>No coding is required for MCPs to work in both the Claude desktop app and Claude.ai.</li>
  </ul>
</div>


If you've been using Claude for a while, you've probably wished it could just pull up that email thread, check your calendar, or update a Notion doc, without actually having to copy-paste everything manually. That's exactly what MCPs make possible - using external tools via your claude account.

In this guide, I'll break down what MCPs actually are, why they're a big deal for anyone building AI-powered workflows, and how to start using them today with zero technical setup.


## What Does MCP Stand For?

MCP stands for **Model Context Protocol**. It's an open standard created by <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noopener noreferrer">Anthropic</a> that defines a common language for AI models to communicate with external tools, APIs, and data sources.

Before MCP existed, connecting an AI to any external service meant building a completely custom integration, so writing code to authenticate with the API, format requests correctly, handle responses, manage errors, etc. That process had to be repeated for every single tool you wanted to connect.

MCP changes that by providing one standardized protocol that any tool can implement. Once a tool speaks MCP, Claude can communicate with it immediately and no additional custom infrastructure is required on your end.


## MCPs Explained: The Universal Translator Analogy

The easiest way to understand MCPs is to think of them as a **universal translator**.

![MCP Explained - how MCPs connect Claude to external tools](~/assets/images/MCP_Explained.png)

Imagine Claude is a very capable person who speaks one language. Gmail speaks its own language. Google Drive speaks another. Notion, Figma, Canva - they each have their own dialect. Without a translator, Claude can't communicate with any of them, no matter how smart it is.

This of the MCP as the translator. It sits between Claude and all of these tools, converting Claude's requests into a format each tool understands, and converting the tool's responses back into something Claude can work with.

The result: Claude can search your inbox, read a file from your Drive, check your calendar, update a Notion page, or query a database - all within a single conversation, without you having to build anything.

This is what transforms Claude from a smart chat assistant into an actual **AI agent**: something that can take actions across your digital environment on your behalf.


## Why MCPs Matter for Your Workflow

Before MCPs, most AI tools worked in isolation. You'd describe a problem to Claude, get an answer, then manually go execute it yourself across five different apps.

With MCPs, the loop closes. Claude can:

- **Read your emails** and draft replies in your voice
- **Search and access files** from Google Drive without you uploading them
- **Check and create calendar events** based on your schedule
- **Update Notion databases** directly from a conversation
- **Pull design assets** from Figma or Canva and use them as context
- **Access your Microsoft 365** environment including SharePoint, OneDrive, and Teams

This isn't theoretical anymore, as these are all live connectors you can enable today. And because they all use the same MCP standard, adding a new one takes minutes, not weeks of engineering work.

If you want to go deeper on how Claude can run tasks autonomously on your computer, check out my [Claude Cowork tutorial](/claude-cowork-full-tutorial-for-beginners) - it builds on top of this foundation.


## How to Add MCP Connectors in Claude

Here's exactly how to access and enable connectors in the Claude app:

**Step 1:** Open the Claude desktop app or go to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude.ai</a>

**Step 2:** Click **Customize** in the top navigation

**Step 3:** Select **Connectors** from the left sidebar

**Step 4:** Browse the directory and click **+** next to any connector you want to add

![Claude Connectors Directory - add MCPs via Customize > Connectors](~/assets/images/Claude_connectors.png)

As you can see in the screenshot above, the Connectors directory inside Claude shows you all the available integrations sorted by popularity. The most popular ones as of now include:

| Connector | What It Does |
|---|---|
| **Google Drive** | Search, read, and upload files instantly |
| **Gmail** | Draft replies, summarize threads, search your inbox |
| **Google Calendar** | Manage your schedule and coordinate meetings |
| **Notion** | Connect your workspace to search, update, and power workflows |
| **Canva** | Search, create, autofill, and export Canva designs |
| **Figma** | Generate diagrams and better code from Figma context |
| **Microsoft 365** | Access SharePoint, OneDrive, Outlook, and Teams directly |
| **Atlassian Rovo** | Connect your Jira and Confluence workspace |

Once a connector is enabled, you just talk to Claude naturally. You don't need to learn any special syntax - just say "find my latest email from [name]" or "create a calendar event for Friday at 3pm" and Claude goes off into work, loading the relevant tools, accessing them and delivering the output you requested for.


## MCPs vs Plugins vs Skills: What's the Difference?

This is a common point of confusion, so let me clarify:

- **MCPs / Connectors** - real-time connections to external services (Gmail, Drive, Notion). Claude can read and write to these systems live during your conversation.
- **Skills** - pre-built prompt templates and workflows that give Claude specialized expertise (like a design skill, a video creation skill, or a commit skill). They don't connect to external services — they shape how Claude thinks and responds. Read more in my [Claude Skills guide](/how-to-start-using-claude-skills-top-15-skills).
- **Plugins** - tool-specific extensions available in some interfaces. Less standardized than MCPs.

MCPs are the most powerful of the three because they give Claude live access to real data and real actions. Skills and plugins are about *how* Claude behaves - MCPs are about *what* Claude can do.


<div style="
  background: linear-gradient(135deg, #f97316, #ef4444);
  color: white;
  padding: 24px;
  border-radius: 18px;
  text-align: center;
  margin: 32px 0;
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3);
">
  <h3 style="margin: 0 0 12px 0; font-size: 20px; color: white; font-weight: 600;">
    Want help setting up Claude with the right tools and connectors for your business?
  </h3>
  <a href="/contact" style="
    display: inline-block;
    background: rgba(255,255,255,0.2);
    color: white;
    padding: 2px 24px;
    border-radius: 18px;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid rgba(255,255,255,0.3);
    transition: all 0.3s ease;
  "
  onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)'"
  onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='translateY(0px)'">
    Get in Touch Today →
  </a>
</div>


## What Can You Build With MCPs?

Once your connectors are set up, the real power comes from combining them. A few practical examples:

**Email + Calendar:** Ask Claude to find all emails about a specific project and schedule a follow-up based on what's available on your calendar. Claude reads both systems and drafts a reply and a meeting invite in one go.

**Drive + Notion:** Ask Claude to summarize a report from your Google Drive and create a structured summary page in your Notion workspace. No copy-pasting between tabs.

**Figma + Claude Code:** Share your Figma design context with Claude while you're building in [Claude Code](/claude-code-full-tutorial-for-beginners) - Claude can reference the exact design specs and translate them directly into code.

**Gmail + Canva:** Pull a product brief from an email thread and use it as context to generate a matching Canva design concept.

These workflows were impossible six months ago without a developer building custom API integrations. Now they're a few clicks and a conversation.


## The Bigger Picture: From Chatbot to AI Agent

MCPs represent a fundamental shift in what AI assistants can be. A chatbot responds to questions. An AI agent acts on your behalf across real systems.

The Model Context Protocol is the infrastructure layer that makes AI agents practical for everyday users. It's the reason Claude can move from answering "what should I say in this email?" to actually reading the thread, drafting the reply, and sending it (all in the same session).

As more tools adopt the MCP standard (and Anthropic is actively expanding the list), Claude's ability to act as a genuine digital colleague will keep growing.

If you're just getting started with Claude, check out my [full beginner guide to Claude Code](/how-to-use-claude-code-for-beginners) — MCPs and connectors are one piece of a larger system that can genuinely automate a significant chunk of your work.


## Frequently Asked Questions

**What does MCP stand for?**
MCP stands for Model Context Protocol. It's an open standard developed by Anthropic that defines how AI models communicate with external tools and data sources.

**Do I need to know how to code to use MCPs?**
No. Adding connectors in the Claude app is a point-and-click process. You don't need to write any code to enable Gmail, Google Drive, Notion, or any of the other available connectors.

**Are MCPs only available on Claude Pro?**
Most connectors require a Claude Pro or Team plan. The free tier has limited access. Check the <a href="https://claude.ai/upgrade" target="_blank" rel="noopener noreferrer">Claude pricing page</a> for the latest details on what's included.

**Is it safe to connect Claude to my Gmail or Google Drive?**
Connectors use OAuth authorization, meaning Claude requests access through your Google account - not by storing your credentials. You can revoke access at any time through your Google account settings or within Claude.

**What's the difference between an MCP and a connector?**
In the Claude interface, "connectors" are the user-facing term for MCP-powered integrations. Under the hood, they use the Model Context Protocol. The terms are effectively interchangeable from a user perspective.

**How many connectors can I add?**
There's no hard limit on the number of connectors you can enable, though enabling too many at once can add overhead to each conversation. Enable the ones you actively use and disable the rest — it keeps your sessions lean and focused.

**Can I build my own MCP server?**
Yes. Because MCP is an open standard, developers can build their own MCP servers to expose custom tools, internal databases, or proprietary APIs to Claude. Anthropic has published the full spec on <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer">GitHub</a>.

**Will more connectors be added over time?**
Yes. Anthropic is actively expanding the connector directory, and third-party developers are building MCP servers for their own platforms. The ecosystem is growing quickly.


---

## More Videos You'll Like

<style>
@keyframes nasScrollVideos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>

<div style="overflow: hidden; margin: 20px 0 36px 0; position: relative;">
  <div
    style="display: flex; gap: 12px; animation: nasScrollVideos 50s linear infinite; width: max-content; cursor: pointer;"
    onmouseover="this.style.animationPlayState='paused'"
    onmouseout="this.style.animationPlayState='running'"
  >
    <a href="https://www.youtube.com/watch?v=W1_jBBhl3V0" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/W1_jBBhl3V0/mqdefault.jpg" alt="How to use Claude Code to build Apps" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Code to build Apps</span>
    </a>
    <a href="https://www.youtube.com/watch?v=msaaFo_wg-Y" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/msaaFo_wg-Y/mqdefault.jpg" alt="10 Best Claude Code Skills for beginners" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">10 Best Claude Code Skills for beginners</span>
    </a>
    <a href="https://www.youtube.com/watch?v=FroqHFmAu_4" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/FroqHFmAu_4/mqdefault.jpg" alt="How to create AI Video Animations with Claude + Remotion" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to create AI Video Animations with Claude + Remotion</span>
    </a>
    <a href="https://www.youtube.com/watch?v=onATqcFhpX0" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/onATqcFhpX0/mqdefault.jpg" alt="How to use Claude Code to build a Website" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Code to build a Website</span>
    </a>
    <a href="https://www.youtube.com/watch?v=TWZsx4U3g2E" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/TWZsx4U3g2E/mqdefault.jpg" alt="How to use Claude Skills for beginners" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Skills for beginners</span>
    </a>
    <a href="https://www.youtube.com/watch?v=xa7OVNiyP4A" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/xa7OVNiyP4A/mqdefault.jpg" alt="How to write the PERFECT CLAUDE.md file" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to write the PERFECT CLAUDE.md file</span>
    </a>
    <a href="https://www.youtube.com/watch?v=bmJHVK2kwaI" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/bmJHVK2kwaI/mqdefault.jpg" alt="Automate 80% of your Marketing with Claude" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">Automate 80% of your Marketing with Claude</span>
    </a>
    <a href="https://www.youtube.com/watch?v=8YvtEcKyzP8" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/8YvtEcKyzP8/mqdefault.jpg" alt="How to use Claude Code — The basics" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Code — The basics</span>
    </a>
    <a href="https://www.youtube.com/watch?v=S3yhHDF9hW8" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/S3yhHDF9hW8/mqdefault.jpg" alt="Work 2X Faster with Claude Cowork" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">Work 2X Faster with Claude Cowork</span>
    </a>
    <a href="https://www.youtube.com/watch?v=BobBm0FaVvg" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/BobBm0FaVvg/mqdefault.jpg" alt="How to NEVER Hit Claude Usage Limits Again" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to NEVER Hit Claude Usage Limits Again</span>
    </a>
    <!-- Duplicate set for seamless loop -->
    <a href="https://www.youtube.com/watch?v=W1_jBBhl3V0" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/W1_jBBhl3V0/mqdefault.jpg" alt="How to use Claude Code to build Apps" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Code to build Apps</span>
    </a>
    <a href="https://www.youtube.com/watch?v=msaaFo_wg-Y" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/msaaFo_wg-Y/mqdefault.jpg" alt="10 Best Claude Code Skills for beginners" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">10 Best Claude Code Skills for beginners</span>
    </a>
    <a href="https://www.youtube.com/watch?v=FroqHFmAu_4" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/FroqHFmAu_4/mqdefault.jpg" alt="How to create AI Video Animations with Claude + Remotion" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to create AI Video Animations with Claude + Remotion</span>
    </a>
    <a href="https://www.youtube.com/watch?v=onATqcFhpX0" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/onATqcFhpX0/mqdefault.jpg" alt="How to use Claude Code to build a Website" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Code to build a Website</span>
    </a>
    <a href="https://www.youtube.com/watch?v=TWZsx4U3g2E" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/TWZsx4U3g2E/mqdefault.jpg" alt="How to use Claude Skills for beginners" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Skills for beginners</span>
    </a>
    <a href="https://www.youtube.com/watch?v=xa7OVNiyP4A" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/xa7OVNiyP4A/mqdefault.jpg" alt="How to write the PERFECT CLAUDE.md file" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to write the PERFECT CLAUDE.md file</span>
    </a>
    <a href="https://www.youtube.com/watch?v=bmJHVK2kwaI" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/bmJHVK2kwaI/mqdefault.jpg" alt="Automate 80% of your Marketing with Claude" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">Automate 80% of your Marketing with Claude</span>
    </a>
    <a href="https://www.youtube.com/watch?v=8YvtEcKyzP8" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/8YvtEcKyzP8/mqdefault.jpg" alt="How to use Claude Code — The basics" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to use Claude Code — The basics</span>
    </a>
    <a href="https://www.youtube.com/watch?v=S3yhHDF9hW8" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/S3yhHDF9hW8/mqdefault.jpg" alt="Work 2X Faster with Claude Cowork" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">Work 2X Faster with Claude Cowork</span>
    </a>
    <a href="https://www.youtube.com/watch?v=BobBm0FaVvg" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;text-decoration:none;width:196px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,0.1);">
      <img src="https://img.youtube.com/vi/BobBm0FaVvg/mqdefault.jpg" alt="How to NEVER Hit Claude Usage Limits Again" style="width:196px;height:110px;object-fit:cover;display:block;" loading="lazy"/>
      <span style="font-size:11.5px;color:#ccc;padding:8px 10px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">How to NEVER Hit Claude Usage Limits Again</span>
    </a>
  </div>
</div>


---

**Liked what you just saw?** Follow me on <a href="https://www.youtube.com/@sellingwithnas" target="_blank" rel="noopener noreferrer">Youtube</a> or connect on <a href="https://www.linkedin.com/in/nasser-mansurali-659145102/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more insights on growing your business online.
