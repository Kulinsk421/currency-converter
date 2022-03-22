"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
const conversion_1 = __importDefault(require("./routes/conversion"));
const sendToDB_1 = __importDefault(require("./routes/sendToDB"));
app.use("/conversion", conversion_1.default);
app.use("/sendToDB", sendToDB_1.default);
app.get("/", (req, res) => {
    res.send("this is index");
});
app.listen(PORT, () => {
    console.log(` Server is running at https://localhost:${PORT}`);
});
