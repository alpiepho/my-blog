---
title: And let there be...DarkMode?
date: "2019-08-01T16:30:34Z"
---

Thanks to the author of [this](https://github.com/donavon/use-dark-mode) React Hook and the excellent [example](https://codesandbox.io/s/mzj64x80ny), I was able to roll in a Dark Mode toggle for this blog.

Like anything involving CSS, there are so many ways to implement Dark Mode for a web site.

This example uses a custom React Hook wrapped in a React Functional Component, that I was able to add to the existing Layout component.  (If this sounds like a bunch of giberish, it will actually make sense if you dig into React/Gasby a little.  The Layout is like a visual frame for all pages of a site, typically contains the header and footer, then displays a given set of children.)  It's kind of elegent that this method uses the underlying CSS for the page body to change colors.

Another technique I have seen, is to use React styled-components to create a global theme that can be injected all styled components.  I tried this on a version of the default Gatsby project.  This technique required more code changes to sub components, but seemed a little cleaner. 

I'm sure there are many other ways to do this.

I plan on looking :mag_right: at how to do this React-Native in the near future.

