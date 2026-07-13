# nodejs-filesystem-preview
Tool: Preview Command

This repository contains a simplified implementation of core Linux filesystem utilities using Node.js, featuring a custom "fancy" command designed to optimize file inspection.
---

## Section 1 — Command Description

### What the tool does
The `preview` command provides an immediate, clean snapshot summary of any text file without requiring the user to open the entire document. 

### What commands it combines
It combines the functionalities of two classic Linux utilities:
1. `wc` (Word Count) - line-counting mechanism to check the file length.
2. `head` - To view a brief sample of the content from the top of the file.

### How to run it
Make sure you have Node.js installed, then execute the script from your terminal by passing the target file name as an argument:
node preview.js <filename>

## Section  — AI‑Assisted Programming
## What I asked AI 
I utilized AI to understand the core behaviors of Linux commands, to adapt structural syntax into basic,
(avoiding complex try/catch blocks or process.exit loops), and to brainstorm edge cases for testing.

## Where AI helped 
AI was highly effective in guiding the breakdown of array operations, 
specifically using split('\n') for counting lines and utilizing slice(0, 5) to extract precisely the first 5 elements for the preview feature.

## where you had to think independently
I had to independently manage my environment, set up the synchronous fs integrations locally, and handle user input through process.argv handling.
More importantly, I manually set up the specific text test environments (8lines.txt and 5lines.txt) and ran the terminal test processes on my own machine.

## what AI got wrong or missed
Initially, the AI generated complex code. This layout went beyond our current classroom curriculum constraint. 
I had to explicitly direct the AI to strip away those professional patterns and redesign the fallback structure using basic conditional if/else logic blocks.
