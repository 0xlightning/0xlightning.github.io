# Experience Section

## Major Improvement Direction

The current experience section should feel:

* Dynamic
* Alive
* Editorial
* Premium

Instead of:

* Basic vertical timeline
* Static years
* Generic cards

## Timeline Structure

### Left Side

* Dynamic year labels
* Scroll progress line
* Chess bishop markers

### Right Side

* Experience cards
* Project highlights
* Company logos
* Technologies used

### Visual Enhancement

Use subtle chess move path lines as timeline connectors.

## LinkedIn Integration Strategy

Use LinkedIn profile data dynamically.

### Possible methods:

#### Option 1 — Manual JSON
Maintain a JSON file:
```json
{
  "experience": [],
  "projects": [],
  "skills": []
}
```
This is easiest and reliable.

#### Option 2 — Notion CMS
Sync portfolio content from Notion.

#### Option 3 — GitHub + LinkedIn Combined
Combine:
* GitHub activity
* LinkedIn experience
* Recent projects

## Dynamic Year System

Instead of hardcoding:
```txt
2022
2023
2024
```
Use:
```js
new Date().getFullYear()
```
Or:
```js
const latestUpdate = projects[0]?.year
```
This makes the portfolio always feel current.
