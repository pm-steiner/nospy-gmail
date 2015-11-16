# nospy-gmail

## DESCRIPTION:
A user script that rewrites google's tracking urls in your gmail emails

## FUNCTION:
This scripts cleans up the urls in your gmail emails which google
rewrites to their <code>http://google.com/url?=</code> which may be a 
click tracker using a simple regex. I don't like it when gmail rewrites
my friend's links from 
<pre>http://example.com/check/this/out/123?username=name&password=pass</pre> to 
<pre>http://google.com/url?=http%3A%2F%2Fexample.com%2Fcheck%2Fthis%2Fout%2F123%3Fusername%3Dname%26password%3Dpass'</pre>. 

I know it's meant to "protect" me from phishing websites or malware, I just
don't appreciate my urls being scanned.

## INSTALLATION:

You need greasemonkey or tampermonkey to use this.
