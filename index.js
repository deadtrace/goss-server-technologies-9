import express from "express";
import headers from "./headers.js";
import { firefox } from "playwright";

const app = express();

app
  .use((req, res, next) => res.set(headers) && next())
  .get("/login/", (req, res) => res.send("deadtrace"))
  .get("/test/", async (req, res) => {
    const { URL } = req.query;
    const browser = await firefox.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(URL);
    await page.click("button#bt");
    const value = await page.inputValue("input#inp");
    await browser.close();
    res.send(value);
  })
  .all("/*", (r) => r.res.send("deadtrace"));

app.listen(process.env.PORT ?? 4321);
