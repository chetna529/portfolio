import asyncio
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from app.core.config import settings
from app.schemas.contact_schema import ContactSubmit

class MailService:
    def __init__(self):
        self.enabled = bool(settings.MAIL_USERNAME and settings.MAIL_PASSWORD)
        if self.enabled:
            self.conf = ConnectionConfig(
                MAIL_USERNAME=settings.MAIL_USERNAME,
                MAIL_PASSWORD=settings.MAIL_PASSWORD,
                MAIL_FROM=settings.MAIL_FROM,
                MAIL_PORT=settings.MAIL_PORT,
                MAIL_SERVER=settings.MAIL_SERVER,
                MAIL_FROM_NAME=settings.MAIL_FROM_NAME,
                MAIL_STARTTLS=True,
                MAIL_SSL_TLS=False,
                USE_CREDENTIALS=True,
                VALIDATE_CERTS=True
            )
            self.fm = FastMail(self.conf)
        else:
            print("SMTP Credentials not provided in .env. Mail service will print inquiries to logs.")

    async def send_contact_email(self, data: ContactSubmit) -> bool:
        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; background-color: #0d1117; color: #c9d1d9; padding: 20px;">
            <div style="border: 1px solid #30363d; border-radius: 6px; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #161b22;">
                <h2 style="color: #58a6ff; border-bottom: 1px solid #30363d; padding-bottom: 10px;">New Portfolio Inquiry</h2>
                <p><strong>From:</strong> {data.name} (<a href="mailto:{data.email}" style="color: #58a6ff;">{data.email}</a>)</p>
                <p><strong>Subject:</strong> {data.subject}</p>
                <div style="margin-top: 20px; border-left: 4px solid #8957e5; padding-left: 15px; color: #8b949e;">
                    <p style="white-space: pre-wrap;">{data.message}</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        if self.enabled:
            try:
                message = MessageSchema(
                    subject=f"Portfolio Inquiry: {data.subject}",
                    recipients=[settings.MAIL_FROM],  # Sends email to yourself
                    body=html,
                    subtype=MessageType.html
                )
                await self.fm.send_message(message)
                print(f"Email successfully dispatched to {settings.MAIL_FROM}")
                return True
            except Exception as e:
                print(f"Error sending email through SMTP: {e}. Falling back to logging.")
        
        # Fallback simulation
        print("\n" + "="*50)
        print(" SIMULATED OUTGOING CONTACT FORM EMAIL")
        print(f"To:       {settings.MAIL_FROM}")
        print(f"From:     {data.name} <{data.email}>")
        print(f"Subject:  Portfolio Inquiry: {data.subject}")
        print(f"Message:\n{data.message}")
        print("="*50 + "\n")
        
        # Simulate slight network delay
        await asyncio.sleep(0.5)
        return True

mail_service = MailService()
