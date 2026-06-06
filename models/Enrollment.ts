import mongoose, { Schema, model, models } from 'mongoose';

const EnrollmentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    expectedCompletionMonth: {
      type: String,
      trim: true,
    },
    twitterHandle: {
      type: String,
      required: [true, 'Twitter handle is required'],
      trim: true,
    },
    linkedInHandle: {
      type: String,
      required: [true, 'LinkedIn handle is required'],
      trim: true,
    },
    paymentOption: {
      type: String,
      enum: ['part', 'full'],
      required: [true, 'Payment option is required'],
    },
    careerPath: {
      type: String,
      required: [true, 'Career path is required'],
      trim: true,
    },
    expectations: {
      type: String,
      required: [true, 'Expectations are required'],
      trim: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
    },
    paymentReference: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    amountPaid: {
      type: Number,
      default: 0, // In NGN
    },
    studentId: {
      type: String,
      unique: true,
      sparse: true, // Allows nulls to avoid unique duplicate constraint
    },
  },
  { timestamps: true },
);

const Enrollment = models.Enrollment || model('Enrollment', EnrollmentSchema);

export default Enrollment;
