const Fastify = require("fastify");

const app = Fastify({
    logger: false,
});

app.get("/hello-world", function(request, reply) {
    reply.send({hello: "world!"})
});

app.listen({ port: 3000 }, function (error, address) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Server running on:", address);
});