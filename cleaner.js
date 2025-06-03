import { JSDOM } from 'jsdom'

export async function cleanHtml (input) {
    const dom = new JSDOM(input)
    const document = dom.window.document

    const elementsToRemove = document.querySelectorAll('script, style')
    elementsToRemove.forEach(el => el.remove())

    const text = document.body.textContent || ''
    return text.replace(/\s+/g, ' ').trim()
}
