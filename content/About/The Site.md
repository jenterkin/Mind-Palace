---
title: The Site
permalink: 28dbdc20-7586-44e9-9e4a-d3c19e70bd23
---

I write this site from [Obsidian](https://obsidian.md/) and publish it with [Quartz](https://quartz.jzhao.xyz/) to [GitHub Pages](https://pages.github.com/). You can check out the repo I publish the site from [here](https://github.com/jenterkin/Mind-Palace).

If you'd like to keep up with technical updates to this site I'm tracking them 
# Quartz Customizations

Quartz is the static site generator I use to generate this site from my Obsidian vault. I've made a few customizations and plan to work on more.

If you'd like to keep up with my work customizing Quartz, I track them all under [[Projects/This Site/]]. 

> [!warning]- Moving these to projects under [[/Projects/This Site/]]
> ## Changes to upstream
> ### Allow disabling page count indicator in the Folder view
> 
> - [ ] Allow disabling page count indicator in the Folder view
> 
> I just needed to expose the `showFolderCount` prop via the `FolderPage` emitter. I should do this for Tag views as well.
> 
> ### Allow configuring the favicon
> 
> - [ ] Allow configuring the favicon
> 
> This was just adding `staticRoot` and `faviconName` values to the config and replacing the hard-coded values in `quartz/components/Head.tsx`. I should also do this for `og-image.png`.

