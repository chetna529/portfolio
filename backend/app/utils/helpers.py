# Backend utility helper scripts
from datetime import datetime

def get_current_timestamp() -> str:
    """
    Generate an ISO formatted timestamp.
    """
    return datetime.utcnow().isoformat()

def clean_string(input_str: str) -> str:
    """
    Sanitize general inputs.
    """
    return input_str.strip()
