export const mailConfig = {
  serviceName: 'FormSubmit',
  endpoint: 'https://formsubmit.co/ajax',
  recipientEmail: 'hello@pixelcraft.by',
  subject: 'Новая заявка с сайта Pixel Craft',
  template: 'table',
  captchaEnabled: false,
  honeypotFieldName: '_honey',
} as const;
