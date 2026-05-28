# SaaS Founder's Claude Code Skill Pack

**30 items. $14. One-time purchase. Lifetime access.**

A battle-tested collection of Claude Code custom slash commands, shell scripts, and strategy prompts built specifically for solo SaaS founders. Drop these into your Claude Code setup and ship faster, research smarter, and stop reinventing the wheel every week.

---

## What's Inside

| Category | Count | What You Get |
|----------|-------|--------------|
| ⌨️ **Claude Code Commands** | 10 | Custom slash commands — competitor research, landing page copy, SEO audits, changelogs, cold emails, pricing calculators, bug debugging, weekly reviews, and more |
| ⚡ **Shell Scripts** | 5 | Automation scripts — competitor monitoring, social post generation, .env backups, health checks, customer exports |
| 🧠 **Strategy Prompts** | 15 | Deep-thinking frameworks — idea validation, churn analysis, content calendars, pricing teardowns, onboarding audits, ROI calculators, exit strategy planning |

---

## Free Samples — 3 Commands You Can Use Right Now

Below are 3 commands from the pack, shared in full. Save each as `.claude/commands/<name>.md` and run them with `/command-name` in Claude Code. No catch — these work immediately.

### 1. `/research-competitor` — Analyze Any Competitor in 60 Seconds

Drop it at `.claude/commands/research-competitor.md`:

```markdown
Go to [COMPETITOR_URL] and extract the following structured intelligence:

### 1. Positioning
- Their one-line value proposition (the hero headline)
- What problem do they claim to solve?
- Who is their obvious target audience?

### 2. Pricing
- List every plan with price and billing cycle (monthly/annual).
- What is the free tier or trial offering?
- What is the "anchor" plan they want you to pick? (usually highlighted)
- Hidden costs or add-ons beyond the listed prices.

### 3. Features
- Core features table (what they include per plan).
- Any feature they brag about that others don't have.
- Missing features you'd expect but they don't have (gaps = your opportunities).

### 4. Social Proof
- Logos they display, testimonials, case studies, star ratings.
- Any specific numbers they cite (customers, revenue, uptime, etc).

### 5. Calls-to-Action
- Primary CTA (the big button): what does it say and where does it go?
- Secondary CTAs: are there multiple paths (demo, trial, pricing)?

### 6. Weaknesses & Opportunities
- Confusing pricing, friction in signup, slow page load, missing integrations.
- What can YOU do better based on this analysis?

Output as a structured report with an executive summary at the top (3 bullet takeaways).
```

### 2. `/audit-seo` — Quick SEO Audit for Any Page

Drop it at `.claude/commands/audit-seo.md`:

```markdown
Audit the SEO health of [PAGE_URL]. Fetch the page and run through this checklist:

### 1. On-Page Basics
- **Title tag**: Is it present? Length (should be 50-60 chars)? Does it include the primary keyword near the front?
- **Meta description**: Present? Length (should be 120-155 chars)? Compelling and includes keyword?
- **H1**: Exactly one H1? Does it match user search intent? Contains primary keyword?
- **H2/H3 structure**: Logical hierarchy? Not skipping levels?

### 2. Content Quality
- **Word count**: If under 300 words, flag as thin content.
- **Keyword usage**: Is the primary keyword in the first 100 words? In an H2? In the URL?
- **Internal links**: Count them. Are there at least 2-3 linking to other relevant pages?
- **External links**: Any? To authoritative sources?

### 3. Technical
- **URL structure**: Clean and readable? Contains keyword? No unnecessary parameters?
- **Canonical tag**: Present and self-referencing?
- **Open Graph tags**: og:title, og:description, og:image present?
- **Schema markup**: Any structured data present? (Article, Product, FAQ, etc.)

### 4. Performance
- Approximate page size based on fetched resources.
- Flag if you detect heavy third-party scripts.

### 5. Competitor Gap Check
- Identify the primary keyword from the page content.
- Suggest 3 related long-tail questions this page could also target.

Output as a table: **Check** | **Status (Pass/Fail/Warning)** | **Fix**.
Followed by a prioritized action list: **Fix Now**, **Fix This Week**, **Nice to Have**.
```

### 3. `/weekly-review` — Structured Founder Review Every Friday

Drop it at `.claude/commands/weekly-review.md`:

```markdown
Run a weekly founder review with me. Ask these questions one section at a time, wait for my answer before moving to the next section.

### Section 1: Metrics (the numbers that matter)
1. MRR: What's your current monthly recurring revenue? Up or down from last week?
2. Active users: Weekly active users (WAU)? Trend?
3. Churn: How many customers canceled this week? Why?
4. New trials/signups: How many new signups or trial starts?
5. One number that worries you: What metric makes you uncomfortable right now?

### Section 2: Wins
1. What went well this week? (personal, product, or business)
2. What's one thing you shipped?
3. What positive customer signal did you get? (email, review, referral, renewal)

### Section 3: Blockers & Bottlenecks
1. What's stuck? (technical, legal, dependency on someone else)
2. What decision are you avoiding?
3. What costs too much time for the value?

### Section 4: Next Week's ONE Thing
1. If next week you could only accomplish ONE thing, what should it be?
2. What's the first concrete action on Monday morning to move that forward?

### Section 5: Reflection
1. What did you believe 3 months ago that you no longer believe?
2. What's one process that broke down this week?
3. On a scale of 1-10, how's your founder energy?

After the review, compile my answers into a structured weekly memo with a metrics table, 3 wins, 3 blockers, next week's focus, and a founder's note.
```

---

## Get the Full Pack

The full pack has **7 more commands**, **5 shell scripts**, and **all 15 strategy prompts** — everything in the table above.

**Price: $14** — one-time payment, lifetime access, free updates.

Currently collecting interest — drop your email and we'll let you know as soon as the listing goes live. [Email hello@selfloom.ai](mailto:hello@selfloom.ai?subject=SaaS%20Claude%20Pack%20Interest) with subject "SaaS Claude Pack Interest".

---

## FAQ

**How do I install Claude Code commands?**
Save any `.md` file to your project's `.claude/commands/` directory. Restart Claude Code (or switch projects) and the command appears as `/command-name`.

**What if these don't save me time?**
If the full pack doesn't save you at least 2 hours of work, email for a full refund — no questions asked.

**Is this only for SaaS founders?**
The commands work for any solo developer shipping web products. If you build and ship software alone or in a tiny team, these apply.

**Do you offer team licenses?**
Not yet — but email us and we'll figure something out.

---

Built by [Selfloom](https://selfloom.ai). Not affiliated with Anthropic.
