# baseline-format-tester

Small utility for testing

## Usage

### Initial setup

```bash
> yarn install
> yarn build
> yarn run-bin --help

> # Print an example of the format to stdout
> yarn run-bin --format yaml print

> # Write an example of the format to ./test.baseline
> yarn run-bin --format yaml write ./test.baseline

> # Read ./test.baseline and attempt to parse/validate it
> yarn run-bin --format yaml read ./test.basleine
```

### New formatters

To add a new formatter to try out:

1. Add a new class that implements `Formatter` to `/src/formatters/`
2. Add the new formatter to the `formatters` map in `/src/index.js`

## Formatter comparison

* Usage: downloads/wk from npm
* Maintenance recency: time since most recent update
* Bus factor: number of significant recent contributors
* Dependency tree size: total number of transitive dependencies
* C# support: whether there is a comparably reasonable C# implementation

| *Criteria* | JSON | HJSON | JSON5 | js-yaml |
| - | - | - | - | - |
| Usage      | *    | 0.25M/wk | 44M/wk | 31M/wk |
| Maint. recency | * | 10mo | 7mo | 5mo |
| Bus factor | * | 2 | 2-6 | 1-3 |
| Dep. tree size | 0 | 1 | 2 | 2 |
| C# support | yes | yes, but low usage | no | yes |