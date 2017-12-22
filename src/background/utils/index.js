import { i18n } from 'src/common';

export cache from './cache';
export setClipboard from './clipboard';
export checkUpdate from './update';
export getEventEmitter from './events';
export * from './script';
export * from './options';
export * from './requests';
export * from './search';
export { initialize } from './init';

export function notify(options) {
  browser.notifications.create(options.id || 'ViolentMonkey', {
    title: `${options.title} - ${i18n('extName')}`,
    message: options.body,
    isClickable: options.isClickable,
  });
}

export function broadcast(data) {
  browser.__send('CONTENT', data);
}
