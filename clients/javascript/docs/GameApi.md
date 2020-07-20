# GameClient.GameApi

All URIs are relative to *http://localhost:3000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayer**](GameApi.md#getPlayer) | **GET** /player | Get Player
[**postMoves**](GameApi.md#postMoves) | **POST** /moves | Create Move



## getPlayer

> InlineResponse202 getPlayer()

Get Player

Get player information

### Example

```javascript
import GameClient from 'game-client';
let defaultClient = GameClient.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GameClient.GameApi();
apiInstance.getPlayer().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMoves

> InlineResponse202 postMoves(direction)

Create Move

Create a player move

### Example

```javascript
import GameClient from 'game-client';
let defaultClient = GameClient.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GameClient.GameApi();
let direction = "direction_example"; // String | The direction to move
apiInstance.postMoves(direction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| The direction to move | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

