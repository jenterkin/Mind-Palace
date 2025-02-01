---
title: Support Article Subtitles
description: 
permalink: 07BF2243-999F-4F19-A6B5-3B65B093F3A6
draft: false
date: 2025-01-31
tags:
  - projects/site/quartz
---
I'd like to have more control over titles. I often like to tile something like
> Provocative Main Title: a Descriptive Subtitle

Quartz seems to break with just adding a `:` to `frontmatter.title` so that's out. That may be an easy fix, but why not add a bit of style while we're at it? Instead of having the same styling throughout the whole title, we could break them up into `title` and `sub-title` so that we can style them differently depending on the context.

For instance, it might make sense to have both main and sub-titles on the same line for a compact list view, but on the actual page we may want to put them on separate lines with separate styles to highlight the distinction.

The title of a page is, by default in `quartz.config.ts`,  handled by `quartz/components/ArticleTitle.jsx`. It's very simple, exposing just an `h1` element or `null`, which makes it trivial to create a custom component that renders something like

```tsx
const ArticleTitle: /* QuartzComponent typing */ => {
	const { subTitle } = fileData.frontmatter?;
	return <div>
		{/* StdArticleTitle is just the built-in ArticleTitle component
		  * imported under a different name because we're using it :) */}
		<StdArticleTitle class={fileData={fileData} displayClass=displayClass />
		{
			(subTitle !== undefined)
				?
					<h2 class={classNames(displayClass, "article-sub-title")}>
						{subTitle}
					</h2>
				: null
		}
	</div>
}

ArticleTitle.css = `
// some styling
`;
```

And replace the standard component in `quartz.layout.ts` with it.

Steps