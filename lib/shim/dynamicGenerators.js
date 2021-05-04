/* global postman */

import dynamicGenerators from './dynamic.js';

const Extend = Symbol.for('extend');

postman[Extend].module.dynamicGenerators = dynamicGenerators;
