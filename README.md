# Chat GPT desktop interface

A simple Chat GPT interface running the latest available version (3.5 turbo).

- To run on Linux, download the ChatGPT-linux script and execute on a terminal with `./ChatGPT-linux`.

- To run on Windows simply execute the `ChatGPT.exe`.

- The password is `5EZm7`

## Dev Notes

To allow the PKG library to successfully package the program into an `.exe` and a linux script, I had to use `commonjs` instead of `modules`, which forced the require syntax and callbacks instead of top-level async/await syntax, which is much more preferable. Also, I could not use environmental variables (.env) for the API key, because it would not work on Windows, since there would be no Node Environment. The workaround forced the use of a password because

- ChatGPT scans the web for exposure of the key and detects if an application is hosted on github, thus deleting the api-key and rendering the app useless.

- No .env could be used and hard-coding the whole API Key would be a liability. This is just a sample app, but could lead to the API Quota being maxed out by a abusive bots.
