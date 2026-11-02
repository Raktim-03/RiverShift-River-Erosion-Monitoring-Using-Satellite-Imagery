
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="RiverShift API",
    description="Riverbank erosion monitoring using satellite imagery",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Welcome to RiverShift API"}


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "project": "RiverShift",
        "version": "0.1.0",
    }

print("RiverShift API Started")