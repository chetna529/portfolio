# Security utilities - optional expansion layer
import hashlib

def hash_token(token: str) -> str:
    """
    Hash a generic security token or communication packet string.
    """
    return hashlib.sha256(token.encode()).hexdigest()
