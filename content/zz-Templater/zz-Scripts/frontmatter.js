module.exports = async (tp, tags) =>  {
  tagYaml = tags.map(tag => `\n  - ${tag}`).join();

  return `---
title: ${tp.file.title}
description:
permalink: ${await tp.user.uuid()}
draft: true
date: ${await tp.date.now("YYYY-MM-DD")}
tags: ${tagYaml}
---`;
}
