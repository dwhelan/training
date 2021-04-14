### `Training katas`
This Ruby project has starting source code and tests
for the katas along with a description markdown file.

It saves all RubyMine workplace, project and dependencies locally.

#### Getting started
Make sure you have cloned the training repo.  
```
$ git clone git@gitlab.mtb.com:P2P/Training.git
cd ruby
bundle install
rake test
```

If all goes well you should see something like:

```
Run options: --seed 15196

# Running:

.

Fabulous run in 0.000851s, 1175.0882 runs/s, 1175.0882 assertions/s.

1 runs, 1 assertions, 0 failures, 0 errors, 0 skips

```
#### RubyMine
Select menu `File` | `Open...` 
and choose the `training/ruby` folder created above.

Select menu `Run` | `Run...` | `All`.
You should see that all tests passed.

You should also see a run configuration for each kata that
you can use to run individual kata tests.

#### VS Code
Select menu `File` | `Open...` 
and choose the `training/ruby` folder created above.

You may want to install the [Ruby Test Explorer plugin](https://marketplace.visualstudio.com/items?itemName=connorshea.vscode-ruby-test-adapter).
