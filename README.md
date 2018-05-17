teenytest-bail
===

Add this plugin to your teenytest config (either with `--plugin teenytest-bail` or by adding it to `teenytest.plugins` in your package.json. You can then add `--bail` to your test command to stop testing at the first failure. Either to your npm test command itself or to teenytest if you run it manually or something like `npm test i-- --bail`.
