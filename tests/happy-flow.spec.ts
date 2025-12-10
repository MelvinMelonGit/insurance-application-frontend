import { test, expect } from '@playwright/test'

test('happy flow', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Login Page
  await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible()
  await page.getByLabel('Username').fill('u1')
  await page.getByLabel('Password').fill('u1')
  await page.getByRole('button', { name: 'Login' }).click()

  // Dashboard Page
  await expect(page.getByRole('heading', { name: 'Welcome ' })).toBeVisible()
  await page.getByRole('link', { name: 'Create Application' }).click()

  // Patient Information Page
  await expect(page.getByRole('heading', { name: 'Fill In Patient Information' })).toBeVisible()
  await page.getByLabel('Full name').fill('full name')
  await page.getByLabel('Date of birth').fill('2018-07-22')
  await page.getByLabel('Insurance member ID').fill('Insurance member ID')
  await page.getByLabel('Policy number').fill('Policy number')
  await page.getByLabel('Contact number').fill('61234567')
  await page.getByLabel('Email').fill('Email@gmail.com')
  await page.getByLabel('Address').fill('Address')
  await page.getByRole('button', { name: 'Next' }).click()

  // Hospital Information Page
  await expect(page.getByRole('heading', { name: 'Fill In Hospital Information' })).toBeVisible()
  await page.getByLabel('Hospital name').fill('Hospital name')
  await page.getByLabel('Doctor name').fill('Doctor name')
  await page.getByLabel('Doctor license').fill('Doctor license')
  await page.getByLabel('Hospital address').fill('Hospital address')
  await page.getByLabel('Hospital contact number').fill('62345678')
  await page.getByLabel('Department').fill('Department')
  await page.getByRole('button', { name: 'Next' }).click()

  // Application Reason Page
  await expect(page.getByRole('heading', { name: 'Fill In Application Reason' })).toBeVisible()
  await page.getByLabel('Category').fill('Category')
  await page.getByLabel('Date of service').fill('2018-07-22')
  await page.getByLabel('Diagnosis').fill('Diagnosis')
  await page.getByLabel('Total billed').fill('2000')
  await page.getByLabel('Reason').fill('Reason')
  await page.getByRole('button', { name: 'Next' }).click()

  // Consent Page
  await expect(page.getByRole('heading', { name: 'Terms and Conditions' })).toBeVisible()
  await page.getByRole('checkbox', { name: 'I certify this information is true.' }).check()
  await page.getByRole('checkbox', { name: 'I authorize release of medical information for application.' }).check()
  await page.getByRole('button', { name: 'Submit' }).click()

  // Thank You Page
  await expect(page.getByRole('heading', { name: 'Thanks for your submission ' })).toBeVisible()
  await page.getByRole('link', { name: 'Go Home' }).click()

  // Login Page
  await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible()
})