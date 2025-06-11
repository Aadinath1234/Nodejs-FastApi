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
