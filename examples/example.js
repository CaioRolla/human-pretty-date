// import { formatDate } from '../src/index';

const { formatDate } = require('../dist/index');

console.log(formatDate(new Date(new Date() - -2 * 365 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -365 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -2 * 30 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -30 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -2 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -2 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -2 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -2 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - -1 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 1 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 2 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 2 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 2 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 2 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 30 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 2 * 30 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 365 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
console.log(formatDate(new Date(new Date() - 2 * 365 * 24 * 60 * 60 * 1000), { locale: 'pt_BR' }));
