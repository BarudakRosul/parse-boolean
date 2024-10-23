<div align="center">
  <h1>Parse Boolean</h1>
  <p><a href="/docs/README.en.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/parse-boolean/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/parse-boolean/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/parse-boolean/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/parse-boolean/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-boolean"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fparse-boolean" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/parse-boolean" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-boolean"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fparse-boolean" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/parse-boolean/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/parse-boolean?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/parse-boolean/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/parse-boolean?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/parse-boolean/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/parse-boolean" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Parse Boolean is a JavaScript function designed to convert string representations of boolean values into their actual boolean types. It is especially useful when dealing with user input or data that enter as strings but is expected to be treated as booleans.

## Fitur

Parse Boolean offers the following features:

- Converts string representations of booleans into native boolean types (`true` or `false`).
- Supports string inputs with different cases (e.g., `"True"`, `"FALSE"`).
- Can be integrated into TypeScript code.

## Installation

To install Parse Boolean locally, follow these installation steps:

```shell
npm install @barudakrosul/parse-boolean
```

## Usage

To start using Parse Boolean, import the module first:

**1\. CommonJS**
```javascript
const parseBoolean = require("@barudakrosul/parse-boolean");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import parseBoolean from "@barudakrosul/parse-boolean";
```

Example of usage:

```javascript
const bool = "true"; // or "false"

if (parseBoolean(bool)) {
  console.log("Done!");
} else {
  console.log("Failed!");
}
```

## Contribution

Contributions to Parse Boolean are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Parse Boolean is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Parse Boolean appreciates the support and contributions of the following individuals and open source projects:

- [@Achixz](https://github.com/Achixz) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Parse Boolean by referring to [Changelog](https://github.com/BarudakRosul/parse-boolean/releases).

Thank you for choosing Parse Boolean! We aim to provide an easy solution to convert boolean strings into native boolean types.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)
