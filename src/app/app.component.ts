import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescript-types';
}


type S = "A string";
type O = { "an": number, "object": number }
type SuO = S | O;
type SiO = S & O;

const x: SuO = "A string";
const y: SiO = "A string";
const z: S & never = "A string";
const a: S | never = "A string";
const b: "a" | "b" = "a";
const c: "a" | "b" = "b";
const d: "a" & "b" = "a";

// Write a type that adds a property
type O2 = O & { "foo": boolean }
class C  {
  foo: boolean = false;
}
class C2 extends C {
  bar: boolean = false
}


// Here are two types 
type RequestOptions = { opt: boolean }


// Write a type that includes HTTP verbs
type Verb = "GET" | "POST"

type HttpResponse = Promise<object>;
type Body = { json: string };

function httpRequest(verb: "GET", url: string, options?: RequestOptions): HttpResponse;
function httpRequest(verb: "POST", url: string, body: Body, options?: RequestOptions): HttpResponse;
function httpRequest(verb: Verb, url: string, body?: Body, options?: RequestOptions ): HttpResponse {
  throw new Error("TODO");
}


httpRequest("GET", "https://duckduckgo.com");
httpRequest("POST", "example.com/api", {some: "Payload"});

httpRequest("GET", "https://duckduckgo.com");
httpRequest("POST", "example.com/api", {some: "Payload"});


// enum Verbs {
// PUT, POST, GET, PATCH, DELETE
// }

// const x12 = Verbs.POST;

// Why use strings instead of Enums?
