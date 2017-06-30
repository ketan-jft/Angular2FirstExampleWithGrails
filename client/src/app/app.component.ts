import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app',
  template: "<div style='text-align:center'>" +
  "<table class='table table-hover table-responsive container'>    " +
  "<thead>        " +
  "<tr><th>ID</th><th>Title</th><th>Done</th><th>View</th></tr>" +
  "</thead>" +
  "<tbody><tr *ngFor='let todo of todos'><td>{{todo.id}}" +
  "</td><td>{{todo.description}}</td><td>{{todo.done}}</td><td><a href='http://localhost:8080/todos/{{todo.id}}'><i class='ui-icon-pencil'></i> View</a></td></tr>" +
  "</tbody></table></div>",
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public todos=[
    {
      "id": 1,
      "description": "Todo 1",
      "done": false,
      "_links": {
        "self": {
          "href": "http://localhost:8080/todos/1",
          "hreflang": "en",
          "type": "application/hal+json"
        }
      }
    },
    {
      "id": 2,
      "description": "Todo 2",
      "done": false,
      "_links": {
        "self": {
          "href": "http://localhost:8080/todos/2",
          "hreflang": "en",
          "type": "application/hal+json"
        }
      }
    },
    {
      "id": 3,
      "description": "Todo 3",
      "done": false,
      "_links": {
        "self": {
          "href": "http://localhost:8080/todos/3",
          "hreflang": "en",
          "type": "application/hal+json"
        }
      }
    },
    {
      "id": 4,
      "description": "Todo 4",
      "done": false,
      "_links": {
        "self": {
          "href": "http://localhost:8080/todos/4",
          "hreflang": "en",
          "type": "application/hal+json"
        }
      }
    },
    {
      "id": 5,
      "description": "Todo 5",
      "done": false,
      "_links": {
        "self": {
          "href": "http://localhost:8080/todos/5",
          "hreflang": "en",
          "type": "application/hal+json"
        }
      }
    }
  ]
}

