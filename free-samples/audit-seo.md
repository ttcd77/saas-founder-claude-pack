# audit-seo
# Use when: you need a quick SEO audit of a specific page on your SaaS site.
# Provide the URL of the page to audit.

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

### 4. Performance (estimate from page content, note where tools needed)
- Approximate page size based on fetched resources.
- Flag if you detect heavy third-party scripts.

### 5. Competitor Gap Check
- Identify the primary keyword from the page content.
- Suggest 3 related long-tail questions this page could also target (based on common "People Also Ask" patterns).

### Output Format
A table with columns: **Check** | **Status (Pass/Fail/Warning)** | **Fix**. Followed by a prioritized action list: **Fix Now**, **Fix This Week**, **Nice to Have**.
