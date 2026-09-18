---
publishDate: 2026-09-18T00:00:00Z
author: Nas
title: "How to Deploy a Claude Code Project to a Live Domain (Step-by-Step)"
excerpt: Claude Code can build you a beautiful website in an afternoon, but it still lives on your laptop. Here's the exact step-by-step process to push it to GitHub, deploy it on Vercel, and connect your own domain so anyone can visit it.
image: ~/assets/images/Domain_connect.png
category: Technology
tags:
  - AI
  - Claude Code
  - web development
metadata:
  canonical: https://www.sellingwithnas.com/how-to-deploy-a-claude-code-project-to-a-live-domain
  title: "How to Deploy a Claude Code Project to a Live Domain with Vercel (2026)"
  description: "A complete step-by-step guide to taking a website built with Claude Code and making it live: push to GitHub, deploy on Vercel, buy a domain, connect your DNS records, and ship updates automatically."
  keywords: "deploy Claude Code project, Claude Code Vercel deploy, connect domain to Vercel, Claude Code website live, push Claude Code to GitHub, Vercel custom domain DNS, Claude Code hosting, deploy AI built website, Vercel A record CNAME, Claude Code to live website"
---


# How to Deploy a Claude Code Project to a Live Domain

[Claude Code](/how-to-use-claude-code-for-beginners) has made building a website almost trivially easy. You describe what you want, it writes the code, and within an hour you're looking at a genuinely good-looking site running on your machine.

Then you hit the wall almost everyone hits: **that site only exists on your laptop.** You can't send the link to a client, you can't share it on LinkedIn, and `localhost:3000` means nothing to anyone but you.

This guide fixes that. I'm going to walk you through the complete process of taking a project Claude Code built and putting it on a real domain that anyone in the world can visit, using GitHub and Vercel, and it costs nothing beyond the price of the domain itself.

Here's what we'll cover:

1. [Step 1: Get Your Project Deploy-Ready](#step-1-get-your-project-deploy-ready)
2. [Step 2: Push Your Code to GitHub](#step-2-push-your-code-to-github)
3. [Step 3: Deploy to Vercel](#step-3-deploy-to-vercel)
4. [Step 4: Buy Your Domain](#step-4-buy-your-domain)
5. [Step 5: Connect the Domain to Vercel](#step-5-connect-the-domain-to-vercel)
6. [Step 6: Wait for DNS and Check Your SSL](#step-6-wait-for-dns-and-check-your-ssl)
7. [Step 7: Ship Updates Automatically](#step-7-ship-updates-automatically)
8. [Troubleshooting: The 5 Things That Usually Go Wrong](#troubleshooting-the-5-things-that-usually-go-wrong)

**Total time: about 20 minutes, plus DNS propagation.**

**Prefer to watch instead?** I walk through this exact process, start to finish, in the video below:

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:16px;margin:32px 0;background:#000;">
  <button type="button" aria-label="Play video: How to connect a Claude Code website to a domain (with Github and Vercel)" onclick="var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/1-T7R8AYY0c?autoplay=1&amp;rel=0';f.title='How to connect a Claude Code website to a domain (with Github and Vercel)';f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';f.allowFullscreen=true;f.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;border:0;';this.replaceWith(f);f.focus();" style="position:absolute;inset:0;width:100%;height:100%;padding:0;margin:0;border:0;display:block;cursor:pointer;background:#000;">
    <img src="/images/claude-code-domain-video.webp" alt="How to connect a Claude Code website to a domain with GitHub and Vercel - video walkthrough" loading="lazy" decoding="async" width="1120" height="630" style="width:100%;height:100%;object-fit:cover;display:block;margin:0;border-radius:0;box-shadow:none;max-width:none;" />
    <span aria-hidden="true" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);filter:drop-shadow(0 2px 6px rgba(0,0,0,0.4));">
      <svg viewBox="0 0 68 48" width="68" height="48" focusable="false"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"></path><path d="M45 24 27 14v20z" fill="#fff"></path></svg>
    </span>
  </button>
</div>


## Step 1: Get Your Project Deploy-Ready

Before your code goes anywhere, spend two minutes making sure it will actually build on someone else's computer. Nearly every failed deployment I've seen traces back to skipping this step.

### Make sure it builds

In your project folder, ask Claude Code directly:

> Run a production build of this project and fix anything that fails.

If the build succeeds locally, it will almost certainly succeed on Vercel. If it fails, Claude will usually fix it on the spot. This one check saves you from the most common beginner experience: deploying, getting a red **Build Failed** screen, and having no idea why.

### Keep your secrets out of the repo

If your project uses API keys (a [Supabase](/how-to-add-signup-form-with-claude-code-and-supabase) connection, Stripe keys, an email service), they're probably sitting in a `.env` file. That file must never be pushed to GitHub.

Ask Claude:

> Check that my .gitignore excludes .env and any other secret files, and list the environment variables this project needs to run.

Keep that list of variables somewhere handy. You'll paste them into Vercel in Step 3.

### Know what you built

You don't need to understand the code, but it helps to know the framework, because Vercel will ask. Just ask Claude "what framework is this project using?" and note the answer (Next.js, Astro, Vite, plain HTML, and so on).


## Step 2: Push Your Code to GitHub

<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> is the storage locker for your code. Vercel watches it, and every time the code there changes, Vercel rebuilds your site automatically. This is what makes updating your live site later as simple as saying "push my changes."

### Create your GitHub account

Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a> and sign up. **Continue with Google** is the fastest route. You don't need a paid plan for any of this.

### Let Claude Code do the git work

This is the part where most guides make you copy six terminal commands. You don't have to. Claude Code can handle the entire thing. In your project folder, ask:

> Initialise a git repository here, commit everything, create a new private GitHub repo called my-project, and push it.

If it's your first time, Claude will walk you through authenticating with GitHub (usually via the `gh` command line tool, which it can install for you). Once that's done, it handles the rest.

If you'd rather do it manually, or you want to understand what's happening underneath, I covered the full manual git workflow in [How to Deploy Your Website with Vercel for Free](/how-to-deploy-website-with-vercel-for-free).

### Confirm it worked

Refresh your GitHub profile. You should see the new repository with all your project files inside it. **Open it and double-check there's no `.env` file listed.** If there is, tell Claude to remove it from the repo and add it to `.gitignore` before going any further.


## Step 3: Deploy to Vercel

<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> is what turns your repository into a real website. The free tier is genuinely free for personal projects and small businesses, and it's what this blog and most of my own projects run on.

### Sign up with GitHub

Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a> and choose **Continue with GitHub**. Signing up this way matters: it means Vercel can see your repositories immediately, with no extra connection step.

### Import your repository

From your Vercel dashboard, click **Add New** then **Project**. You'll see a list of your GitHub repositories. Find the one you just pushed and click **Import**.

Vercel automatically detects your framework and fills in the build settings for you. In almost every case, **leave these exactly as they are.** The defaults are right far more often than not.

### Add your environment variables

If your project needs API keys, expand the **Environment Variables** section before deploying and paste in each name and value from the list you made in Step 1. Miss this and your site will deploy, but anything that talks to a database or payment provider will quietly break.

### Hit Deploy

Click **Deploy** and watch the build log scroll. It usually takes one to three minutes. When it finishes, you'll get a confetti screen and a live URL that looks like `my-project.vercel.app`.

**Your site is now on the internet.** Open that link on your phone to prove it. Everything from here is about replacing that URL with your own domain.


## Step 4: Buy Your Domain

Your `.vercel.app` link works perfectly well, but `yourbusiness.com` is what makes a project look like a real business instead of a weekend experiment.

You have two sensible options:

**Buy it through Vercel.** In your project, go to **Settings** then **Domains**, search for the name you want, and buy it right there. It costs slightly more than the cheapest registrars, but Vercel configures all the DNS for you automatically and you can skip Step 5 entirely. If you value your time over ten dollars, do this.

**Buy it from a registrar like <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer">Namecheap</a>.** Most `.com` domains run around $10-15 per year and first-year deals are common. You'll connect it manually, which is what Step 5 covers.

A few quick rules on choosing the name: get the `.com` if you can, keep it short enough to say out loud, and skip hyphens and numbers. Don't spend three days on this. You can always add a better domain later, since a site can have several pointing at it.


## Step 5: Connect the Domain to Vercel

This is the step people find intimidating, and it's genuinely the only slightly fiddly part. It's really just copying two values from one browser tab into another.

### Add the domain in Vercel

In your Vercel project, go to **Settings** then **Domains**, type in the domain you bought, and click **Add**.

Vercel will now show you a warning that says **Invalid Configuration** along with the exact DNS records it wants you to create. **Leave this tab open.** These values are the whole game.

You'll typically see two records:

| Type | Name | Value |
|------|------|-------|
| A | `@` | an IP address Vercel shows you |
| CNAME | `www` | a `vercel-dns` address Vercel shows you |

**Copy the values Vercel shows you, not the ones you find in a tutorial.** Vercel assigns records per project now, and older guides on the internet still quote IPs and CNAME targets that may not match what your project was given. The values on your screen are the correct ones.

### Add the records at your registrar

Open a second tab and log in to Namecheap (or wherever you bought the domain). Find the DNS settings, usually under **Domain List** then **Manage** then **Advanced DNS**.

Delete any placeholder records the registrar added for you (Namecheap creates a **CNAME Record** for `www` and a **URL Redirect Record** by default, and both will conflict). Then add the records from Vercel:

1. **New Record** then **A Record**. Host: `@`. Value: the IP address from Vercel. TTL: Automatic.
2. **New Record** then **CNAME Record**. Host: `www`. Value: the `vercel-dns` address from Vercel. TTL: Automatic.

Save, and you're done. That's the entire connection.

![Connecting a custom domain to a Vercel project through your DNS settings](~/assets/images/Domain_connect.png)


## Step 6: Wait for DNS and Check Your SSL

DNS changes have to spread across the internet, which is the one part of this process you can't rush.

Usually it takes 10 to 30 minutes. Occasionally it takes a few hours, and the official worst case is 48. Go back to the **Domains** tab in Vercel and refresh it every so often. When it's ready, **Invalid Configuration** turns into a green **Valid Configuration**.

Two things happen automatically once it does:

**Your SSL certificate is issued.** Vercel provisions this for free, which is why your site loads on `https://` with a padlock and no browser warnings. You don't need to buy or configure anything.

**Your `www` and non-`www` versions get linked.** Vercel picks one as primary and redirects the other to it, so `yourbusiness.com` and `www.yourbusiness.com` both land in the right place. You can choose which one is primary in the same Domains settings.

Once it goes green, visit your domain. That's your Claude Code project, live, on your own name, with a valid certificate.


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
                Stuck getting your project live?
            </h3>
            <p style="margin: 0 0 16px 0; color: rgba(255,255,255,0.9); font-size: 15px;">
                I run a hands-on mentorship where we build and deploy your project together, start to finish.
            </p>
            <a href="https://www.sellingwithnas.com/ai-intensive-mentorship" target="_blank" rel="noopener noreferrer" style="
                display: inline-block;
                background: rgba(255,255,255,0.2);
                color: white;
                padding: 10px 24px;
                border-radius: 18px;
                text-decoration: none;
                font-weight: 600;
                border: 2px solid rgba(255,255,255,0.3);
                transition: all 0.3s ease;
            "
            onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)'"
            onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='translateY(0px)'">
                Launch Your Project with Me →
            </a>
</div>


## Step 7: Ship Updates Automatically

Here's the part that makes this whole setup worth it.

Your site is now wired up so that **every change you push to GitHub goes live automatically.** No re-uploading, no re-deploying, no touching Vercel again.

So your day-to-day workflow becomes:

1. Open your project in Claude Code and describe the change you want.
2. Let Claude make it and check it looks right locally.
3. Say: *"commit this and push it to GitHub."*
4. Vercel detects the push, rebuilds, and your live site updates in about a minute.

Two Vercel features worth knowing about as you do this:

**Preview deployments.** Push to any branch that isn't your main one and Vercel builds a separate, private preview URL for it. It's the safest way to try a big redesign without touching your live site. Ask Claude to "create a new branch for this change" and you get one for free.

**Instant rollback.** If a change breaks something, open the **Deployments** tab in Vercel, find the last version that worked, and click **Promote to Production**. Your site reverts in seconds. Knowing this exists makes shipping a lot less stressful.


## Troubleshooting: The 5 Things That Usually Go Wrong

**"Build Failed" on Vercel.** Copy the error from the Vercel build log, paste it straight into Claude Code, and say "this is the error my Vercel build is giving me, fix it." Nine times out of ten it's a missing dependency or a file that only exists on your machine. Fix, push, and Vercel rebuilds automatically.

**The site deployed but pages are blank or broken.** This is usually missing environment variables. Go to **Settings** then **Environment Variables**, check every key from Step 1 is there, then **redeploy** from the Deployments tab. Vercel does not apply new variables to an existing build.

**Domain still says "Invalid Configuration" after an hour.** Almost always a leftover record at the registrar. Go back to your DNS settings and make sure there's no second A record on `@`, and no URL redirect or parking record fighting with the CNAME on `www`. Delete anything you didn't add yourself.

**Your `.env` file ended up on GitHub.** Treat those keys as compromised: rotate them in the service that issued them (Supabase, Stripe, whoever), then ask Claude to remove the file from the repository and add it to `.gitignore`. Deleting the file alone isn't enough, since it stays in the git history.

**Everything works, but only on `www` (or only without it).** Open **Settings** then **Domains** in Vercel and set which version you want as primary. Vercel handles the redirect for the other one.


## Quick Reference: The Full Deployment Checklist

| Step | What To Do | Where |
|------|-----------|-------|
| Build check | Ask Claude to run a production build and fix errors | Claude Code |
| Protect secrets | Confirm `.env` is in `.gitignore` | Claude Code |
| Push code | Ask Claude to commit and push to a new repo | <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a> |
| Deploy | Import the repo, add env variables, hit Deploy | <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a> |
| Buy domain | Buy through Vercel (easiest) or a registrar | <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer">namecheap.com</a> |
| Connect DNS | Copy the A and CNAME records Vercel shows into your registrar | Registrar DNS settings |
| Go live | Wait for green **Valid Configuration**, SSL is automatic | Vercel Domains |
| Update | Push to GitHub, Vercel redeploys itself | Claude Code |


## Nas' Note: Shipping Is a Habit, Not a Skill

The hardest part of this was never technical. Steps 2 through 6 take twenty minutes and you'll never think about them again after the first time.

What actually stops people is that a project on your laptop feels safe. Nobody can judge it. The moment it's on a real domain, it's real, and that's uncomfortable in a way that no tutorial can fix for you.

But an unshipped project is worth exactly zero, no matter how good it looks in your browser. Claude Code removed the excuse of "I can't build it." Vercel and a $12 domain remove the excuse of "I can't launch it." Everything left is just deciding to press deploy.

If you want the full picture of what else goes into a launch, from signups to payments to emails, I broke down my entire stack in [All the Tools You Need to Start a Side Hustle with Claude](/tools-needed-to-start-a-side-hustle-with-claude).


---

**Liked what you just saw?** Follow me on <a href="https://www.youtube.com/@sellingwithnas" target="_blank" rel="noopener noreferrer">Youtube</a> or connect on <a href="https://www.linkedin.com/in/nasser-mansurali-659145102/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more insights on building with AI.
