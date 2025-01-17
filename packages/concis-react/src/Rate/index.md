---
title: Rate
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Rate

Scoring components.

## ##When to use

- Display the evaluation.

- Perform quick rating operations on things.

## Basic use

Basic scoring components.

<code src="./demos/index1.tsx" />

## Custom Color

Configure the `starColor` attribute to customize the star color.

<code src="./demos/index2.tsx" />

## Quantity and default display

Customize the number of stars and the default display number through `num` and `defaultShow`.

<code src="./demos/index3.tsx" />

## Read Only

Configure `readonly` to specify that `Rate` is read- only.

<code src="./demos/index4.tsx" />

## Clearable

Specify `avaClear` to allow double clicking to clear the score.

<code src="./demos/index5.tsx" />

## Cases

Score the business case.

<code src="./demos/index6.tsx" />

## API

| Name           | Description               | Type            | Default |
| -------------- | ------------------------- | --------------- | ------- |
| className      | Custom class name         | `string`        | `--`    |
| style          | Custom styles             | `CSSProperties` | `--`    |
| num            | number of stars           | `number`        | `5`     |
| starColor      | color                     | `string`        | `--`    |
| defaultShow    | Default number to display | `number`        | `all`   |
| avaClear       | Double click to clear     | `boolean`       | `false` |
| readonly       | read only                 | `boolean`       | `false` |
| chooseCallback | Choose callback function  | `Function`      | `--`    |
