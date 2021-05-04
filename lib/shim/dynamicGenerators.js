/* global postman */

import dynamicGenerators from '../common/dynamicGenerators.js';

const Extend = Symbol.for('extend');

postman[Extend].module.dynamicGenerators = dynamicGenerators;
