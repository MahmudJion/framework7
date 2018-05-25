import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import f7Plugin from '../utils/plugin';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.__reactRefs = {};
  }
  render() {
    const self = this;
    const props = self.props;
    const {id, style, className} = props;
    const classes = Utils.classNames(className, 'framework7-root', Mixins.colorClasses(props));
    return React.createElement('div', {
      ref: __reactNode => {
        this.__reactRefs['el'] = __reactNode;
      },
      id: id || 'framework7-root',
      style: style,
      className: classes
    }, this.slots['default']);
  }
  componentDidMount() {
    const self = this;
    const {params = {}, routes} = self.props;
    const el = self.refs.el;
    const parentEl = el.parentNode;
    if (parentEl && parentEl !== document.body && parentEl.parentNode === document.body) {
      parentEl.style.height = '100%';
    }
    f7Plugin.init(el, params, routes);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
  get refs() {
    return this.__reactRefs;
  }
  set refs(refs) {
  }
}
__reactComponentSetProps(F7App, {
  id: [
    String,
    Number
  ],
  params: Object,
  routes: Array,
  ...Mixins.colorProps
});
export default F7App;