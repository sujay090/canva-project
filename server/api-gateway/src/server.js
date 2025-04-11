import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors";
import helmet from "helmet";
import proxy from "express-http-proxy";

const app = express();
const PORT = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//proxy options
const proxyOptions = {
  proxyReqPathResolver: (req) => {
    return req.originalUrl.replace(/^\v1/, "/api");
  },
  proxyErrorHandler: (err, res, next) => {
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  },
};

app.use(
  "/v1/design",
  proxy(process.env.DESIGN, {
    ...proxyOptions,
    parseReqBody: false,
  })
);

app.use(
  "/v1/media",
  proxy(process.env.UPLOAD, {
    ...proxyOptions,
    parseReqBody: false,
  })
);

app.use(
  "/v1/subscription",
  proxy(process.env.SUBSCRIPTION, {
    ...proxyOptions,
  })
);

app.listen(PORT, () => {
  console.log(`API gateway is running port:${PORT} `);
  console.log(`Design is running port:${process.env.DESIGN} `);
  console.log(`upload is running port:${process.env.UPLOAD} `);
  console.log(`Subscription is running port:${process.env.SUBSCRIPTION} `);
});
