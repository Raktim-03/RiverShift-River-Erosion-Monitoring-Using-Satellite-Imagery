
# RiverShift
### Riverbank Erosion Monitoring Using Satellite Imagery

RiverShift is a geospatial web application designed to monitor historical riverbank changes using satellite imagery. The project aims to visualize changes in river boundaries, estimate bankline displacement, and identify potential erosion hotspots through an interactive map-based interface.

The initial prototype will focus on a selected river reach in Assam, India, using Sentinel-2 satellite imagery and geospatial analysis.

> **Project status:** Initial development
>
> **Project type:** Academic semester project
>
> **Institution:** Tezpur University, Assam, India

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Objectives](#objectives)
3. [Key Features](#key-features)
4. [Technology Stack](#technology-stack)
5. [System Architecture](#system-architecture)
6. [Repository Structure](#repository-structure)
7. [Prerequisites](#prerequisites)
8. [Getting Started](#getting-started)
9. [Running the Application](#running-the-application)
10. [API Endpoints](#api-endpoints)
11. [Methodology](#methodology)
12. [Team Collaboration](#team-collaboration)
13. [Development Roadmap](#development-roadmap)
14. [Limitations](#limitations)
15. [Contributing](#contributing)
16. [License](#license)

---

## Project Overview

Riverbank erosion is a major environmental challenge in Assam, particularly along the Brahmaputra and its tributaries. It can lead to the loss of agricultural land, damage to infrastructure, displacement of settlements, and significant socioeconomic consequences.

RiverShift aims to make historical riverbank changes easier to explore by combining satellite imagery, image processing, geospatial analysis, and web-based visualization.

The application will compare observations from two different dates, extract approximate water boundaries, visualize their differences, and estimate changes in bankline position.

The system is intended to support exploratory environmental analysis and demonstrate how remote sensing and geospatial technologies can be used for river monitoring.

## Objectives

- Acquire suitable satellite observations for a selected river reach.
- Extract approximate water boundaries using the Normalized Difference Water Index (NDWI).
- Compare river boundaries from two observation dates.
- Visualize historical and recent boundaries on an interactive map.
- Estimate bankline displacement at selected transects.
- Identify locations showing substantial historical boundary movement.
- Generate a basic report summarizing the analysis.

## Key Features

### Planned for the Initial Prototype

- **Satellite imagery:** Access suitable Sentinel-2 observations through Google Earth Engine.
- **Water extraction:** Generate preliminary water masks using NDWI.
- **Boundary comparison:** Display water boundaries from two observation dates.
- **Interactive mapping:** Explore the selected river reach using a web map.
- **Displacement measurement:** Estimate bankline movement at selected transects.
- **Hotspot visualization:** Highlight locations with substantial measured changes.
- **Report generation:** Export a summary of the analysis and its limitations.

Features will be implemented incrementally. Their inclusion in this list does not imply that they are already operational.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend framework | React |
| Programming language | TypeScript |
| Frontend build tool | Vite |
| Interactive mapping | Leaflet and React Leaflet |
| Backend framework | Python and FastAPI |
| API server | Uvicorn |
| Satellite data processing | Google Earth Engine |
| Satellite imagery | Sentinel-2 Surface Reflectance |
| Numerical processing | NumPy |
| Tabular data processing | pandas |
| Geospatial analysis | GeoPandas, Shapely and pyproj |
| Raster processing | Rasterio |
| Version control | Git and GitHub |

The team may refine the technology stack as implementation and compatibility requirements become clearer.

## System Architecture

```text
                    USER
                     |
                     v
          React + TypeScript Frontend
                     |
                REST API
                     |
                     v
              FastAPI Backend
                     |
                     v
          Satellite Data Processing
                     |
             Google Earth Engine
                     |
                     v
             Sentinel-2 Imagery
                     |
                     v
            NDWI Water Extraction
                     |
                     v
           Geospatial Change Analysis
                     |
                     v
       Boundary Comparison and Displacement
                     |
                     v
             Interactive Map
```

The frontend is responsible for user interaction and visualization. The backend handles API requests and analysis logic, while the geospatial processing pipeline obtains and analyzes satellite data.

## Repository Structure

```text
RiverShift/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .venv/                 # Local environment; not committed
│
├── .gitignore
└── README.md
```

Additional directories and modules may be introduced as the application develops.

## Prerequisites

Install the following tools before setting up the project:

- Git
- Node.js LTS and npm
- Python 3.11
- A code editor such as Visual Studio Code
- A Google Earth Engine account with the required access for satellite data processing

Check your installations:

```bash
git --version
node --version
npm --version
python --version
```

On Windows, you can also check installed Python versions with:

```powershell
py --list
```

## Getting Started

### 1. Clone the Repository

Each collaborator should clone the shared repository to their own computer.

Replace the placeholder with the repository URL from GitHub.

```bash
git clone https://github.com/Raktim-03/RiverShift-River-Erosion-Monitoring-Using-Satellite-Imagery.git
cd RiverShift
```

If the repository is private, the collaborator must have the appropriate GitHub access.

### 2. Set Up the Backend

Open a terminal in the project root.

#### Windows PowerShell

```powershell
cd backend

py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1

python -m pip install --upgrade pip
pip install -r requirements.txt
```

#### macOS or Linux

```bash
cd backend

python3.11 -m venv .venv
source .venv/bin/activate

python -m pip install --upgrade pip
pip install -r requirements.txt
```

The virtual environment is local to each collaborator's computer and should not be committed to Git.

### 3. Set Up the Frontend

Open a separate terminal in the project root.

```bash
cd frontend
npm install
```

This installs the frontend dependencies defined in `frontend/package.json`.

### 4. Configure Google Earth Engine

Google Earth Engine integration will be required for the satellite-processing workflow.

Before running Earth Engine operations:

1. Ensure your Google account has the necessary Earth Engine access.
2. Follow the official authentication instructions.
3. Configure credentials locally using the supported Earth Engine authentication workflow.
4. Never commit credentials, private keys, tokens, or local environment files.

Official documentation: https://developers.google.com/earth-engine/guides/auth

Earth Engine is not required for the initial API health-check endpoint.

## Running the Application

Run the backend and frontend in separate terminals.

### Terminal 1: Backend

From the `backend/` directory, activate the virtual environment and start the API server:

```bash
python -m uvicorn main:app --reload
```

The backend will normally run at:

- API root: http://127.0.0.1:8000
- Health check: http://127.0.0.1:8000/api/health
- Interactive API documentation: http://127.0.0.1:8000/docs

### Terminal 2: Frontend

From the `frontend/` directory:

```bash
npm run dev
```

Open the URL printed by Vite, normally:

http://localhost:5173

Keep both development servers running while testing the application.

### Verify the Setup

The health-check endpoint should return a response similar to:

```json
{
  "status": "healthy",
  "project": "RiverShift",
  "version": "0.1.0"
}
```

The frontend should be able to retrieve this response from the backend.

If the frontend cannot connect, check that both servers are running and that the backend's CORS configuration permits the frontend development origin.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Returns the API welcome message |
| GET | `/api/health` | Checks backend availability |
| GET | `/docs` | Opens interactive API documentation |

Endpoints for imagery retrieval, water extraction, boundary comparison, and displacement analysis will be added as those modules are implemented.

## Methodology

### 1. Satellite Data Acquisition

Select suitable Sentinel-2 Surface Reflectance observations for the study area and two observation dates.

### 2. Preprocessing

Prepare the required spectral bands and apply suitable cloud and shadow masking.

### 3. Water-Boundary Extraction

Calculate the Normalized Difference Water Index:

**NDWI = (Green − NIR) / (Green + NIR)**

For Sentinel-2 imagery, the green band is B3 and the near-infrared band is B8.

Apply a suitable threshold to create a preliminary water mask. The threshold and extracted boundaries must be visually checked because sediment, vegetation, seasonal changes, and image conditions can affect classification.

### 4. Boundary Comparison

Extract approximate water boundaries for both observation dates and display them together on the map.

### 5. Displacement Analysis

Measure bankline displacement at selected transects using an appropriate projected coordinate reference system.

Measurements should use a consistent method and clearly document the observation dates and units.

### 6. Visualization and Reporting

Display the boundaries, selected dates, measured displacement, potential hotspots, and important limitations. Generate a basic report summarizing the results.

## Team Collaboration

RiverShift is maintained collaboratively through GitHub. Every team member should work on their own local clone and contribute changes through version control.

### Recommended Work Allocation

| Workstream | Primary responsibility |
|---|---|
| Satellite data and image processing | Image selection, preprocessing, NDWI and water masks |
| Geospatial analysis and backend | Displacement calculations, analysis logic and FastAPI endpoints |
| Frontend and integration | React interface, interactive map and API integration |

These assignments are a starting point. All team members should review each other's work and participate in testing, validation, documentation, and the final presentation.

### Branching Strategy

Use the following branch conventions:

- `main` — stable, integrated project code.
- `feature/<short-description>` — new features.
- `fix/<short-description>` — bug fixes.

For example:

```bash
git switch main
git pull origin main
git switch -c feature/water-boundary
```

After completing your changes:

```bash
git add .
git commit -m "Add initial water boundary extraction"
git push -u origin feature/water-boundary
```

Open a pull request on GitHub and request a review from another team member before merging into `main`.

If your team uses a different established branching strategy, follow that strategy consistently instead.

### Commit Message Convention

Write concise commit messages that describe the change.

Examples:

```text
feat: add NDWI water extraction
feat: add river boundary overlay
fix: handle missing satellite observations
docs: update setup instructions
test: add displacement calculation tests
refactor: organize analysis modules
```

### Collaboration Guidelines

- Pull the latest changes before beginning new work.
- Avoid committing directly to `main` unless the team explicitly agrees otherwise.
- Keep commits focused on a single logical change.
- Do not commit `node_modules/`, `.venv/`, build outputs, or local credentials.
- Communicate before modifying shared interfaces or API contracts.
- Review pull requests and resolve merge conflicts carefully.
- Test your changes before opening a pull request.
- Update documentation when setup instructions, endpoints, or project behavior change.

## Development Roadmap

- [ ] Initialize the frontend and backend.
- [ ] Verify frontend-to-backend connectivity.
- [ ] Select the study area and observation dates.
- [ ] Obtain suitable satellite observations.
- [ ] Implement preprocessing and NDWI water extraction.
- [ ] Validate and compare extracted boundaries.
- [ ] Implement transect-based displacement calculations.
- [ ] Integrate analysis results with the interactive map.
- [ ] Add report generation.
- [ ] Test the complete workflow.
- [ ] Finalize documentation and the project demonstration.

## Limitations

- The initial prototype will focus on one selected river reach and two observation dates.
- Results depend on image quality, cloud cover, water levels, seasonality, and classification accuracy.
- Changes in water boundaries do not always represent permanent bank erosion.
- Measurements are approximate and should be validated against visual evidence or other reliable reference data.
- The prototype will not predict future erosion.
- Results are intended for educational and exploratory analysis, not as a replacement for field surveys or official hazard assessments.

## Contributing

Contributions from authorized project collaborators are welcome.

1. Pull the latest changes from `main`.
2. Create a feature or bug-fix branch.
3. Implement and test your changes.
4. Commit your work using descriptive messages.
5. Push the branch to GitHub.
6. Open a pull request and address review feedback.

Please keep changes focused, avoid committing sensitive information, and update relevant documentation.


**RiverShift — Making historical riverbank change easier to visualize and analyze.**
