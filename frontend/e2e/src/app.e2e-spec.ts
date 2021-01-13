import { browser, logging } from 'protractor'
import { AppPage } from './app.po'

describe('workspace-project App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display main title', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('Accenture - Code.Now!')
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    )
  })
})
