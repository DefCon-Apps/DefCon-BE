## Def:Con Web API 가이드

### Base URL

```
https://api.defcon.or.kr
```

### API Functions Summary

| Function             | Description                     | Parameters | Type    |
|----------------------|---------------------------------|------------|---------|
| /common/getMainEvent | Get Event Data on Main Page     | N/A        | Common  |
| /member/getData      | Get Specific Member's Data      | MemberID   | Member  |
| /member/getList      | Get Array of All Member's Data  | N/A        | Member  |
| /project/getData     | Get Specific Project's Data     | ProjectID  | Project |
| /project/getList     | Get Array of All Project's Data | N/A        | Project |

---

## Common Description

### Result Values

| Variable    | Type    | Description               |
|-------------|---------|---------------------------|
| RESULT_CODE | Integer | 200 is OK, Other is Error |
| RESULT_MSG  | String  | Message for Result Check  |
| RESULT_DATA | Object  | Values of API Function    |

---

## Detail Description

### /common/getMainEvent

Input Body : __None__

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
      "title": PROJECT_TITLE,
      "content": PROJECT_CONTENT,
      "image": IMAGE_BASE64
    }
}
```