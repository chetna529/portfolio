from pydantic import BaseModel, EmailStr, Field

class ContactSubmit(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Name of the person contacting")
    email: EmailStr = Field(..., description="Sender email address")
    subject: str = Field("Portfolio Contact Inquiry", max_length=200)
    message: str = Field(..., min_length=5, max_length=2000, description="Message body")
