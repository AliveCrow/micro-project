import drag from './drag'

export default {
  install: (app, options) => {
    app.directive('drag', drag)
  }
}
