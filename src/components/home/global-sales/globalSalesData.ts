import arabFlag from '../../../assets/image/flags/Arab.avif'
import englishFlag from '../../../assets/image/flags/English.png'
import frenchFlag from '../../../assets/image/flags/French.png'
import germanFlag from '../../../assets/image/flags/German.png'
import hindiFlag from '../../../assets/image/flags/Hindi.png'
import italianFlag from '../../../assets/image/flags/Italian.png'
import japaneseFlag from '../../../assets/image/flags/Japanese.avif'
import mandarinFlag from '../../../assets/image/flags/Mandarin.avif'
import portugueseFlag from '../../../assets/image/flags/Portuguese.avif'
import spanishFlag from '../../../assets/image/flags/Spanish.png'

export const globalSalesLotties = {
  countries: {
    src: 'https://cdn.lottielab.com/l/96iv4VpavBe5fT.html',
    title: '+190 countries animation',
  },
  coins: {
    src: 'https://cdn.lottielab.com/l/CNWaT7SbcmrNYk.html',
    title: '+130 coins animation',
  },
}

export const languageChips = [
  { label: 'Portuguese', flag: portugueseFlag },
  { label: 'English', flag: englishFlag },
  { label: 'Spanish', flag: spanishFlag },
  { label: 'Hindi', alternateLabel: 'Indian', flag: hindiFlag },
  { label: 'French', flag: frenchFlag },
  { label: 'Italian', flag: italianFlag },
  { label: 'Arab', alternateLabel: 'Arabic', flag: arabFlag },
  { label: 'German', flag: germanFlag },
  { label: 'Japanese', flag: japaneseFlag },
  { label: 'Mandarin', flag: mandarinFlag },
]

export const paymentLogoSlots = [
  { x: 258, y: 8, drop: 12, opacity: 0.3 },
  { x: 326, y: 8, drop: 10, opacity: 0.32 },
  { x: 394, y: 8, drop: 14, opacity: 0.34 },
  { x: 192, y: 44, drop: 13, opacity: 0.96 },
  { x: 260, y: 44, drop: 16, opacity: 0.96 },
  { x: 326, y: 44, drop: 11, opacity: 0.92 },
  { x: 394, y: 44, drop: 15, opacity: 0.94 },
  { x: 192, y: 82, drop: 14, opacity: 0.98 },
  { x: 260, y: 82, drop: 12, opacity: 0.98 },
  { x: 326, y: 82, drop: 16, opacity: 0.94 },
  { x: 394, y: 82, drop: 13, opacity: 0.96 },
  { x: 192, y: 120, drop: 11, opacity: 0.72 },
  { x: 260, y: 126, drop: 9, opacity: 0.34 },
  { x: 326, y: 120, drop: 12, opacity: 0.7 },
  { x: 394, y: 126, drop: 10, opacity: 0.34 },
]

export const paymentBrandOrder = [
  { label: 'Boleto', fileId: 'boleto' },
  { label: 'Pix', fileId: 'ddaa685a' },
  { label: 'SEPA', fileId: 'd51a1b64' },
  { label: 'Discover', fileId: '363ade18' },
  { label: 'Mastercard', fileId: 'ac20aab2' },
  { label: 'Apple Pay', fileId: '9248690c' },
  { label: 'Google Pay', fileId: '0655aec7' },
  { label: 'Visa', fileId: '121d28f2' },
  { label: 'NuPay', fileId: 'eaf035de' },
  { label: 'Nequi', fileId: '161fe2f7' },
  { label: 'OXXO', fileId: '6dac7082' },
  { label: 'PicPay', fileId: '0ee5aff9' },
  { label: 'Elo', fileId: '0abd5f2c' },
  { label: 'SPEI', fileId: 'b4c30c65' },
  { label: 'PayPal', fileId: '662494a3' },
]

export const fallbackPaymentMethods = [
  'SEPA',
  'Apple Pay',
  'Discover',
  'PayPal',
  'Pix',
  'G Pay',
  'Visa',
  'Nequi',
  'NuPay',
  'OXXO',
  'PicPay',
  'SPEI',
]
