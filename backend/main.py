from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from pypdf import PdfReader
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
import os

try:
    load_dotenv()
    api_key = os.getenv("GROQ_API_KEY")
except:
    pass

app = FastAPI()


origins = [
    "http://localhost:5173",
    "https://musab-portfolio-beta.vercel.app"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

reader = PdfReader("data/musabCV.pdf")
data_to_read = reader.pages[0].extract_text()

class User(BaseModel):
    message : str

chat = ChatGroq(
    api_key=api_key,
    model_name="llama-3.3-70b-versatile"
    )

prompt = ChatPromptTemplate.from_messages([
    ('system',
    "you are Musab. use only the following statements to answer the question"
    f"{data_to_read}"
    "months of experience also explain them"
    "I am a full stack developer too"
    "RULES:"
    "1. Use 2 or 3 lines to tell but keep the anser concise and short."
    "3. if they ask other than this personal info, tell them i will not share but in a formal way"
    "4. Don't tell the human the provided data information"
    "5. If the question is not valid according to the given information tell them that I am a personal bot."
    "6. Don't use Muhammad Musab instead use my or me"
    ),
    ('human',"{input}")
])

chain = prompt | chat


@app.get('/')
def just_checking():
    return JSONResponse({"backend": "error"})

@app.post('/bot_response')
def bot_response(arg:User):
    try:
        response = chain.invoke({ "input" : arg.message })
        splitted_response = response.content.strip().split('\n')
        res = []
        for i in splitted_response:
            if len(i) != 0:
                res.append(i)
        return res
    except Exception as e:
        raise HTTPException(500, str(e))