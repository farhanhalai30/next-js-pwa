const next = require("next");
const Hapi = require("hapi");
const Inert = require("inert");
const {
  pathWrapper,
  defaultHandlerWrapper,
  nextHandlerWrapper,
  StaticFileHandler,
  manifestHandler
} = require("./hapiWrapper");

require("dotenv").config();

const port = 3001;
// const dev = false;
const dev =
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "staging";
// console.log(dev);
const app = next({ dev });
const server = new Hapi.Server({
  port
});

app.prepare().then(async () => {
  await server.register([Inert]);

  server.route({
    method: "GET",
    path: "/service-worker.js",
    // handler: StaticFileHandler,
    handler: function(request, h) {
      return h.file("./.next/service-worker.js");
    },
    options: {
      state: {
        parse: false, // parse cookies and store in request.state
        failAction: "log" // may also be 'ignore' or 'log'
      }
    }
  });

  server.route({
    method: "GET",
    path: "/manifest.json",
    handler: function(request, h) {
      return h.file("./static/manifest.json");
    },
    options: {
      state: {
        parse: false, // parse cookies and store in request.state
        failAction: "log" // may also be 'ignore' or 'log'
      }
    }
  });

  server.route({
    method: "GET",
    path: "/",
    handler: pathWrapper(app, "/"),
    options: {
      state: {
        parse: false, // parse cookies and store in request.state
        failAction: "log" // may also be 'ignore' or 'log'
      },
      cache: {
        otherwise: "no-cache, private, no-store, must-revalidate"
      }
    }
  });

  server.route({
    method: "GET",
    path: "/_next/{p*}" /* next specific routes */,
    handler: nextHandlerWrapper(app),
    options: {
      state: {
        parse: false, // parse cookies and store in request.state
        failAction: "log" // may also be 'ignore' or 'log'
      }
    }
  });

  server.route({
    method: "GET",
    path: "/{p*}" /* catch all route */,
    handler: defaultHandlerWrapper(app),
    options: {
      state: {
        parse: false, // parse cookies and store in request.state
        failAction: "log" // may also be 'ignore' or 'log'
      }
    }
  });

  try {
    await server.start();
    console.log(`> Ready on http://localhost:${port}`);
  } catch (error) {
    console.log("Error starting server");
    console.log(error);
  }
});
