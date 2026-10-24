# @x12i/memorix-metadata-runtime usage example

Metadata installation, Catalox adapter, and unified effective-metadata client (Phase 3E).

This consuming application demonstrates **install a metadata pack into memory and verify idempotence** using the published npm package, pinned to `3.3.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Install a metadata pack through the Catalox adapter.
- Resolve the effective metadata used by a running client.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-metadata-runtime)
- [Implementation monorepo](https://github.com/x12i/memorix-mono-repo)
- [Reviewed package source](https://github.com/x12i/memorix-mono-repo/tree/b87d277ff9c40cedc18d5f4775642baf8a2d3df1/memorix-metadata-runtime)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example uses synthetic records and local callbacks or in-memory state. It checks the demonstrated consumer behavior of the pinned npm release. It does not connect to MongoDB, Catalox, a device, an AI provider, or a deployed pipeline service.
