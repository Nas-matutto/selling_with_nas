// ─────────────────────────────────────────────────────────────
// Learn AI 101 - all content, plus the progress state helpers.
//
// The content arrays are imported ONLY from .astro frontmatter, so answer keys
// get server-rendered into data-* attributes and never reach the client bundle.
// The state helpers at the bottom ARE imported by module scripts; Vite
// tree-shakes the (side-effect-free) content consts out of that chunk.
// ─────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════
// LESSON A - "The 60-second version"
// ═══════════════════════════════════════════════════════════

export interface Lesson {
  n: string;
  title: string;
  body: string;
}

export const lessonsA: Lesson[] = [
  {
    n: '01',
    title: "It's autocomplete with a library card",
    body: "When you ask an AI something, it isn't looking up an answer. It's predicting what text should come next, one chunk at a time, based on patterns it absorbed from an enormous amount of writing. That's it. That one sentence explains about 90% of everything weird you've seen AI do - and once you've got it, the rest of this page is easy.",
  },
  {
    n: '02',
    title: 'Which is why it can be confidently wrong',
    body: "It has no idea whether it's right. It's producing the most plausible-looking next words, and plausible-looking is not the same as true. So when it invents a statistic or a source, that isn't a glitch they'll patch out - it's what prediction looks like when the pattern runs out and there's nothing solid underneath. Fluent does not mean correct.",
  },
  {
    n: '03',
    title: 'And why your wording changes everything',
    body: 'If the output depends on patterns in your input, then your input is the steering wheel. Same model, same question, wildly different answers depending on how you frame it. Most people who think AI is underwhelming are writing three-word questions. The people getting remarkable results are writing briefs.',
  },
];

// ═══════════════════════════════════════════════════════════
// MODULE 1 - Jargon Decoder
// ═══════════════════════════════════════════════════════════

export interface Term {
  id: string;
  term: string;
  plain: string;
  /** The "why you care" line - what changes for them once they know this. */
  why: string;
}

export const terms: Term[] = [
  {
    id: 'model',
    term: 'Model',
    plain:
      'The trained thing itself - the actual pattern-matcher you are talking to. Claude, GPT and Gemini are models (families of them, really).',
    why: 'Different models are genuinely better at different jobs. "AI" is not one product you either have or you do not.',
  },
  {
    id: 'llm',
    term: 'LLM',
    plain:
      'Large Language Model. A model trained on an enormous amount of text to predict what comes next. The thing behind every AI chat you have used.',
    why: 'It means the tool is fundamentally about language. Which is why describing what you want clearly is the whole skill.',
  },
  {
    id: 'token',
    term: 'Token',
    plain:
      'A chunk of text - very roughly four characters, or about three quarters of a word. Models read and write in tokens, not letters.',
    why: 'Tokens are the unit everything is priced and limited in. When you hear "128k context", that is tokens, not words.',
  },
  {
    id: 'context-window',
    term: 'Context window',
    plain:
      'How much text the model can hold in view at once - your conversation, the files you pasted, its own replies, all of it.',
    why: 'This is why a very long chat starts getting vague. You have not broken it. You have filled it up. Start a fresh thread.',
  },
  {
    id: 'prompt',
    term: 'Prompt',
    plain:
      'Everything you send it. Not just your question - the context, the examples, the constraints, the format you asked for.',
    why: 'Treating the prompt as a brief rather than a question is the single biggest upgrade available to you today.',
  },
  {
    id: 'system-prompt',
    term: 'System prompt',
    plain:
      'Standing instructions that apply to the whole conversation, set before you start typing - who it should be, what rules to follow.',
    why: 'It is how you stop repeating yourself. Set the role and the rules once instead of re-explaining in every message.',
  },
  {
    id: 'hallucination',
    term: 'Hallucination',
    plain:
      'When the model states something false with complete confidence - an invented statistic, a source that does not exist, a function that was never in the library.',
    why: 'Expect it, specifically around facts, numbers and citations. This is the one habit that separates people who trust AI output badly from people who use it well.',
  },
  {
    id: 'cutoff',
    term: 'Training cut-off',
    plain:
      'The date its training data stops. Anything after that, it simply has not seen - unless you give it search or paste it in yourself.',
    why: 'It is why asking "what is the latest version of X?" can get a confident, outdated answer. Give it the current information instead of trusting its memory.',
  },
  {
    id: 'agent',
    term: 'Agent',
    plain:
      'An AI that can actually do things - read and write files, run commands, search the web, call other tools - not just produce text back at you.',
    why: 'This is the jump from "it wrote me some code" to "it built the thing and put it online." It is where the real leverage is.',
  },
  {
    id: 'rag',
    term: 'RAG',
    plain:
      'Retrieval-Augmented Generation. A fancy name for a simple trick: find the relevant documents first, then hand them to the model along with the question.',
    why: 'It is how you get answers grounded in YOUR documents - your notes, your policies, your product - rather than the internet in general.',
  },
];

// ═══════════════════════════════════════════════════════════
// LESSON B - the five levers of a prompt that works
// ═══════════════════════════════════════════════════════════

export interface Lever {
  id: string;
  name: string;
  what: string;
  example: string;
}

export const levers: Lever[] = [
  {
    id: 'role',
    name: 'Role',
    what: 'Tell it who to be. This quietly sets vocabulary, assumptions and depth.',
    example: 'You are a conversion copywriter who writes for small e-commerce brands.',
  },
  {
    id: 'task',
    name: 'Task',
    what: 'One concrete job, stated plainly. Not a topic - an instruction.',
    example: 'Write three product description options for the item below.',
  },
  {
    id: 'context',
    name: 'Context',
    what: 'Everything it cannot possibly know. This is the lever most people skip entirely.',
    example: 'The product is a £40 refillable candle. Buyers are 30-45, care about waste, and have never heard of us.',
  },
  {
    id: 'constraints',
    name: 'Constraints',
    what: 'The boundaries. Length, tone, what to avoid, what must appear.',
    example: 'Under 60 words each. No exclamation marks, no "elevate", no "unleash". Mention the refill once.',
  },
  {
    id: 'format',
    name: 'Format',
    what: 'The exact shape you want back, so you can use it without reformatting.',
    example: 'Return a numbered list. After each option, one line on who it is aimed at.',
  },
];

// ═══════════════════════════════════════════════════════════
// MODULE 2 - Prompt Lab
// ═══════════════════════════════════════════════════════════

export interface PromptOption {
  id: string;
  text: string;
  /** Why this one is or is not the strongest. Shown after they pick. */
  verdict: string;
}

export interface PromptScenario {
  id: string;
  job: string;
  weak: string;
  options: PromptOption[];
  correct: string;
  /** The transferable principle, named. */
  principle: string;
}

export const promptScenarios: PromptScenario[] = [
  {
    id: 'product',
    job: 'You need a product description for your online shop.',
    weak: 'Write a product description for my candle.',
    correct: 'c',
    principle:
      'Context is the lever nobody pulls. The model cannot guess your price point, your buyer or your brand - and without them it defaults to generic marketing sludge.',
    options: [
      {
        id: 'a',
        text: 'Write a really good, engaging, high-converting product description for my candle. Make it amazing.',
        verdict:
          'Adjectives are not instructions. "Amazing" and "high-converting" tell it nothing it can act on - it already tries to be good. You have added words without adding information.',
      },
      {
        id: 'b',
        text: 'Write a 50-word product description for my candle. Professional tone. Return it as a single paragraph.',
        verdict:
          'Better - real constraints and a format. But it still has no idea what the candle is, what it costs, or who is buying it, so the words will be true of any candle on earth.',
      },
      {
        id: 'c',
        text: 'You write copy for small home-goods brands. Write a 50-word description for a £40 refillable soy candle. Buyers are 30-45, care about waste, have never heard of us. Warm, plain language - no "elevate" or "indulge". One paragraph.',
        verdict:
          'This is the one. Role, task, context, constraints and format all present - and crucially it says what to avoid, which is how you dodge the AI-copy smell.',
      },
    ],
  },
  {
    id: 'bug',
    job: 'Something in your code is broken and you want help.',
    weak: 'My code does not work, can you fix it?',
    correct: 'b',
    principle:
      'Give it the evidence, not your diagnosis. Paste the actual error and the actual code - the moment you summarise, you have already filtered out the thing that was wrong.',
    options: [
      {
        id: 'a',
        text: 'My login page is broken. I think it is something to do with the database connection. How do I fix database connection issues?',
        verdict:
          'You have handed it your guess instead of your problem. If the diagnosis is wrong - and it often is - you get a confident, detailed answer to the wrong question.',
      },
      {
        id: 'b',
        text: 'My login form returns a 500. Here is the exact error, the route handler, and what I expected to happen instead. Walk me through what is causing it before changing anything.',
        verdict:
          'Correct. Real error, real code, stated expectation - and "before changing anything" stops it rewriting half your file to fix one line.',
      },
      {
        id: 'c',
        text: 'Here is my entire project. Find every bug and fix all of them.',
        verdict:
          'Too broad to be useful. With no specific failure to anchor on it will make speculative changes across files, and you will not be able to tell what actually fixed anything.',
      },
    ],
  },
  {
    id: 'summary',
    job: 'You have a 40-page report and 10 minutes.',
    weak: 'Summarise this.',
    correct: 'c',
    principle:
      'Say what the summary is FOR. "Summarise" has no target; a summary for a decision looks nothing like a summary for a newsletter.',
    options: [
      {
        id: 'a',
        text: 'Summarise this document in 200 words.',
        verdict:
          'A length is not a purpose. You will get a competent, shapeless overview that weights the boring middle exactly the same as the part you needed.',
      },
      {
        id: 'b',
        text: 'Summarise this and tell me the most important points.',
        verdict:
          'Important to whom, for what? You have handed the model the actual decision - what matters - and it will guess.',
      },
      {
        id: 'c',
        text: 'I decide tomorrow whether to keep funding this project. Pull out only what bears on that: results against target, costs, and risks. Five bullets, then one line on what you would do. Say explicitly if something I would need is missing.',
        verdict:
          'Right. A named decision, a filter for relevance, a usable format - and asking it to flag gaps, which turns an invented answer into an honest "the report does not say".',
      },
    ],
  },
  {
    id: 'email',
    job: 'You are writing a cold email to a potential client.',
    weak: 'Write me a cold email to sell my services.',
    correct: 'a',
    principle:
      'One worked example beats three paragraphs of description. Show it something you liked and it will match the register far more accurately than any adjective you can supply.',
    options: [
      {
        id: 'a',
        text: 'Here is a cold email I received and actually replied to - match this register. I sell X to Y. The recipient is Z, and here is the specific thing about their business I noticed. Under 90 words, no "hope you are well", end with one easy question.',
        verdict:
          'This is the strongest. The example does the work that describing a tone never quite manages, and a specific observation about the recipient is what makes it not-spam.',
      },
      {
        id: 'b',
        text: 'Write a friendly, professional, persuasive cold email. Make it personal and not salesy.',
        verdict:
          'Every one of those words is a wish, not an instruction. "Personal" with no information to be personal about produces the exact fake warmth you were trying to avoid.',
      },
      {
        id: 'c',
        text: 'Write five cold email templates I can send to anyone in any industry.',
        verdict:
          'Optimising for the wrong thing. A template that works for anyone reads like it was written for no one - which is precisely why most cold email gets deleted.',
      },
    ],
  },
  {
    id: 'website',
    job: 'You want a landing page for the thing you are building.',
    weak: 'Build me a website.',
    correct: 'b',
    principle:
      'Name the outcome, not the artefact - and say where it has to end up. "A website" is a wish; "one page that gets me emails, live on my domain" is a spec you can hold it to.',
    options: [
      {
        id: 'a',
        text: 'Build me a modern, beautiful, professional website with all the standard pages.',
        verdict:
          'Nothing here is checkable. "Modern" and "standard pages" mean whatever it decides, and you will spend longer correcting its guesses than you would have spent specifying.',
      },
      {
        id: 'b',
        text: 'Build a one-page site whose only job is collecting emails from freelance designers. Sections: headline, three benefits, email form, FAQ. Mobile first, loads fast, no frameworks I would have to learn. Then walk me through putting it live on my own domain.',
        verdict:
          'Correct - and notice the last sentence. One job, one audience, a named structure, real constraints, and the deploy step included rather than assumed. That final clause is the difference between a folder on your laptop and something people can actually visit.',
      },
      {
        id: 'c',
        text: 'Build me a website like Stripe but for my business.',
        verdict:
          'A reference is useful but it is not a brief. You will get something that borrows the look and answers none of the questions - who it is for, what it should make happen.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// MODULE 3 - Spot the AI Mistake
// ═══════════════════════════════════════════════════════════

export type Verdict = 'trust' | 'verify' | 'wrong';

export interface MistakeItem {
  id: string;
  question: string;
  answer: string;
  correct: Verdict;
  explain: string;
}

export const VERDICTS: { id: Verdict; label: string; hint: string }[] = [
  { id: 'trust', label: 'Trust it', hint: 'Safe to use as-is' },
  { id: 'verify', label: 'Verify first', hint: 'Probably fine, but check' },
  { id: 'wrong', label: "It's wrong", hint: 'Something here is false' },
];

export const mistakes: MistakeItem[] = [
  {
    id: 'stat',
    question: 'How many small businesses fail in their first year?',
    answer:
      'According to a 2023 Harvard Business Review study, 47.3% of small businesses fail within their first twelve months, with undercapitalisation cited as the primary factor in 61% of cases.',
    correct: 'wrong',
    explain:
      'Look at how specific it is - 47.3%, 61%, a named journal, a year. That precision is the tell, not the reassurance. Real small-business failure rates in the first year are far lower (roughly 20%), and that HBR study does not exist. Invented numbers arrive with invented sources attached, because both are just plausible-looking text.',
  },
  {
    id: 'maths',
    question: 'I sell at £45 and each unit costs me £18. How many do I need to sell to make £3,000 profit?',
    answer:
      'Your profit per unit is £45 − £18 = £27. To reach £3,000 in profit you would need to sell about 90 units, which works out to £4,050 in total revenue.',
    correct: 'wrong',
    explain:
      'The first step is right - £27 profit per unit. Then: £3,000 ÷ £27 is 111, not 90. And notice how the error travels. The £4,050 revenue figure is perfectly consistent with 90 units, so the answer stays internally tidy while being wrong by a fifth. This is what bad AI arithmetic looks like - not obviously broken, just quietly off, with every later number agreeing with the mistake. Check the steps, not the confidence.',
  },
  {
    id: 'outdated',
    question: 'What is the best way to deploy a small site for free?',
    answer:
      'Heroku has a generous free tier that is ideal for small projects - you can deploy straight from GitHub at no cost, which makes it the standard choice for side projects.',
    correct: 'wrong',
    explain:
      'This was solid advice for years, which is exactly why it is dangerous. Heroku removed its free tier in late 2022. The model is not lying - it is repeating a pattern that used to be true. Anything about pricing, versions or what a tool currently offers sits right on the training cut-off and needs checking against the actual site.',
  },
  {
    id: 'citation',
    question: 'Can you point me to the documentation for this?',
    answer:
      'Yes - the official guide covers this in detail at https://docs.example.dev/v4/guides/deployment-best-practices, under "Configuring custom domains".',
    correct: 'verify',
    explain:
      'This is the honest answer: you cannot tell. URLs are text, and text is what it predicts - that link has the exact shape a real documentation URL has, with a version number, a sensible path and a plausible section name. It might be perfect. It might lead nowhere. The only way to know is to open it, and that is the whole point: the right move here is not suspicion, it is one click of verification before you pass the link on to anyone.',
  },
  {
    id: 'good',
    question:
      'Can you make this sentence clearer? "We are currently in the process of undertaking a review of our pricing structure."',
    answer:
      '"We are reviewing our pricing." Everything else in the original was padding - "currently", "in the process of undertaking" and "structure" all restate the verb or add nothing.',
    correct: 'trust',
    explain:
      'Nothing to check here, and that matters. This is judgement about language, with the evidence sitting in front of you - the kind of work where the model is genuinely excellent and verification is just reading it. Rewriting, restructuring, tightening, naming things: let it run. The habit is knowing which bucket you are in, not being suspicious of everything.',
  },
];

// ═══════════════════════════════════════════════════════════
// MODULE 4 - the 8-question literacy check
// ═══════════════════════════════════════════════════════════

export interface QuizChoice {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  q: string;
  choices: QuizChoice[];
  correct: string;
  explain: string;
}

export const quiz: QuizQuestion[] = [
  {
    id: 'q1',
    q: 'When an AI answers your question, what is it fundamentally doing?',
    correct: 'b',
    choices: [
      { id: 'a', text: 'Searching a database of verified facts' },
      { id: 'b', text: 'Predicting what text should come next, chunk by chunk' },
      { id: 'c', text: 'Following rules a team of engineers wrote for that topic' },
    ],
    explain:
      'Prediction, all the way down. There is no fact table underneath and no rulebook for your specific question - just an extremely good sense of what text tends to follow what. Hold onto this and the rest of AI behaviour stops being mysterious.',
  },
  {
    id: 'q2',
    q: 'So why does it sometimes state things that are simply false?',
    correct: 'c',
    choices: [
      { id: 'a', text: 'Its training data contained that specific false claim' },
      { id: 'b', text: 'It is guessing when it does not have enough computing power' },
      { id: 'c', text: 'Plausible-sounding text is what it optimises for - and plausible is not true' },
    ],
    explain:
      'It is not repeating a lie it read, and it is not short of resources. It is completing a pattern. When the pattern runs out, it produces something shaped exactly like an answer, because that is the job. Fluency and accuracy are separate things, and only one of them is being optimised.',
  },
  {
    id: 'q3',
    q: 'Which of these will get you a better result?',
    correct: 'b',
    choices: [
      { id: 'a', text: '"Write a really good, engaging, professional blog post about productivity."' },
      {
        id: 'b',
        text: '"You write for freelance designers. Draft a 600-word post on why their morning routine is not the problem - their client intake is. Plain language, one concrete example, no listicles."',
      },
      { id: 'c', text: 'No real difference - the model is smart enough to work out what you meant' },
    ],
    explain:
      'The second one, and not because it is longer. It carries a role, an audience, an actual argument, a length and things to avoid. The first is made of adjectives, and adjectives are wishes - it was already trying to be good and engaging.',
  },
  {
    id: 'q4',
    q: 'What is the real difference between a chatbot and an agent?',
    correct: 'a',
    choices: [
      {
        id: 'a',
        text: 'An agent can take actions - read and write files, run commands, use tools - not just produce text',
      },
      { id: 'b', text: 'An agent uses a bigger, more expensive model' },
      { id: 'c', text: 'An agent remembers your previous conversations' },
    ],
    explain:
      'Actions, not size or memory. A chatbot hands you text and you do the work. An agent can create the file, run the command, and put the thing online. That gap is where "AI helped me" becomes "AI built it" - and it is the rung of the ladder most people have never actually stepped onto.',
  },
  {
    id: 'q5',
    q: 'Do you need to know how to code to build something real with AI today?',
    correct: 'c',
    choices: [
      { id: 'a', text: 'Yes - AI writes code, but you need to understand it to make anything work' },
      { id: 'b', text: 'No, and you do not need to understand anything at all' },
      { id: 'c', text: 'No - but you do need to steer it clearly and know what "done" looks like' },
    ],
    explain:
      'Not a single line. But it is not magic either - the people who get real results are the ones who can say precisely what they want, notice when it has gone sideways, and keep pushing until the thing actually works. That is a skill, and it is much closer to writing a good brief than to programming.',
  },
  {
    id: 'q6',
    q: 'Which of these should you always verify before using it?',
    correct: 'b',
    choices: [
      { id: 'a', text: 'A tightened-up rewrite of your own bio' },
      { id: 'b', text: 'A statistic with a cited source' },
      { id: 'c', text: 'Ten suggested titles for your blog post' },
    ],
    explain:
      'The statistic - and the citation makes it more dangerous, not less, because a made-up number arrives with a made-up source attached. The rewrite and the titles you can judge by reading them. Facts, numbers and citations are the bucket that needs checking; language and structure are the bucket where it shines.',
  },
  {
    id: 'q7',
    q: 'You have built a website with AI and it works on your laptop. What is left to do?',
    correct: 'c',
    choices: [
      { id: 'a', text: 'Nothing - it is built, so it is done' },
      { id: 'b', text: 'Send people the localhost link' },
      { id: 'c', text: 'Deploy it - put the files on a server and point a domain at them, so anyone can visit' },
    ],
    explain:
      'Building and deploying are two different jobs, and almost every tutorial stops after the first one. Until it is deployed, it exists in a folder on your machine - localhost:3000 is your computer talking to itself, and nobody else on earth can open it. This is the gap where most AI-built projects quietly die.',
  },
  {
    id: 'q8',
    q: 'What is genuinely the fastest way to get good at this?',
    correct: 'a',
    choices: [
      { id: 'a', text: 'Build one small real thing, end to end, until it is live' },
      { id: 'b', text: 'Work through a long course before touching anything' },
      { id: 'c', text: 'Keep up with every new model and tool as it launches' },
    ],
    explain:
      'One small thing, all the way finished. You learn more from a single project that actually goes live than from thirty hours of tutorials, because finishing forces you through every part you would otherwise skip. Chasing launches feels productive and teaches you almost nothing.',
  },
];

// ═══════════════════════════════════════════════════════════
// Result tiers + recap
// ═══════════════════════════════════════════════════════════

export interface Tier {
  id: string;
  min: number;
  badge: string;
  headline: string;
  body: string;
}

/** Ordered high to low - first match wins. Every tier is warm; nobody is punished. */
export const tiers: Tier[] = [
  {
    id: 'ready',
    min: 7,
    badge: 'AI Ready',
    headline: 'You are not a beginner any more.',
    body: 'You understand what the model is doing, why it goes wrong, and how to steer it. Genuinely - that puts you ahead of most people talking confidently about AI online. So the thing standing between you and something real is not knowledge any more. It is that you have not built anything with it yet.',
  },
  {
    id: 'fluent',
    min: 5,
    badge: 'Getting Fluent',
    headline: 'You have got the model right.',
    body: 'The mental model is there - you know it is predicting rather than looking up, and you know where to be careful. The gaps you have left are the kind that close by doing, not by reading. You just have not pointed any of this at something real yet.',
  },
  {
    id: 'start',
    min: 0,
    badge: 'Solid Start',
    headline: 'Perfect. Now you know exactly what you did not know.',
    body: 'That is worth more than a high score, and I mean that. An hour ago some of this was invisible to you; now you can name it. Scroll back through the explanations you got wrong - they are the whole point of this page - and then come back and try again. Nothing here expires.',
  },
];

/** Shown on the result screen as "here is what you now know". */
export const recap: string[] = [
  'An AI predicts text - it does not look up facts. That one idea explains nearly everything it does.',
  'Confident and correct are different things. Facts, numbers and citations always get checked.',
  'A prompt is a brief, not a question: role, task, context, constraints, format.',
  'Context is the lever almost nobody pulls. Give it what it cannot possibly know.',
  'An agent does things. That is the difference between advice and a finished website.',
];

// ═══════════════════════════════════════════════════════════
// FAQ - about the page, not the product
// ═══════════════════════════════════════════════════════════

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Is this actually free?',
    a: 'Yes, all of it. No account, no email required, no trial. I wrote it because most "learn AI" content is either a sales pitch in disguise or so abstract you cannot do anything with it afterwards. If you finish and feel like building something with me, there is a paid pack - but you owe me nothing for this.',
  },
  {
    q: 'Do I need to sign up or install anything?',
    a: 'No. Everything runs in this page, in your browser. Your progress is saved on your own device so you can close the tab and come back - it never leaves your machine unless you choose to email yourself your results at the end.',
  },
  {
    q: 'How long does it take?',
    a: 'About 15-20 minutes for all four modules, and you do not have to do them in order or all in one sitting. Finishing any single one already earns you the discount.',
  },
  {
    q: 'I scored badly. Am I too late to learn this?',
    a: 'Not even slightly, and a low score is genuinely not a problem - most of the value here is in the explanations, not the number. Everyone confident about AI today was clueless about it recently; the field is about three years old in its current form. You are not behind, you are early. And the discount does not depend on your score.',
  },
  {
    q: 'What is the $97 thing you keep mentioning?',
    a: 'A two-guide pack that takes you from nothing to a real website, live on your own domain, plus a 1-on-1 call with me for when you get stuck. It is the practical follow-on from this page: you now understand AI, that teaches you to ship something with it. Finishing a module here takes $20 off.',
  },
];

// ═══════════════════════════════════════════════════════════
// PROGRESS STATE
//
// Imported by the module scripts. Every localStorage touch is try/catch-wrapped
// and fails open, matching EmailGate.astro and BasicScripts.astro - in a Safari
// private window storage throws, and the page must still work for the session.
// ═══════════════════════════════════════════════════════════

export const L101_KEY = 'nas_ai101_v1';
/** Read by ai-masterclass-with-nas.astro. Kept separate from the progress blob
 *  so the cross-page contract does not depend on this file's shape. */
export const L101_REWARD_KEY = 'nas_ai101_reward';

export const MODULE_IDS = ['jargon', 'prompts', 'mistakes', 'quiz'] as const;
export type ModuleId = (typeof MODULE_IDS)[number];

export interface ModuleState {
  done: boolean;
  score: number;
  total: number;
  /** itemId -> chosen option id. Drives resume. */
  answers: Record<string, string>;
}

export interface L101State {
  v: 1;
  modules: Record<ModuleId, ModuleState>;
  /** True once ANY module is finished - the discount is unlocked. */
  unlocked: boolean;
  /** Whether the celebratory unlock card has already been shown once. */
  rewardShown: boolean;
  /** Which module's card owns the celebration, so it keeps it when others
   *  complete later and the user scrolls back up. */
  rewardShownFor?: ModuleId;
  emailed: boolean;
}

export function blankState(): L101State {
  return {
    v: 1,
    modules: Object.fromEntries(MODULE_IDS.map((m) => [m, { done: false, score: 0, total: 0, answers: {} }])) as Record<
      ModuleId,
      ModuleState
    >,
    unlocked: false,
    rewardShown: false,
    emailed: false,
  };
}

export function loadState(): L101State {
  const base = blankState();
  try {
    const raw = localStorage.getItem(L101_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw) as Partial<L101State>;
    // A schema bump means a clean slate rather than a half-migrated mess.
    if (parsed?.v !== 1) return base;
    return {
      ...base,
      ...parsed,
      modules: { ...base.modules, ...(parsed.modules ?? {}) },
    };
  } catch {
    return base;
  }
}

export function saveState(state: L101State): void {
  try {
    localStorage.setItem(L101_KEY, JSON.stringify(state));
    // Mirror the unlock into its own key for the masterclass page.
    if (state.unlocked) localStorage.setItem(L101_REWARD_KEY, '1');
  } catch {
    /* private mode - this session still works, it just will not resume */
  }
}

/**
 * Read-modify-write one module's slice. Each module is the only writer of its
 * own slice, so there is no race even though several scripts share the key.
 */
export function patchModule(id: ModuleId, patch: Partial<ModuleState>): L101State {
  const state = loadState();
  const prev = state.modules[id];
  const next: ModuleState = { ...prev, ...patch };

  // Completion is monotonic. The jargon cards are toggles and the quiz has a
  // retake button, so `done` can legitimately be recomputed as false - but
  // un-revealing a card must never empty the progress rail, and retaking the
  // quiz must never take the discount back off someone.
  next.done = prev.done || next.done;

  state.modules[id] = next;
  state.unlocked = state.unlocked || MODULE_IDS.some((m) => state.modules[m].done);
  saveState(state);
  return state;
}

/** Records that they used the email form, so it is not offered again on return. */
export function markEmailed(): void {
  const state = loadState();
  state.emailed = true;
  saveState(state);
}

export function doneCount(state: L101State): number {
  return MODULE_IDS.filter((m) => state.modules[m].done).length;
}

export function resetState(): void {
  try {
    localStorage.removeItem(L101_KEY);
    localStorage.removeItem(L101_REWARD_KEY);
  } catch {
    /* nothing to clear */
  }
}

export function tierFor(score: number): Tier {
  return tiers.find((t) => score >= t.min) ?? tiers[tiers.length - 1];
}
