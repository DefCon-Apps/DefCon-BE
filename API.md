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