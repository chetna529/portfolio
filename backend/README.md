# A.E.G.I.S Portfolio Backend Service

FastAPI-powered ASGI service rendering LLM chatbot prompts, contact mail transmissions, and dynamic projects listing.

## Scaffolding Hierarchy
```text
backend/app/
├── api/routes/     # contact, chatbot, and projects routers
├── core/           # settings configurations
├── database/       # data connections
├── services/       # mail_service, ai_service
├── schemas/        # contact_schema, project_schema
└── main.py         # main FastAPI app instance
```

## Launch
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Create a `.env` in `backend/` to override Gemini keys or SMTP mail credentials.
