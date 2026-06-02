from fastapi import APIRouter
from typing import List
from app.schemas.project_schema import ProjectSchema

router = APIRouter()

MOCK_PROJECTS = [
    {
        "id": "rag-chatbot-creator",
        "title": "Multiple RAG Chatbot Creator",
        "description": "Enterprise-grade RAG deployment framework that lets users create, customize, and orchestrate multiple independent vector knowledge bases and chatbots in real-time.",
        "extended_description": "Engineered a scalable multi-tenant RAG architecture. Built the backend with FastAPI and LangChain, enabling document parsing, semantic text chunking, and metadata filtering. Uses Vector DBs for storage and React for dynamic, glowing, multi-agent orchestrator UI.",
        "tech_stack": ["FastAPI", "React", "LangChain", "OpenAI", "Pinecone", "Docker"],
        "github_link": "https://github.com/chetnasoni/multiple-rag-creator",
        "live_demo": "https://rag-creator.chetnasoni.com",
        "image_url": "/assets/images/rag_creator.png",
        "category": "AI/LLM"
    },
    {
        "id": "inventory-system",
        "title": "Inventory Management System",
        "description": "An interactive real-time inventory controller featuring predictive restocking thresholds, telemetry charts, and secure multi-level authentication.",
        "extended_description": "Developed a full-stack, enterprise-grade inventory tracker. Built standard RESTful APIs with Node.js/Express, designed custom Mongo schemas, and created responsive, glassmorphic charts using Chart.js on the React frontend.",
        "tech_stack": ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Tailwind CSS"],
        "github_link": "https://github.com/chetnasoni/inventory-management",
        "live_demo": "https://inventory.chetnasoni.com",
        "image_url": "/assets/images/inventory.png",
        "category": "Full Stack"
    },
    {
        "id": "rag-chatbot",
        "title": "RAG Chatbot",
        "description": "Full semantic chat pipeline allowing context-aware conversations based on private PDFs, with interactive source tracing and precision prompts.",
        "extended_description": "Configured custom embedding models and vector indexing pipelines to minimize hallucination. Developed a live typing UI streaming answer tokens with exact reference citations.",
        "tech_stack": ["FastAPI", "React", "LangChain", "Vector DB", "ChromaDB", "Python"],
        "github_link": "https://github.com/chetnasoni/rag-chatbot",
        "live_demo": "https://rag.chetnasoni.com",
        "image_url": "/assets/images/rag_chat.png",
        "category": "AI/LLM"
    }
]

@router.get("/projects", response_model=List[ProjectSchema])
def get_projects():
    return MOCK_PROJECTS

@router.get("/projects/{project_id}", response_model=ProjectSchema)
def get_project(project_id: str):
    for project in MOCK_PROJECTS:
        if project["id"] == project_id:
            return project
    return MOCK_PROJECTS[0]  # Fallback
