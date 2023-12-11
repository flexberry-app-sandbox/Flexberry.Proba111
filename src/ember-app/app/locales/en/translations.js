import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba11ДолжностиLForm from './forms/i-i-s-proba11-должности-l';
import IISProba11ОрганизацияLForm from './forms/i-i-s-proba11-организация-l';
import IISProba11ПланирСобесLForm from './forms/i-i-s-proba11-планир-собес-l';
import IISProba11РегРезультLForm from './forms/i-i-s-proba11-рег-результ-l';
import IISProba11РегистАнкетыLForm from './forms/i-i-s-proba11-регист-анкеты-l';
import IISProba11СотрудникиLForm from './forms/i-i-s-proba11-сотрудники-l';
import IISProba11ДолжностиEForm from './forms/i-i-s-proba11-должности-e';
import IISProba11ОрганизацияEForm from './forms/i-i-s-proba11-организация-e';
import IISProba11ПланирСобесEForm from './forms/i-i-s-proba11-планир-собес-e';
import IISProba11РегРезультEForm from './forms/i-i-s-proba11-рег-результ-e';
import IISProba11РегистАнкетыEForm from './forms/i-i-s-proba11-регист-анкеты-e';
import IISProba11СотрудникиEForm from './forms/i-i-s-proba11-сотрудники-e';
import IISProba11ДолжностиModel from './models/i-i-s-proba11-должности';
import IISProba11ОрганизацияModel from './models/i-i-s-proba11-организация';
import IISProba11ПланирСобесModel from './models/i-i-s-proba11-планир-собес';
import IISProba11РегРезультModel from './models/i-i-s-proba11-рег-результ';
import IISProba11РегистАнкетыModel from './models/i-i-s-proba11-регист-анкеты';
import IISProba11СотрудникиModel from './models/i-i-s-proba11-сотрудники';
import IISProba11ТЧРегистАнкетыModel from './models/i-i-s-proba11-т-ч-регист-анкеты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba11-должности': IISProba11ДолжностиModel,
    'i-i-s-proba11-организация': IISProba11ОрганизацияModel,
    'i-i-s-proba11-планир-собес': IISProba11ПланирСобесModel,
    'i-i-s-proba11-рег-результ': IISProba11РегРезультModel,
    'i-i-s-proba11-регист-анкеты': IISProba11РегистАнкетыModel,
    'i-i-s-proba11-сотрудники': IISProba11СотрудникиModel,
    'i-i-s-proba11-т-ч-регист-анкеты': IISProba11ТЧРегистАнкетыModel
  },

  'application-name': 'Proba11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba11',
          title: 'Proba11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba11: {
          caption: 'Proba11',
          title: 'Proba11',
          'i-i-s-proba11-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba11-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba11-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba11-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-proba11-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba11-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba11-должности-l': IISProba11ДолжностиLForm,
    'i-i-s-proba11-организация-l': IISProba11ОрганизацияLForm,
    'i-i-s-proba11-планир-собес-l': IISProba11ПланирСобесLForm,
    'i-i-s-proba11-рег-результ-l': IISProba11РегРезультLForm,
    'i-i-s-proba11-регист-анкеты-l': IISProba11РегистАнкетыLForm,
    'i-i-s-proba11-сотрудники-l': IISProba11СотрудникиLForm,
    'i-i-s-proba11-должности-e': IISProba11ДолжностиEForm,
    'i-i-s-proba11-организация-e': IISProba11ОрганизацияEForm,
    'i-i-s-proba11-планир-собес-e': IISProba11ПланирСобесEForm,
    'i-i-s-proba11-рег-результ-e': IISProba11РегРезультEForm,
    'i-i-s-proba11-регист-анкеты-e': IISProba11РегистАнкетыEForm,
    'i-i-s-proba11-сотрудники-e': IISProba11СотрудникиEForm
  },

});

export default translations;
