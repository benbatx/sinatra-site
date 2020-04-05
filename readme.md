To run: `ruby app.rb`

Visit `http://localhost:4567`

HTML Examples
-------------

https://www.w3schools.com/html/default.asp

https://neocities.org/browse

https://stallman.org/

Troubleshooting
---------------

Frequently "save" your code when it kinda works by running:
```
git commit -am "finished a thing"
```

When something breaks, but you're not sure why, run:
```
git stash save
```
to restore to a clean slate of your last commit

if you want to undo your last stash, run:
```
git stash apply
```

Ruby
----

Add the line `debugger` to drop into your code at that point

Use `puts whatever.inspect` to output a variable in the terminal

(short version^: `p whatever`)


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

Fun APIS
--------

https://github.com/public-apis/public-apis/blob/master/README.md

You can use ones that say "Auth: No". The other columns don't matter
