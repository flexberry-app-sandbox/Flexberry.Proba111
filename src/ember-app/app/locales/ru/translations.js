import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba11',
          title: 'Proba11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
