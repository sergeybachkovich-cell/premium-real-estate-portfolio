export const mailConfig = {
  serviceName: 'FormSubmit',
  endpoint: 'https://formsubmit.co/ajax',
  recipientEmail: 'invest@vista-portfolio.by',
  subject: 'Новая заявка с сайта ВИСТА',
  template: 'table',
  captchaEnabled: false,
  honeypotFieldName: '_honey',
} as const;
