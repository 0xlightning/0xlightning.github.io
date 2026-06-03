import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        path = os.path.abspath("index.html")
        await page.goto(f"file://{path}")
        await page.set_viewport_size({"width": 1280, "height": 800})
        await asyncio.sleep(2) # Wait for loader and animations
        await page.screenshot(path="initial_state.png", full_page=True)
        await browser.close()

asyncio.run(main())
