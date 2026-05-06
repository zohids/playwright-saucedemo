import { Page, Locator } from '@playwright/test'

export class BasePage { 
    constructor (protected page: Page) {}

    async navigate(path: string) {
        await this.page.goto(path)
    }

    async waitForLoad() {
        await this.page.waitForLoadState('networkidle')
    }

    getElement(locator: string): Locator {
        return this.page.locator(locator)
    }
}