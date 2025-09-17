import { Request, Response } from "express";


export class GithubController {
  constructor(

  ) {}

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header("x-github-event") ?? "unknown";
    const signature = req.header("x-hub-signature-256") ?? "no-signature";
    const payload = req.body;

    console.log(`Received ${githubEvent} event:`, payload);
    console.log('signature :>> ', signature);

    res.status(201).send("Accepted")
  }



}