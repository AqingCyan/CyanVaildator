const dayjs = require('dayjs')
const defaultOptions = {
  formatOption: 'YYYY-MM-DD',
  getYear: false,
  getMonth: false,
  getDay: false
}
/**
 * 格式化日期
 * 
 * @param {string} date 
 * @param {object} config 
 */
export default function formatDate(date = (new Date), config = {}) {
  const conf = Object.assign({}, defaultOptions, config)
  const Data = {}
  Data.formatResult = dayjs(date).format(conf.formatOption)
  if (conf.getYear) {
    Data.year = dayjs(date).year()
  }
  if (conf.getMonth) {
    Data.month = dayjs(date).month()
  }
  if (conf.getDay) {
    Data.day = dayjs(date).date()
  }
  return Data
}