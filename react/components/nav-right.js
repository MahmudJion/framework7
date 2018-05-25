import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7NavRight extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const props = this.props;
    const {className, id, style, sliding} = props;
    const classes = Utils.classNames(className, 'right', {
      right: true,
      sliding
    }, Mixins.colorClasses(props));
    return React.createElement('div', {
      id: id,
      style: style,
      className: classes
    }, this.slots['default']);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
}
__reactComponentSetProps(F7NavRight, {
  id: [
    String,
    Number
  ],
  sliding: Boolean,
  ...Mixins.colorProps
});
export default F7NavRight;