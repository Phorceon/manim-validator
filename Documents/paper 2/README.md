Adaptive Differential-Drag Rendezvous Simulation
Numerical Reproduction of Shao et al. (2021)

Reference
Shao, G., Wang, H., Zhou, B. Adaptive controller for differential-drag rendezvous with unknown parameters. Acta Astronautica 2021, 181, 733-740. https://doi.org/10.1016/j.actaastro.2021.01.031

Overview
This project is a full Python reproduction of the numerical simulation framework described in the paper above. It models the adaptive differential drag rendezvous maneuvers of satellites in chaotic atmospheric conditions by integrating:

Linear and Nonlinear Orbit Models — propagates relative satellite trajectories using Schweighart-Sedwick (SS) dynamics and high-fidelity simulated models with artificial drift injection and J2 disturbance modeling.
Adaptive Controller — implementation of the adaptive control law estimating differential ballistic coefficients to command optimal maneuvers.
Atmosphere Models — density models mapping atmospheric flux and chaotic variations (including an exact NRLMSISE-00 wrapper).
The simulation outputs relative convergence states, continuous control efforts, and dynamic parameter estimations, reproducing the core figures in the paper.

Quick Start
1. Install dependencies
```bash
pip install -e .
```
2. Run the full simulation
```bash
python3 run_suite.py
```
All figures are saved as PNG files into the `outputs/` directory.

File Structure
astro21-sim/
├── astro21_sim/           Core package
│   ├── constants.py       All physical constants and mission parameters
│   ├── controller.py      Implementation of the adaptive controller
│   ├── orbits.py          Orbit dynamics and propagations
│   ├── atmosphere.py      Atmospheric wrapper for USSA76 and NRLMSISE-00
│   └── plots.py           Figure generation routines
├── run_suite.py           Entry point — runs SS and full-dynamics reference scenarios
├── astro21_gui.py         Interactive GUI to tweak parameters
├── parametric_study.py    Rendezvous convergence studies and heatmaps
├── compare_to_paper.py    Regression comparison to paper-derived targets
├── calibrate_to_paper.py  Calibration of hidden parameters
├── pyproject.toml         Python packaging and dependencies
└── README.md              This file

What the Simulation Computes
At every timestep (default: 60s for SS model, 13s for full model) the simulation:

Advances the relative chaser and target state vectors using specified dynamics models.
Calculates local atmospheric densities and artificial drift disturbances.
Executes the controller to optimize relative trajectory convergence.
Adjusts parameter estimates (Theta1 and Theta2 bounds) for adaptive response.
Logs continuous relative states, bounds, and control history.

Variables You Can Change
All user-configurable variables are in `astro21_sim/constants.py` and interactively available via `astro21_gui.py`.

Orbital Parameters (In constants.py under chaser_orbit)
```python
chaser_orbit = {
    'semi_major_axis_m': 6.7131e6, # Semi-major axis (meters)
    'eccentricity': 0.0,           # Near-circular
    'inclination_rad': 0.906,      # ~51.94 degrees
    'raan_rad': 3.601,             # ~206.36 degrees
    'arg_perigee_rad': 1.764,      # ~101.07 degrees
    'true_anomaly_rad': 1.886,     # ~108.08 degrees
}
```

Spacecraft Geometry
```python
drag_coefficient = 2.2      # Standard value in free molecular flow
chaser_mass_kg = 3.0        # Chaser mass [kg]
target_mass_kg = 1.5        # Target mass [kg]
chaser_area_min_m2 = 0.01   # Minimum variable area for the chaser [m^2]
chaser_area_max_m2 = 0.5    # Maximum variable area [m^2]
target_area_m2 = 0.2        # Target fixed area [m^2]
```

Controller Config (Tuning Weights)
```python
q_matrix = np.diag([180.0, 1.0, 1.8, 1.0])
r_scalar = 1.8e16
gamma1 = 1.0e-21 * np.eye(3)
gamma2 = 1.5e-21 * np.eye(3)
```

Simulation Settings
Set via the defined models in `constants.py`:
```python
duration_hours = 60.0    # Simulation duration (hours)
sample_step_s = 60.0     # Time increment for updates
```

Atmospheric Model
Mandate the exact NRLMSISE-00 backend inside `run_suite.py`:
```bash
python3 run_suite.py --require-exact-atmosphere
```

Variables That Must Remain Constant
Do not manually alter core environment constants:
```python
MU = 3.986004418e14        # Earth gravitational parameter
radius_m = 6378137.0       # Earth mean radius [m]
j2 = 1.08262668e-3         # Earth oblateness coefficient
omega_rad_s = 7.2921159e-5 # Earth rotation speed
```

Optimal Configuration for Fastest Rendezvous Convergence
To vastly minimize convergence time, optimization requires higher cost factor values combined with aggressive drag variation mapping.

```python
# In constants.py
controller = ControllerConfig(
    q_matrix=np.diag([1000.0, 10.0, 10.0, 10.0]),
    r_scalar=1.0e14,
    gamma1=5.0e-20 * np.eye(3),
    # ...
)
```

Equations Implemented
The exact equations are coded per their occurrence within the underlying research layout.

Equation(s) Description Module
SS models Schweighart-Sedwick linear orbital perturbations `orbits.py`
NL models Full non-linear dynamics equations `orbits.py`
Control law Adaptive non-linear control logic `controller.py`
Estimators Adaptive parameter constraints `controller.py`
Atmosphere NRLMSISE-00 / USSA76 wrapper algorithms `atmosphere.py`
Plotting Graphical interpretation mapping `plots.py`

Figures Reproduced
Figure Description
Figure 3	Recreation of relative states under SS models
Figure 4	Recreation of control efforts under SS models
Figure 5	Recreation of parameter estimates under SS models
Figure 6	Recreation of relative states under full non-linear models
Figure 7	Recreation of control efforts under full non-linear models
Figure 8	Recreation of parameter estimates under full non-linear models

TLE Parameter Reference
Parameter Symbol Unit Description
semi_major_axis_m a meters Orbit semi-major axis
eccentricity e - Orbital eccentricity
inclination_rad i radians Orbit inclination
raan_rad Omega radians Right ascension of ascending node
arg_perigee_rad omega radians Argument of perigee
true_anomaly_rad theta radians True anomaly

Dependencies
numpy>=1.26
scipy>=1.11
matplotlib>=3.8

Notes
The exact full non-linear simulation suite operates best with the NRLMSISE-00 backend installed.
The graphical application (`astro21_gui.py`) wraps underlying parameter inputs to bypass raw manipulation when desired.
All simulation figures export to `outputs/` rather than explicitly projecting standalone graphical windows by default to enable server compatibility.

Citation
If using this code, please cite the original paper:

@article{shao2021,
  author  = {Shao, G. and Wang, H. and Zhou, B.},
  title   = {Adaptive controller for differential-drag rendezvous with unknown parameters},
  journal = {Acta Astronautica},
  volume  = {181},
  pages   = {733--740},
  year    = {2021},
  doi     = {10.1016/j.actaastro.2021.01.031} 
}
