import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApiError } from "./utils/ApiError";
import { ApiResponse } from "./utils/ApiResponse";
import authRouter from "./routes/auth/router";
import serviceRouter from "./routes/services/router";
import ratingRouter from "./routes/ratings/router";
import lawyerRouter from "./routes/lawyer/router";
import appointmentRouter from "./routes/appointments/router";
import caseRouter from "./routes/case/router";

const app = express();

// app basic configuration using middlewares
app.use(
  cors()
);

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use(express.static("./public"));
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/rating", ratingRouter);
app.use("/api/v1/lawyers", lawyerRouter);
app.use("/api/v1/cases", caseRouter)
app.use("/api/v1/appointment",appointmentRouter);

// Testing Connection route
app.get("/api/v1", (req: any, res: any) => {
  return res.status(200).json({ message: "Connection Established" });
});

// // Testing Error Routes
// app.get("/api/v1/error/:code", (req: any, res: any) => {
//   const statusCodeReq = Number(req.params?.code);

//   if (statusCodeReq) {
//     throw new ApiError(statusCodeReq, `[Testing ERR]: code ${statusCodeReq}`);
//   }

//   return res.status(statusCodeReq);
// });

// // Testing Success Routes
// app.get("/api/v1/success/:code", (req: any, res: any) => {
//   const statusCodeReq = Number(req.params?.code);

//   return res.status(statusCodeReq).json(
//     new ApiResponse(
//       statusCodeReq,
//       [
//         {
//           test: "testdata",
//         },
//       ],
//       `[Testing SUCCESS]: code ${statusCodeReq}`
//     )
//   );
// });

export { app };
