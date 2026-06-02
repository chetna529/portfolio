import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import contact, chatbot, projects
from app.core.config import settings

app = FastAPI(
    title="Chetna Soni Portfolio Backend",
    description="Futuristic AI & Robotics Portfolio API Service",
    version="1.0.0",
)

# Set up CORS so frontend can communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, change this to specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(contact.router, prefix="/api", tags=["Contact"])
app.include_router(chatbot.router, prefix="/api", tags=["AI Chatbot"])
app.include_router(projects.router, prefix="/api", tags=["Projects"])

@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "Welcome to Chetna Soni's Cybernetic Portfolio API Service",
        "endpoints": {
            "root": "/",
            "contact": "/api/contact",
            "chatbot": "/api/chatbot",
            "projects": "/api/projects"
        }
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=settings.PORT, reload=settings.DEBUG)
