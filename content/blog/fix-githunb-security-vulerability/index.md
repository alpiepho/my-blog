---
title: Fixing Github Sercurity Warnings
date: "2019-09-02T12:29:55Z"
---

I hate dots on icons.

I have a lot of repos on GitHub.  Some are kind of stale.  GitHub 
has started scanning them for npm sercurity vulnerabilities.  That
is a good thing.  

The bad thing is the packages that are flaged are usually sub
dependencies of other packages...not things directly in the package.json file.

My first thought was, "I'm not really dependent on the features
of packaages X (say gastby), I'll just upgrade everything".  Bad idea! After using:
```
npm outdate  # see what is out of date
yarn upgrade # upgrade all the packages
```

I would sometimes get bad builds, or worse, run time errors that
didn't show up until the app was deployed.  Reverting is ugly!


So my workaround is to add the package that has been flagged
directly in the package.json:
```
yarn add eslint-utils
```

And add a Note to the end of the README.md so the change is more visable.

```
## Updates for GitHub security issues

- added eslint-utils directly to package.json (is a deep dependency)
```

This works and limits the impact of package changes on my working application, but still seems like a hack.  I hope there are not too many packages that need to be added over time.

Maybe git hub should have an option to opt-in for something similar?
