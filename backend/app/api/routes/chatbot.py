from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.ai_service import ai_service

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

@router.post("/chatbot", response_model=ChatResponse)
def query_chatbot(request: ChatRequest):
    if not request.message.strip():
         raise HTTPException(status_code=400, detail="Transmission cannot be empty.")
    
    try:
        reply = ai_service.generate_response(request.message)
        return ChatResponse(response=reply)
    except Exception as e:
        print(f"Chatbot fallback triggered: {e}")
        reply = ai_service.generate_response(request.message)
        return ChatResponse(response=reply or "Ask me about skills, experience, or projects!")
