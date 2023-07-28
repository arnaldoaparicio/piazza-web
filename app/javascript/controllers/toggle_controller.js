import { Controller } from "stimulus"

export default class extends Controller {

    static targets = ["item"]
    static values = { class: String }

    toggle() {
        this.itemTarget.classList.toggle(this.classValue)
    }
}