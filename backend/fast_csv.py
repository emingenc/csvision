from typing import List, Dict
import uvicorn # type: ignore
from fastapi import FastAPI, File, UploadFile  # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root()->Dict:
    return {"message": "Hello , go to /docs for api doc."}

@app.post("/files/")
async def create_file(file: bytes = File(...)):
    return {"file_size": len(file)}


@app.post("/upload/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)