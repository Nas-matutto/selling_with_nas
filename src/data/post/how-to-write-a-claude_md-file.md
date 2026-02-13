---
publishDate: 2026-02-13T00:00:00Z
author: Nas
title: The Complete Guide to Writing the Perfect CLAUDE.md File for Claude Code
excerpt: Learn how to create a CLAUDE.md file that makes Claude Code work better for your projects - no technical expertise required. Includes real examples you can copy.
image: ~/assets/images/Claude_md_banner.jpg
category: Technology
tags:
  - AI
  - web development
  - productivity
metadata:
  canonical: https://www.sellingwithnas.com/blog/how-to-write-a-claude_md-file
  title: "How to Write the Perfect CLAUDE.md File - Complete Guide for Claude Code"
  description: "Learn how to create a CLAUDE.md file that makes Claude Code smarter. Step-by-step guide with real examples, best practices, and common mistakes to avoid."
  keywords: "CLAUDE.md, Claude Code, CLAUDE.md file, Claude Code configuration, AI coding assistant, Claude Code best practices, Claude Code setup"
---


# The Complete Guide to Writing the Perfect CLAUDE.md File for Claude Code

*Learn how to create a CLAUDE.md file that makes Claude Code work better for your projects - no technical expertise required*

---

## What is a CLAUDE.md File and Why Do You Need One?

If you've started using [Claude Code](/blog/how-to-use-claude-code-for-beginners), you might have noticed something frustrating: Claude doesn't remember anything from your previous conversations. Every time you start a new session, you have to explain your project all over again which tools you use, how to run tests, what your coding style is.

**That's where CLAUDE.md comes in.**

Think of CLAUDE.md as an instruction manual that Claude reads automatically every time it starts working on your project. Instead of repeating yourself, you write your preferences once in this special file, and Claude follows them in every session.

It's like the difference between:
- **Without CLAUDE.md**: "Hey Claude, remember we use TypeScript, run tests with `npm test`, and prefer named exports..." (every single time)
- **With CLAUDE.md**: Claude already knows all of this and just gets to work

## How to Create Your First CLAUDE.md File

The easiest way to get started is to let Claude create it for you:

1. Open your terminal in your project folder
2. Type `/init` and press Enter
3. Claude will analyze your project and create a starter CLAUDE.md file

That's it! You now have a basic CLAUDE.md file.

**But here's the important part**: The auto-generated file is just a starting point. You'll want to customize it to match how you actually work.

## What Should You Put in Your CLAUDE.md File?

The golden rule is: **Only include what Claude can't figure out on its own.**

Here's what actually belongs in your CLAUDE.md:

### 1. A Quick Project Description

Start with one sentence that explains what your project is:

```markdown
# My E-Commerce Store
A Next.js online store with Stripe payment integration
```

This simple line helps Claude understand the context of everything it does.

### 2. The Commands You Use Repeatedly

Include the exact commands Claude should run for common tasks:

```markdown
## Commands
- `npm run dev` - Start the development server
- `npm test` - Run all tests
- `npm run build` - Build for production
- `npm run deploy` - Deploy to production
```

Now when you ask Claude to "run the tests," it knows exactly what to type.

### 3. Your Coding Style Preferences

Be specific about how you like your code written:

```markdown
## Code Style
- Use ES modules (not CommonJS)
- Prefer named exports over default exports
- Use arrow functions for React components
- Format with Prettier before committing
```

**Pro tip**: Don't just say "write clean code" - that's way too vague. Say exactly what "clean" means to you.

### 4. Important Project Quirks

Every project has its weird parts. Document them:

```markdown
## Important Notes
- Never edit files in the `src/legacy` folder - Anthropic is phasing those out
- The authentication system has a known quirk with token refresh - see docs/auth-fix.md
- Always run the full test suite before pushing to main
```

### 5. Where Things Live

Help Claude navigate your project:

```markdown
## Project Structure
- `src/components` - Reusable UI components
- `src/pages` - Website pages
- `src/lib` - Business logic and utilities
- `src/styles` - CSS and styling files
```


<div style="
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 24px;
            border-radius: 18px;
            text-align: center;
            margin: 32px 0;
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        ">
            <h3 style="margin: 0 0 12px 0; font-size: 20px; color: white; font-weight: 600;">
                Need help setting up Claude Code for your project?
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


## What NOT to Put in Your CLAUDE.md

Just as important as what to include is what to leave out:

**Don't include obvious stuff** - If Claude can figure it out by looking at your code, don't waste space explaining it

**Don't write a novel** - Every extra line takes up space in Claude's "memory." Keep it concise

**Don't duplicate what tools already do** - If you have a linter checking code style, don't list all those rules again

**Don't just say "never" without alternatives** - Instead of "Never use the old API," say "Never use the old API - use the v2 API instead"

## Putting It All Together: The Perfect CLAUDE.md

Now that you know what belongs in a CLAUDE.md file, here's what a complete one looks like when you follow every recommendation from this guide. This is for a fictional project, but it covers all five sections we discussed - project description, commands, code style, project quirks, and structure - plus a few extras that make Claude even more effective.

You can copy this and adapt it to your own project:

```markdown
# FreshCart - Online Grocery Delivery App
A Next.js 14 e-commerce app with Stripe payments and Supabase backend

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript 5.3
- Database: Supabase (PostgreSQL)
- Payments: Stripe
- Styling: Tailwind CSS
- Hosting: Vercel

## Commands
- `npm run dev` - Start development server at localhost:3000
- `npm test` - Run all tests with Jest
- `npm run test:watch` - Run tests in watch mode during development
- `npm run build` - Build for production
- `npm run lint` - Check code style with ESLint
- `npm run db:migrate` - Run Supabase database migrations
- `npm run deploy` - Deploy to Vercel (runs build + tests first)

## Code Style
- Use TypeScript strict mode - no `any` types
- Use named exports (not default exports)
- Arrow functions for all React components
- Async/await instead of .then() for promises
- Use `const` by default, `let` only when reassignment is needed
- Format with Prettier before committing (runs automatically via pre-commit hook)

## Project Structure
- `app/` - Next.js app router pages and layouts
- `components/` - Reusable React components
- `components/ui/` - Base UI elements (buttons, inputs, modals)
- `lib/` - Database queries, API helpers, and business logic
- `lib/stripe/` - All Stripe payment logic
- `hooks/` - Custom React hooks
- `types/` - Shared TypeScript type definitions
- `public/` - Static assets (images, fonts)

## Important Rules
- Never edit files in `lib/legacy/` - we're migrating away from those. Use `lib/` instead
- Never commit directly to the main branch - always create a feature branch first
- Always run `npm test` before pushing any changes
- The Stripe webhook handler in `app/api/webhooks/stripe/route.ts` is sensitive - test thoroughly before changing
- For Supabase auth issues, check `docs/supabase-auth-notes.md` before debugging
- Environment variables are in `.env.local` (never commit this file)

## Testing
- Write tests for all new features and bug fixes
- Use React Testing Library for component tests
- Use MSW (Mock Service Worker) for mocking API calls
- Aim for 80% code coverage on new code

## Git Workflow
- Branch naming: `feature/short-description` or `fix/short-description`
- Write clear commit messages that explain *why*, not just *what*
- Squash merge feature branches into main
```

Notice how every section is specific and actionable. There's no fluff, no "write clean code" - just clear instructions that Claude can follow immediately. This file is about 50 lines, which is the sweet spot for most projects.

## How to Make Your CLAUDE.md Better Over Time

Your CLAUDE.md should grow with your project. Here's how to improve it:

**When Claude makes a mistake**, ask yourself: "Would adding a note to CLAUDE.md prevent this next time?"

For example:
- If Claude keeps using the wrong testing command, add the correct one
- If Claude edits files it shouldn't touch, add a "never edit" note
- If Claude doesn't know about a project convention, document it

**Update it when your project changes**:
- New tool added? Document the commands
- Changed how you deploy? Update the deployment steps
- New team convention? Add it to the file

## Tips for Non-Technical Users

If you're new to coding, here are some simple tips:

**Start small** - You don't need a perfect CLAUDE.md on day one. Start with just the basics and add more as you go.

**Use plain English** - You don't need fancy technical jargon. Write instructions the way you'd explain them to a friend.

**Test your changes** - After updating CLAUDE.md, start a new Claude Code session and see if it follows your instructions better.

**Ask Claude for help** - You can literally ask Claude: "Can you help me improve my CLAUDE.md file?" and it will suggest additions.

## The Secret to a Great CLAUDE.md

Here's the most important thing to understand: **A good CLAUDE.md file solves real problems you actually have.**

Don't try to write the "perfect" CLAUDE.md based on what you think you should include. Instead:

1. Use Claude Code for a while without a CLAUDE.md
2. Notice what you keep repeating or what Claude keeps getting wrong
3. Add those specific things to your CLAUDE.md
4. Watch Claude get better at helping you

The best CLAUDE.md files are built from real experience, not theoretical best practices.


<div style="
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 24px;
            border-radius: 18px;
            text-align: center;
            margin: 32px 0;
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        ">
            <h3 style="margin: 0 0 12px 0; font-size: 20px; color: white; font-weight: 600;">
                Want someone to handle the technical setup for you?
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


## Common Questions

**Q: How long should my CLAUDE.md be?**
A: As short as possible while still being useful. Most good CLAUDE.md files are 50-200 lines. If yours is getting much longer, you might be including too much detail.

**Q: Can I have multiple CLAUDE.md files?**
A: Yes! You can put one in your project root and additional ones in subdirectories. Claude will read the relevant ones as needed.

**Q: What if my CLAUDE.md isn't working?**
A: Make sure the filename is exactly `CLAUDE.md` (all caps for CLAUDE, lowercase for .md). The filename is case-sensitive.

**Q: Should I share my CLAUDE.md with my team?**
A: Absolutely! Check it into source control (like Git) so your whole team benefits from the same instructions.

**Q: Can I use this for other AI coding tools?**
A: Yes! The same concepts apply to other tools - just save it as `AGENTS.md` instead for tools like Cursor or Zed.

## Nas' Note: Your AI Assistant is Only as Good as Your Instructions

The founders who get the most out of Claude Code aren't the most technical ones - they're the ones who take 10 minutes to write a solid CLAUDE.md file. It's the highest-ROI thing you can do for your AI workflow.

Whether you're [building a landing page with v0](/blog/how-to-build-website-with-v0) or [launching an e-commerce product](/blog/10-steps-to-launch-an-ecommerce-product), a good CLAUDE.md means Claude works the way *you* work from day one.

Start with `/init`. Add three things Claude keeps getting wrong. Save. That's it.


---

**Liked what you just saw?** Follow me on <a href="https://www.youtube.com/@sellingwithnas" target="_blank" rel="noopener noreferrer">Youtube</a> or connect on <a href="https://www.linkedin.com/in/nasser-mansurali-659145102/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more insights on growing your business online.
