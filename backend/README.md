# HMCTS Task API

Backend API for creating tasks for HMCTS caseworkers.

## Getting started

### Install dependencies

```bash
npm install
```

## Database setup

### 1. Create dev and test databases

````bash
npm run setup-dbs

## POST /api/tasks

Create a new task.

### Request body

```json
{
  "title": "Prepare evidence bundle",
  "description": "For case 12345",
  "status": "OPEN",
  "dueDateTime": "2025-11-30T10:00:00.000Z"
}
````
