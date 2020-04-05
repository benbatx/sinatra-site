HTML Examples
-------------

http://motherfuckingwebsite.com/
https://people.xiph.org/%7Exiphmont/demo/index.html
http://simantokoubou.jp/25.html

APIS
----

https://github.com/public-apis/public-apis/blob/master/README.md

You can use ones that say "Auth: No". The other columns don't matter

Workflow
--------

Find an issue you want to work on:

https://github.com/benbatx/sinatra-site/issues/1

Click "assign yourself"

run
```
git checkout master
git pull
git checkout -b issue-1 # or whatever number
```

as you make progress
```
git commit -am "did first part"
git push
git commit -am "finished issue-1, yay!"
git push
```

make a new pull request:
https://github.com/benbatx/sinatra-site/pulls

enter:
```
base: master
compare: issue-1
```
