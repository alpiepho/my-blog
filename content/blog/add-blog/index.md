---
title: How to add Blog Entry
date: "2019-07-31T11:53:52Z"
description: "How to add Blog Entry"
---

This site was started using Gatsby.js, a framework for SSR (Server Side Rendering) of React.js projects.  Gatsby lets you create a new site from a 'starter' project hosted on GitHib.  

A collection of Gatsby starters can be found [here](https://www.gatsbyjs.org/starters/?v=2).  The specific starter for this blog is [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/).

The gatsby-starter-blog is setup with a top-level directory called 'contents', and then the blogs are under 'blog' (makes sense).  Each blog entry is yet another subdirectory with an index.md file and any other image files etc.  For example, this is state of my blog as I create this blog entry:
```
|____content
| |____blog
| | |____new-beginnings
| | | |____index.md
| | |____add-blog
| | | |____index.md
| | |____hello-world
| | | |____index.md
| | |____html-handbook
| | | |____screenshot.png
| | | |____index.md
```

To create add-blog I copied the last blog entry (html-handbook), removed the *.png file and started editing the new index.md.  Editing is straight forward, but the date string can be tricky.  I am on a Mac and used the following command line to generate a new string:
```
Al$ date -u +"%Y-%m-%dT%H:%M:%SZ"
2019-07-31T12:18:32Z
```

With those edits, I can run locally using:
```
yarn start
```

Deploy to GitHub using:
```
yarn run deploy
```

And finally commit:
```
git add -A
git commit -m "adding blog about adding blog entry"
git push
```

Then sit back and enjoy :smiley:  




