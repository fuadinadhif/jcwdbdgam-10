import { type Request, type Response, type NextFunction } from "express";

export async function notFound(request: Request, response: Response) {
  response
    .status(404)
    .json({ message: "The route you are looking for does not exist" });
}

export async function error(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.error(error);
  response.status(500).json({ message: error.message });
}
