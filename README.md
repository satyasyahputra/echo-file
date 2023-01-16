# Echo file

## How to run
```
FILE_PATH=/path/to/file npm start
```

## How to use
Read file
```
GET /read

{{file content response}} | error!
```

Write file
```
POST /write
{
  "content": "your text for file content"
}

ok! | error!
```