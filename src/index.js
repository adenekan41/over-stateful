/**
 * Overstateful v1.0.0
 * @author Adenekan Wonderful <hellocodewonders@gmail.com>
 * (c) 2020-present Adenekan Wonderful
 * @file Manages the configuration settings and default exports
 * @version 1.0.0
 * Released under the MIT License.
 */

export * from './core/over-hooks';
export * from './core/provider';
export { default as createStore } from './core/create-store';
export { default as store } from './core/store';
export { default as thunk } from './core/thunk';
export { default as OverContext } from './core/overstateful';
