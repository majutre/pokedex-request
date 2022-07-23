import { Request, Response } from "express";

export class PokedexService {
  public testMessage(req: Request, res: Response) {
    return res.status(200).send("test");
  }
}