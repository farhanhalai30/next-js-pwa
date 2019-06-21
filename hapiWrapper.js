const nextHandlerWrapper = app => {
  const handler = app.getRequestHandler();
  return async ({ raw, url }, h) => {
    await handler(raw.req, raw.res, url);
    return h.close;
  };
};
const defaultHandlerWrapper = app => async ({ raw: { req, res }, url }) => {
  const { pathname, query } = url;
  return app.renderToHTML(req, res, pathname, query);
};

const pathWrapper = (app, pathName, opts) => async ({ raw, query, params }) => {
  return app.renderToHTML(
    raw.req,
    raw.res,
    pathName,
    { ...query, ...params },
    opts
  );
};

const StaticFileHandler = (request, reply) => {
  //   let contentType = request.params.extension ? "" : "text/xml";
  return reply
    .file("./.next/" + request.url.pathname.split("/")[1])
    .type("text/javascript");
};

const manifestHandler = (request, reply) => {
  //   let contentType = request.params.extension ? "" : "text/xml";
  return reply.file("./static/" + request.url.pathname.split("/")[1]).type("");
};

module.exports = {
  pathWrapper,
  defaultHandlerWrapper,
  nextHandlerWrapper,
  StaticFileHandler,
  manifestHandler
};
