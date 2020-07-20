# GameClient::GameApi

All URIs are relative to *http://localhost:3000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_player**](GameApi.md#get_player) | **GET** /player | Get Player
[**post_moves**](GameApi.md#post_moves) | **POST** /moves | Create Move



## get_player

> InlineResponse202 get_player

Get Player

Get player information

### Example

```ruby
# load the gem
require 'game-client'
# setup authorization
GameClient.configure do |config|
  # Configure Bearer authorization: token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = GameClient::GameApi.new

begin
  #Get Player
  result = api_instance.get_player
  p result
rescue GameClient::ApiError => e
  puts "Exception when calling GameApi->get_player: #{e}"
end
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


## post_moves

> InlineResponse202 post_moves(direction)

Create Move

Create a player move

### Example

```ruby
# load the gem
require 'game-client'
# setup authorization
GameClient.configure do |config|
  # Configure Bearer authorization: token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = GameClient::GameApi.new
direction = 'direction_example' # String | The direction to move

begin
  #Create Move
  result = api_instance.post_moves(direction)
  p result
rescue GameClient::ApiError => e
  puts "Exception when calling GameApi->post_moves: #{e}"
end
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

