import os

def create_structure():
    base_dir = "c:\\Users\\chetn\\OneDrive\\Desktop\\portfolio"
    
    # Frontend folders
    frontend_folders = [
        "frontend/public/assets/images",
        "frontend/public/assets/icons",
        "frontend/public/assets/logos",
        "frontend/public/assets/animations",
        "frontend/public/assets/videos",
        "frontend/src/components/Navbar",
        "frontend/src/components/Hero",
        "frontend/src/components/About",
        "frontend/src/components/Skills",
        "frontend/src/components/Experience",
        "frontend/src/components/Projects",
        "frontend/src/components/Robotics",
        "frontend/src/components/Achievements",
        "frontend/src/components/Contact",
        "frontend/src/components/Footer",
        "frontend/src/components/Loader",
        "frontend/src/components/TechStack",
        "frontend/src/components/ResumeButton",
        "frontend/src/components/Cursor",
        "frontend/src/components/ThemeToggle",
        "frontend/src/components/Particles",
        "frontend/src/pages",
        "frontend/src/layouts",
        "frontend/src/animations",
        "frontend/src/data",
        "frontend/src/hooks",
        "frontend/src/services",
        "frontend/src/styles",
        "frontend/src/utils"
    ]
    
    # Backend folders
    backend_folders = [
        "backend/app/api/routes",
        "backend/app/core",
        "backend/app/database",
        "backend/app/services",
        "backend/app/schemas",
        "backend/app/utils"
    ]
    
    # Create directories
    for folder in frontend_folders + backend_folders:
        path = os.path.join(base_dir, folder)
        os.makedirs(path, exist_ok=True)
        print(f"Created folder: {path}")

    # Create empty files as placeholders
    files_to_create = [
        # Frontend files
        "frontend/public/robots.txt",
        "frontend/public/favicon.ico",
        "frontend/src/components/Hero/Hero.jsx",
        "frontend/src/components/Hero/Hero.css",
        "frontend/src/components/Hero/HeroAnimation.jsx",
        "frontend/src/pages/Home.jsx",
        "frontend/src/pages/ProjectDetails.jsx",
        "frontend/src/pages/NotFound.jsx",
        "frontend/src/layouts/MainLayout.jsx",
        "frontend/src/animations/fadeAnimations.js",
        "frontend/src/animations/textAnimations.js",
        "frontend/src/animations/cardAnimations.js",
        "frontend/src/animations/pageTransitions.js",
        "frontend/src/data/skillsData.js",
        "frontend/src/data/projectsData.js",
        "frontend/src/data/experienceData.js",
        "frontend/src/data/achievementsData.js",
        "frontend/src/hooks/useTheme.js",
        "frontend/src/hooks/useScrollAnimation.js",
        "frontend/src/hooks/useTypingEffect.js",
        "frontend/src/services/api.js",
        "frontend/src/services/emailService.js",
        "frontend/src/services/chatbotService.js",
        "frontend/src/styles/globals.css",
        "frontend/src/styles/animations.css",
        "frontend/src/styles/scrollbar.css",
        "frontend/src/styles/themes.css",
        "frontend/src/utils/constants.js",
        "frontend/src/utils/helpers.js",
        "frontend/src/utils/downloadResume.js",
        "frontend/src/routes.jsx",
        "frontend/.env",
        
        # Backend files
        "backend/app/api/routes/__init__.py",
        "backend/app/api/routes/contact.py",
        "backend/app/api/routes/chatbot.py",
        "backend/app/api/routes/projects.py",
        "backend/app/core/__init__.py",
        "backend/app/core/config.py",
        "backend/app/core/security.py",
        "backend/app/database/__init__.py",
        "backend/app/database/connection.py",
        "backend/app/database/models.py",
        "backend/app/services/__init__.py",
        "backend/app/services/mail_service.py",
        "backend/app/services/ai_service.py",
        "backend/app/services/resume_service.py",
        "backend/app/schemas/__init__.py",
        "backend/app/schemas/contact_schema.py",
        "backend/app/schemas/project_schema.py",
        "backend/app/utils/__init__.py",
        "backend/app/utils/helpers.py",
        "backend/app/main.py",
        "backend/requirements.txt",
        "backend/Dockerfile",
        "backend/.env",
        "backend/README.md",
        "README.md",
        ".gitignore"
    ]
    
    for relative_path in files_to_create:
        full_path = os.path.join(base_dir, relative_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        if not os.path.exists(full_path):
            with open(full_path, "w", encoding="utf-8") as f:
                f.write("")
            print(f"Created file: {full_path}")

if __name__ == "__main__":
    create_structure()
