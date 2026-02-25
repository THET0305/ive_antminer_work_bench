# ASIC Workbench Interactive Training Tool - Demo

## IVE ASIC Workbench Demo Repo for CI/CD

This repository contains the build files and CI/CD pipeline for the **ASIC Workbench Interactive Training Tool DEMO**, an interactive WebGL-based proof-of-concept designed to showcase the potential for a larger training tool.

---

## Deploy URL

[🔗 ASIC Workbench Demo](https://antminer-workbench-demo.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6937de4f-7df0-4e27-a79d-cb85481a7646/deploy-status)](https://app.netlify.com/sites/antminer-workbench-demo/deploys)

---

## Project Overview

This project is a demonstration version of a potential WebGL-based interactive training tool, designed to showcase how technicians could be trained to properly remove and replace components on an ASIC cryptocurrency miner.

In its current demo state, the tool focuses on the removal of a single cooling fan and highlights the corresponding step in a step-by-step PDF guide embedded alongside the interactive 3D content. The demo is intended to present the concept to stakeholders and demonstrate how such a tool could be expanded into a complete training system.

---

## Key Features (Demo Version)

### Fully Interactive 3D Model
Rotate, inspect, and interact with the Antminer S9 model, focusing on the cooling fan removal process.

### Guided Teardown Process
The demo highlights the correct procedural steps for removing the fan, ensuring process accuracy.

### PDF Integration
A step-by-step PDF guide is embedded into the interface, dynamically highlighting the current step.

### WebGL Optimized
Runs directly in a browser—no software installation required.

### Realistic Workbench Environment
A clean, grid-style workbench environment focuses attention on the device and process.

### Cloud Hosted
Deployed to a web server, accessible from any modern web browser.

---

## Technology Stack

### Software
- **Unity3D**: For creating and building WebGL content.
- **VSCode**: For editing JavaScript, HTML, and CSS.
- **Autodesk Maya**: For modeling and optimizing Antminer S9 components and environment assets.

### Coding Languages
- **C#**: Unity scripting for interaction and browser communication.
- **JavaScript**: For managing PDF highlighting and web-side interactions.
- **HTML/CSS**: For structuring and styling the web interface.

### Libraries
- **PDF.js**: For embedding and controlling the step-by-step PDF guide.
- **Unity WebGL Templates**: Custom templates enhancing the WebGL player user experience.

### Frameworks
- **Node.js**: For local development and testing.
- **Express.js**: For serving localized builds during development.

### Hosting
- **Netlify.com**: Hosting the demo with CI/CD integration via GitHub.

---

## Purpose

This demo serves as a **proof-of-concept** to pitch the potential for a fully-featured **ASIC Workbench Interactive Training Tool**. A commissioned full version would cover complete disassembly, component replacement, and reassembly for the Antminer S9—including multiple components, troubleshooting, and guided training.

---

## 🚦 Status

~~✅ Demo Complete – Awaiting stakeholder feedback for full development approval.~~<br>
🚫 Demo Complete – Stakeholder elected not to proceed with further development.
