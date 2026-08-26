# Definição das tabelas com (SQLAlchemy?)

#imports learning
#These are imported Python classes and data types  
#ForeignKey: Defines a physical constraint in the database that links a column in one table to the primary key of another table (e.g., account_id links to accounts.id).
#the relationship defines a link between two python classes

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Boolean 
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

#Actual code
#-> User(Base)
# hashed_password means the password is gonna pass throug a criptography algorithm before being stored in the database, enhancing security by preventing the storage of plain-text passwords.
#Created data is for tracking when a record was created, and updated data is for tracking when a record was last modified. These timestamps are useful for auditing and data management purposes.

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    accounts = relationship("Account", back_populates="owner")