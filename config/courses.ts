export interface CourseDetail {
  name: string;
  price: number; // In NGN
  duration: string;
  level: string;
  format: string;
}

export const COURSES_CONFIG: Record<string, CourseDetail> = {
  'Frontend Web development': {
    name: 'Frontend Web development',
    price: 120000,
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    format: 'Virtual training, twice a week',
  },
  'Data science': {
    name: 'Data science',
    price: 120000,
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    format: 'Virtual training, twice a week',
  },
  'Product Design': {
    name: 'Product Design',
    price: 60000,
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    format: 'Virtual training, twice a week',
  },
  'Video Editing': {
    name: 'Video Editing',
    price: 60000,
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    format: 'Virtual training, twice a week',
  },
  'Digital Marketing': {
    name: 'Digital Marketing',
    price: 50000,
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    format: 'Virtual training, twice a week',
  },
  'Data Analytics': {
    name: 'Data Analytics',
    price: 80000,
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    format: 'Virtual training, twice a week',
  },
};

export const PAYMENT_TERMS = {
  upfrontPercentage: 0.3, // 30% upfront
  balancePercentage: 0.7, // 70% balance
};

/**
 * Calculates the payment amount required for a course.
 * @param courseName The career path chosen.
 * @param option The payment option chosen ('full' or 'part').
 * @returns An object containing amount to pay (in NGN), remaining balance (in NGN), and course details.
 */
export function calculatePayment(courseName: string, option: 'full' | 'part') {
  const course = COURSES_CONFIG[courseName];
  if (!course) {
    throw new Error(`Course "${courseName}" not found in configuration.`);
  }

  if (option === 'part') {
    const amountToPay = course.price * PAYMENT_TERMS.upfrontPercentage;
    const balance = course.price * PAYMENT_TERMS.balancePercentage;
    return {
      totalPrice: course.price,
      amountToPay,
      balance,
      course,
    };
  } else {
    return {
      totalPrice: course.price,
      amountToPay: course.price,
      balance: 0,
      course,
    };
  }
}
