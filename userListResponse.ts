
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const userListResponseSchema = {
  "id": "http://tradex.techx.vn/user/userListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "userListResponse schema",
  "type": "object",
  "properties": {
    "id": {
      "description": "userId",
      "type": "integer"
    },
    "primaryAccountType": {
      "description": "primary_account_type",
      "type": "string"
    },
    "username": {
      "description": "username",
      "type": "string"
    },
    "displayName": {
      "description": "display_name",
      "type": "string"
    },
    "email": {
      "description": "email",
      "type": "string"
    },
    "phoneCode": {
      "description": "phone_code",
      "type": "string"
    },
    "phoneNumber": {
      "description": "phone_number",
      "type": "string"
    },
    "avatar": {
      "description": "avatar",
      "type": "string"
    },
    "domain": {
      "description": "domain",
      "type": "string"
    },
    "birthday": {
      "description": "birthday",
      "type": "string"
    }
  }
};
let userListResponseAjv = null;
export function userListResponseValidator() {
  if (userListResponseAjv == null) {
    userListResponseAjv = new Ajv({validateSchema: false}).compile(userListResponseSchema);
  }
  return userListResponseAjv;
}
      