//@ts-expect-error may errors
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      signin: 'Sign in to your account',
      not_member: 'Not a member?',
      free_trail: 'Start a 14 day free trial',
      email: 'Email address',
      password: 'Password',
      remember_me: 'Remember me',
      continue: 'Or continue with',
      sign: 'Signin',
      forget: 'Forgot password?'
    },
    kh: {
      welcome: 'សួស្ដី',
      signin: 'ចូលគណនីយ',
      not_member: 'មិនមែនជាសមាជិក?',
      free_trail: 'ចាប់ផ្ដើមសាកល្បងហ្វ្រី 14 ថ្ងៃ',
      email: 'អាស័យដ្ឋាន អុីមែល',
      password: 'លេខសម្ងាត់',
      remember_me: 'ចងចាំ',
      continue: 'ឬបន្តជាមួយ',
      sign: 'ចូល',
      forget: 'ភ្លេចពាក្យសម្ងាត់?'
    }
  }
}))
