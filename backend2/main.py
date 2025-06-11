# from fastapi import FastAPI, Query, HTTPException
# from fastapi.responses import StreamingResponse
# import io
# import pandas as pd

# app = FastAPI()

# # Dummy function to simulate fetching tasks from a DB or external API
# def fetch_tasks_for_user(user_id: str):
#     # Replace this with actual DB/API call
#     return [
#         {"title": "Task 1", "description": "Desc 1", "effort": 3, "dueDate": "2025-06-10"},
#         {"title": "Task 2", "description": "Desc 2", "effort": 5, "dueDate": "2025-06-15"},
#     ]

# @app.get("/export/excel")
# def export_tasks_excel(user_id: str = Query(...)):
#     tasks = fetch_tasks_for_user(user_id)
#     if not tasks:
#         raise HTTPException(status_code=404, detail="No tasks found")

#     # Create DataFrame
#     df = pd.DataFrame(tasks)

#     # Write Excel to in-memory buffer
#     output = io.BytesIO()
#     with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
#         df.to_excel(writer, index=False, sheet_name='Tasks')
#     output.seek(0)

#     headers = {
#         'Content-Disposition': 'attachment; filename=tasks.xlsx'
#     }

#     return StreamingResponse(output, media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', headers=headers)




from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import pandas as pd
from fastapi.responses import StreamingResponse
import io
from export_utils import get_user_tasks  # hypothetical import

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.get("/export/excel")
# def export_tasks_excel(user_id: str):
#     tasks = get_user_tasks(user_id)  # fetch tasks from database
#     df = pd.DataFrame(tasks)

#     output = io.BytesIO()
#     with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
#         df.to_excel(writer, index=False, sheet_name='Tasks')

#     output.seek(0)
#     return FileResponse(output, media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', filename="tasks.xlsx")


@app.get("/export/excel")
def export_tasks_excel(user_id: str):
    tasks = get_user_tasks(user_id)  # fetch tasks from database
    df = pd.DataFrame(tasks)

    output = io.BytesIO()
    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        df.to_excel(writer, index=False, sheet_name='Tasks')
    output.seek(0)

    headers = {
        'Content-Disposition': 'attachment; filename="tasks.xlsx"'
    }

    return StreamingResponse(
        output,
        media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        headers=headers
    )