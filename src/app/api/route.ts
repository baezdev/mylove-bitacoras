import { NextResponse } from "next/server"
import { chromium } from 'playwright'

export async function GET(req: any, res: any) {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://www.region9.telcel.com/smartdistribuidores/')
  
  const btn = await page.$('#btnEntrar');

  const inputUser = await page.$('#txtUsuario')
  const inputPassword = await page.$('#txtContrasenia')
  await inputUser?.type('23RONA95020155027')
  await inputPassword?.type('Ariana0195')

  await page.screenshot({ path: 'login.png' })

  await btn?.click()

  await page.waitForLoadState('load')

  await page.screenshot({ path: 'nice.png' })
  const h2 = await page.textContent('h2')
  console.log(h2)

  await browser.close()

  return NextResponse.json('buenas')
}