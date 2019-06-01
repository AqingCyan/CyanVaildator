/**
 * formatDate工具函数测试
 */
import formatDate from '../tools/formatDate'

test('test1', () => {
  const date = new Date
  const year = date.getFullYear()
  const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  const result = {
    formatResult: `${year}-${month}-${day}`
  }
  expect(formatDate(date)).toEqual(result)
})

test('test2', () => {
  const date = new Date
  const config = {
    getYear: true,
    getMonth: true,
    getDay: true
  }
  const year = date.getFullYear()
  const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  const result = {
    formatResult: `${year}-${month}-${day}`,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
  expect(formatDate(date, config)).toEqual(result)
})

test('test3', () => {
  const date = '19980602'
  const config = {
    formatOption: 'YYYY,MM,DD',
    getYear: true,
    getMonth: true,
    getDay: true
  }
  const result = {
    formatResult: '1998,06,02',
    year: 1998,
    month: 6,
    day: 2
  }
  expect(formatDate(date, config)).toEqual(result)
})

test('test4', () => {
  const date = new Date
  const year = date.getFullYear()
  const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  const result = {
    formatResult: `${year}-${month}-${day}`
  }
  expect(formatDate()).toEqual(result)
})

test('test5', () => {
  const date = new Date
  const config = {
    getYear: true
  }
  const year = date.getFullYear()
  const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  const result = {
    formatResult: `${year}-${month}-${day}`,
    year: year
  }
  expect(formatDate(config)).toEqual(result)
})