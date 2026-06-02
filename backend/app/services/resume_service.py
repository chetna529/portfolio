# Resume Dispatch Service Node
import os

class ResumeService:
    def __init__(self):
        self.resume_path = "public/resume.pdf"
        
    def check_resume_exists(self) -> bool:
        """
        Verify presence of PDF asset file inside static resources.
        """
        return os.path.exists(self.resume_path)

resume_service = ResumeService()
