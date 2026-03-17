# Astro21-Sim

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Python reproduction and simulation scaffold for the adaptive differential-drag spacecraft rendezvous paper: **Acta Astronautica 181 (2021) 733-740**. This project simulates CubeSat rendezvous maneuvers using differential drag in chaotic atmospheric conditions, implementing adaptive control and dynamics modeling based on the original research.

## Features

- **High-Fidelity Dynamics Modeling**: Includes orbital mechanics, artificial drift injection, J2 disturbance modeling, and atmospheric co-rotation.
- **Adaptive Controller**: Implementation of the adaptive differential-drag controller with optimized parameter tuning (Q weights, R, Gamma1, Gamma2).
- **Interactive GUI**: A built-in Tkinter interface (`astro21_gui.py`) allowing interactive tweaking of orbital, spacecraft, and controller parameters with real-time feedback.
- **Parametric Studies**: Tools to run comprehensive parametric studies (`parametric_study.py`) for optimization and convergence time analysis.
- **Paper Regression & Calibration**: Built-in scripts to validate simulation outputs against specific data targets extracted from the original paper.

## Project Structure

- `astro21_sim/`: Core package containing the dynamics, controller, atmosphere wrapper, and plotting utilities.
- `run_suite.py`: Executes the SS (Schweighart-Sedwick) and full-dynamics reference scenarios, generating figures in the `outputs/` directory.
- `astro21_gui.py`: Launches the interactive GUI with pre-loaded paper defaults.
- `parametric_study.py`: Executes parametric studies to visualize and optimize controller convergence under varying atmospheric conditions.
- `compare_to_paper.py`: Validates simulator accuracy against manual targets extracted from the original paper's figures.
- `calibrate_to_paper.py`: Performs bounded searches over hidden scenario parameters to minimize mismatch with the paper's results.

## Installation

Ensure you have Python 3.11 or newer installed. You can install the required dependencies using `pip`:

```bash
pip install -e .
```

This will install the package in editable mode along with `numpy`, `scipy`, and `matplotlib`.

## Usage

### 1. Run Standard Simulation Suite

To run the default scenarios and generate plots:

```bash
python3 run_suite.py
```

To mandate the NRLMSISE-00 backend for full-dynamics cases:

```bash
python3 run_suite.py --require-exact-atmosphere
```

### 2. Interactive GUI

Launch the interactive parameter-tuning GUI:

```bash
python3 astro21_gui.py
```
*Note: The GUI exposes all main orbits, spacecraft limits, controller parameters, and atmospheric models.*

### 3. Parametric Studies

To generate heatmaps and analyze convergence optimization:

```bash
python3 parametric_study.py
```

### 4. Paper Verification

To check simulator accuracy against the paper's documented results:

```bash
python3 compare_to_paper.py
```
This script outputs a regression report to `outputs/paper_regression_report.txt`.

### 5. Calibration

To calibrate the underlying hidden parameters against the paper:

```bash
python3 calibrate_to_paper.py --mode ss
python3 calibrate_to_paper.py --mode full
```

## References

- Shao et al., Acta Astronautica 181 (2021) 733-740. (Adaptive differential-drag rendezvous).
