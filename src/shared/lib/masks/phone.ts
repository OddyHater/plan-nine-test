export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (!digits.startsWith('7')) {
    return '+7';
  }

  const parts = [
    digits.slice(1, 4),
    digits.slice(4, 7),
    digits.slice(7, 9),
    digits.slice(9, 11),
  ].filter(Boolean);

  return `+7 ${parts.join(' ')}`.trim();
}

export const maskPhone = (phone: string) => {
  if (phone.length < 11) return phone;

  return `+7 ********${phone.slice(-2)}`;
};

export const isPhoneValid = (value: string) => {
  return /^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(value);
};
