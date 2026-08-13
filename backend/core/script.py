import os
import sys
from pathlib import Path

import django


BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from core.models import Note


dummy_notes = [
    {
        "title": "Grocery List for the Week",
        "description": "Buy milk, eggs, bread, spinach, chicken breast, rice, and coffee. Don't forget dish soap and paper towels."
    },
    {
        "title": "Project Meeting Notes",
        "description": "Discussed API integration timeline. Backend team to finish auth module by Friday. Frontend team blocked on design assets from client."
    },
    {
        "title": "Book Recommendations",
        "description": "Atomic Habits by James Clear, Deep Work by Cal Newport, and The Pragmatic Programmer for technical reading."
    },
    {
        "title": "Weekend Trip Plan",
        "description": "Leave Saturday morning, check into hotel by 2 PM, visit the old fort in the evening, and try the local street food market on Sunday."
    },
    {
        "title": "Bug Fix Reminder",
        "description": "Fix the null pointer exception in the payment gateway callback. Check logs from staging server for stack trace details."
    },
    {
        "title": "Birthday Gift Ideas",
        "description": "Wireless headphones, a good watch, or a subscription to an online course platform. Budget under 3000 rupees."
    },
    {
        "title": "Learning Goals for the Month",
        "description": "Finish the Django REST Framework course, practice 5 LeetCode problems per week, and read one chapter of System Design Interview book."
    },
    {
        "title": "Client Feedback Summary",
        "description": "Client wants the dashboard to load faster, prefers dark mode as default, and requested export to Excel feature."
    },
]

for note in dummy_notes:
    Note.objects.create(title=note["title"], description=note["description"])
