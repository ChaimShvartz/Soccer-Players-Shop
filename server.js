import express from "express";
import "dotenv/config";
import orderRouter from "./routes/ordersRoute.js";
import cartsRouter from "./routes/cartsRoute.js";
import generalRouter from "./routes/generalRoute.js";

const server = express();

server.use(express.json());
server.use((req, res, next) => {   
    console.log(req.url, req.method);
    next();
});

server.use("/cart", cartsRouter);
server.use("/orders", orderRouter);
server.use(generalRouter);

server.use((req, res) => {
    res.status(404).json({ success: false, message: "Path not found" });
});

server.listen(process.env.PORT, () =>
    console.log(`I'm listening on port ${process.env.PORT}...`),
);
