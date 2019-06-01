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
 * @param {string} date 待格式化日期（不传默认当前日期）
 * @param {object} config 配置选项
 * @param {string} config.formatOption 格式化格式
 * @param {boolean} config.getYear 是否获取年份
 * @param {boolean} config.getMonth 是否获取月份
 * @param {boolean} config.getDay 是否获取日期
 */
export default function formatDate(date, config = {}) {
  // 防止只传入config
  if (typeof date === 'object' && !(date instanceof Date)) {
    config = date
    date = new Date
  }
  const conf = Object.assign({}, defaultOptions, config)
  const Data = {}
  Data.formatResult = dayjs(date).format(conf.formatOption)
  if (conf.getYear) {
    Data.year = dayjs(date).year()
  }
  if (conf.getMonth) {
    Data.month = dayjs(date).month() + 1
  }
  if (conf.getDay) {
    Data.day = dayjs(date).date()
  }
  return Data
}