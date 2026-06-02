from pydantic import BaseModel
from typing import List, Optional

class ProjectSchema(BaseModel):
    id: str
    title: str
    description: str
    extended_description: Optional[str] = None
    tech_stack: List[str]
    github_link: Optional[str] = None
    live_demo: Optional[str] = None
    image_url: Optional[str] = None
    category: str
