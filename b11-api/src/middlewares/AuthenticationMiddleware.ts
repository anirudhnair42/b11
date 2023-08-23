import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from "routing-controllers";
import jwt from "jsonwebtoken";

@Middleware({ type: "before" })
export class AuthenticationMiddleware
  implements ExpressErrorMiddlewareInterface
{
  error(
    error: any,
    request: any,
    response: any,
    next: (err?: any) => any
  ): void {
    throw new Error("Method not implemented.");
  }
  use(request: any, response: any, next: (err?: any) => any) {
    const token = request.headers["authorization"];

    if (!token) {
      throw new Error("No token provided");
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY as string
      ) as any;
      request.userId = decoded.userId;
      next();
    } catch (error) {
      console.error("JWT Verification Error:", error);
      throw new Error("Failed to authenticate token");
    }
  }
}
