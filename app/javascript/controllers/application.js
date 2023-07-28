import { Application } from "@hotwired/stimulus"

const application = Application.start()

application.register("toggle", ToggleController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
