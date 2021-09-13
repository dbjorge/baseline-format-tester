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
