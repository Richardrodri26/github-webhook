import { Request, Response } from "express";


export class GithubController {
  constructor(

  ) {}

  webhookHandler = (req: Request, res: Response) => {
    console.log("Endpoint hit")

    res.json("Github Webhook received");
  }



}