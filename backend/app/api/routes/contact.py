from fastapi import APIRouter, HTTPException, status
from app.schemas.contact_schema import ContactSubmit
from app.services.mail_service import mail_service

router = APIRouter()

@router.post("/contact")
async def submit_contact(payload: ContactSubmit):
    try:
        success = await mail_service.send_contact_email(payload)
        if success:
            return {"status": "success", "message": "Your transmission was received successfully. I will get back to you shortly!"}
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Transmission failed. Please try again later or reach out via email directly."
            )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Server error during dispatch: {str(e)}"
        )
