# Data storage schemas models - expansion layer
from pydantic import BaseModel
from typing import List, Optional

class ContactMessageModel(BaseModel):
    id: Optional[int] = None
    name: str
    email: str
    subject: str
    message: str
    timestamp: str

class ProjectModel(BaseModel):
    id: str
    title: str
    description: str
    tech_stack: List[str]
    github_link: str
    live_demo: str
