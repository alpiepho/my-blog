---
title: Running PHP Locally (on Mac)
date: "2019-09-03T18:01:42Z"
---

A recent job posting and a recent dive into Wordpress has 'inspired'
me to look at PHP.

I started a course on LinkedIn Learning ( [PHP with MySql Essential Training 1: The Basics](https://www.linkedin.com/learning/php-with-mysql-essential-training-1-the-basics) ).  This really starts from the beginning.

I wanted to try some of the samples without doing a lot of install
on my Mac (so hard to clean it up).  I found a YourTube video (sorry for missing a reference here), that showed how.  Very simple:
```
# from command line
# cd to your project
php -S 127.0.0.1:8000 index.php 
```

Then open a browser to localhost:8000

It works on a simple hello world application.  With any luck it
will work of more complicated applications :)

### Additional Notes

For the LinkedIn course, I had to cd to the level where public
and private folders are (in Chapter 4, this was globe_bank).  Then
use URL directly the staff index.php:
```
http://localhost:8000/public/staff/index.php
```

