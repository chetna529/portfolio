import os
import re
from app.core.config import settings

class AIService:
    def __init__(self):
        self.api_key = settings.GEMINI_API_KEY
        self.model = None
        self.has_sdk = False
        
        # Chetna's comprehensive Knowledge Base aligned with Resume
        self.knowledge = {
            "name": "Chetna Soni",
            "role": "Full Stack Developer and AI Engineer",
            "education": "Bachelor of Technology / Engineering in Computer Science (Expected Graduation: 2026). Higher Secondary (12th) from Govt Model School, Chanderi (Year 2021 | 80%). Secondary (10th) (Year 2019 | 94%).",
            "skills": {
                "frontend": "React.js, MERN, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Framer Motion, GSAP",
                "backend": "FastAPI (Python), Node.js, Express, RESTful APIs, Python, Java, PHP",
                "databases": "PostgreSQL, SQL, MongoDB, Vector Databases (Pinecone, ChromaDB)",
                "ai_llm": "RAG (Retrieval-Augmented Generation), LangChain, OpenAI API, LLMs, AI Agents, Prompt Engineering",
                "tools": "Docker, GitHub, Grafana, InfluxDB, SDLC, ROS2, WebSockets, Linux/WSL"
            },
            "experience": [
                {
                    "company": "TRUEiGTECH",
                    "role": "Software Developer Trainee",
                    "period": "May 2026 - Present",
                    "highlights": [
                        "Software Developer Trainee building full-stack web applications.",
                        "API integration, database workflows, and collaborative SDLC delivery."
                    ]
                },
                {
                    "company": "Bidyut Innovation Pvt. Ltd., Indore",
                    "role": "Full-Stack Developer",
                    "period": "March 2026 - May 2026",
                    "highlights": [
                        "ROS 2, Gazebo, Grafana, InfluxDB real-time telemetry dashboards.",
                        "WebSocket streaming, ROS Bridge, ROSLIB.js, ROS3D.js, Three.js integrations."
                    ]
                },
                {
                    "company": "Center of Excellence (CoE)",
                    "role": "Member",
                    "period": "June 2025 - March 2026",
                    "highlights": [
                        "Technical workshops, applied engineering projects, and peer mentoring."
                    ]
                },
                {
                    "company": "47Billion",
                    "role": "Full-Stack Developer",
                    "period": "June 2025 - September 2025",
                    "highlights": [
                        "RAG chatbots with FastAPI and React.",
                        "Vector databases, Dockerized deployments, REST APIs."
                    ]
                }
            ],
            "projects": [
                {
                    "title": "Intake - Multiple RAG Chatbot Creator",
                    "description": "A platform enabling users to create and deploy multiple custom RAG chatbots without coding. Built with FastAPI, React, PostgreSQL, LangChain, VectorDBs, and Docker. Features isolated tenant spaces.",
                },
                {
                    "title": "OptiVen - Inventory Management System",
                    "description": "Full-stack inventory management app to streamline product tracking, stock levels, and reporting. Built with FastAPI, React, MongoDB, and Docker."
                },
                {
                    "title": "RAG Chatbot",
                    "description": "Intelligent conversational chatbot integrating document ingestion pipeline (PDFs), vector databases, semantic retrieval, and conversational memory in LangChain."
                }
            ],
            "contact": {
                "email": "chetnaa974@gmail.com",
                "phone": "+91 8602425826",
                "whatsapp": "https://wa.me/918602425826?text=Hi%20Chetna",
                "linkedin": "https://www.linkedin.com/in/chetna-soni-1a2814339/",
                "github": "https://github.com/chetnasoni"
            }
        }
        
        # System instructions
        self.system_prompt = (
            f"You are the dedicated AI assistant of Chetna Soni. You live on her developer portfolio. "
            f"Keep your responses extremely engaging, soft, warm, concise, and helpful. "
            f"Introduce yourself as 'Chetna's AI Assistant' or 'A.E.G.I.S' (Autonomous Engineered General Intelligence System). "
            f"Chetna is an aspiring Full-Stack Developer and AI Engineer. "
            f"Here is her background:\n"
            f"- Skills: {self.knowledge['skills']}\n"
            f"- Experience: {self.knowledge['experience']}\n"
            f"- Projects: {self.knowledge['projects']}\n"
            f"- Contact info: {self.knowledge['contact']}\n"
            f"Always reply in the first person representing Chetna Soni or as her dedicated assistant. "
            f"Be technical, sharp, and highly polite. Limit answers to 2-3 short, bulleted paragraphs max."
            f"If someone asks for contact details, her phone number, how to hire her, or whatsapp, make sure to direct them to "
            f"her WhatsApp link: {self.knowledge['contact']['whatsapp']}"
        )
        
        # Initialize Google GenAI if key available
        if self.api_key:
            try:
                import google.generativeai as genai
                genai.configure(api_key=self.api_key)
                self.model = genai.GenerativeModel(
                    model_name="gemini-1.5-flash",
                    system_instruction=self.system_prompt
                )
                self.has_sdk = True
                print("Gemini AI Chatbot Service initialized successfully.")
            except Exception as e:
                print(f"Error loading Google Generative AI SDK, falling back to rule-agent: {e}")

    def generate_response(self, user_message: str) -> str:
        if self.has_sdk and self.model:
            try:
                response = self.model.generate_content(user_message)
                return response.text.strip()
            except Exception as e:
                print(f"Gemini API invocation failed: {e}. Falling back to Rule Agent.")
        
        # Smart rule-based fallback
        msg = user_message.lower()
        
        if any(w in msg for w in ["hi", "hello", "hey", "greetings"]):
            return (
                "👋 **Greetings!** Welcome to my portfolio interface. I am Chetna's AI Assistant.\n\n"
                "I can tell you about Chetna's work in **RAG Chatbots**, **FastAPI architectures**, "
                "or her experience at **Bidyut Innovation** and **47Billion**. What would you like to explore?"
            )
        
        if any(w in msg for w in ["skill", "technolog", "tech", "lang", "know", "code"]):
            return (
                "⚡ **Chetna's Tech Arsenal:**\n\n"
                f"• **Frontend:** {self.knowledge['skills']['frontend']}\n"
                f"• **Backend:** {self.knowledge['skills']['backend']}\n"
                f"• **AI / LLMs:** {self.knowledge['skills']['ai_llm']}\n"
                f"• **Databases:** {self.knowledge['skills']['databases']}\n"
                f"• **Tools:** {self.knowledge['skills']['tools']}\n\n"
                "She builds highly interactive full-stack dashboards with real-time feedback loops!"
            )
        
        if any(w in msg for w in ["experience", "work", "job", "intern", "47", "bidyut", "trueig", "coe", "excellence"]):
            return (
                "💼 **Professional Milestones:**\n\n"
                "1. **TRUEiGTECH** — Software Developer Trainee (May 2026 – Present)\n"
                "2. **Bidyut Innovation** — Full-Stack Developer (Mar – May 2026); ROS 2, Grafana, InfluxDB\n"
                "3. **Center of Excellence** — Member (Jun 2025 – Mar 2026)\n"
                "4. **47Billion** — Full-Stack Developer (Jun – Sep 2025); RAG, FastAPI, React"
            )
            
        if any(w in msg for w in ["project", "build", "portfolio", "codebase"]):
            proj_str = "\n".join([f"• **{p['title']}**: {p['description']}" for p in self.knowledge['projects']])
            return (
                "🚀 **Featured Systems (7+ projects):**\n\n"
                f"{proj_str}\n\n"
                "See the **Projects** section on this portfolio for full details."
            )
            
        if any(w in msg for w in ["contact", "email", "phone", "linkedin", "hire", "resume", "github", "number", "whatsapp", "call"]):
            return (
                "📞 **Establish Connection:**\n\n"
                "Chetna is currently open to new roles in AI Engineering and Full-Stack Development.\n\n"
                f"💬 **Direct WhatsApp:** [Chat on WhatsApp]({self.knowledge['contact']['whatsapp']}) (Click to text her directly!)\n"
                f"📧 **Email:** [{self.knowledge['contact']['email']}](mailto:{self.knowledge['contact']['email']})\n"
                f"🔗 **LinkedIn:** [Chetna Soni LinkedIn]({self.knowledge['contact']['linkedin']})\n"
                f"🐙 **GitHub:** [Chetna Soni GitHub]({self.knowledge['contact']['github']})\n\n"
                "You can also download her resume directly using the 'Download Resume' button at the top header!"
            )
            
        return (
            "🧬 **Neural Network Processing:**\n\n"
            "I've registered your transmission! Chetna is skilled in FastAPI, React.js, Tailwind CSS, LangChain, and Docker.\n\n"
            "Ask me about: **her skills**, **her projects**, **her internships**, or **how to contact/WhatsApp her**."
        )

ai_service = AIService()
