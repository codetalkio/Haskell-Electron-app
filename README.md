# Haskell-Electron-app
A small example of using Electron with Haskell and Servant.

For a walkthrough of what is happening, check out the accompanying blog post [Using Electron with Haskell](https://codetalk.io/posts/2016-05-10-using-electron-with-haskell.html)

To launch the `servant` server from within `Haskell-Electron-app/backend`:

```
$ stack exec backend-exe
```

To launch the `Electron` app from within `Haskell-Electron-app/haskell-app`:

```
$ npm start
```


## Building

You probably need to build the modules first.

For `servant` in `Haskell-Electron-app/backend`:

```
$ stack build
```

And for `Electron` in `Haskell-Electron-app/haskell-app`:

```
$ npm install
```
