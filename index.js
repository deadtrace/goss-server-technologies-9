import express from "express";
import headers from "./headers.js";
import puppeteer from "puppeteer";

const app = express();

app
  .use((req, res, next) => res.set(headers) && next())
  .get("/login/", (req, res) => res.send("deadtrace"))
  .get("/test/", async (req, res) => {
    const { URL } = req.query;
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector("#bt");
    await page.click("#bt");
    const value = await page.$eval("#inp", (el) => el.value);
    browser.close();
    res.send(value);
  })
  .all("/*", (r) => r.res.send("deadtrace"));

app.listen(process.env.PORT ?? 4321);
